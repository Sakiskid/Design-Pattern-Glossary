import Example from "../../../Example";
import {GetLeagueInfo} from './LeagueInfoService';
import PlayerAdapter from "./PlayerAdapter";

/// Client Interface
interface IPlayer {
    getInfo(): { name: string, age: number, team: string };
}

class Player implements IPlayer {
    name: string;
    age: number;
    team: string;

    getInfo() {
        return {
            name: this.name,
            age: this.age,
            team: this.team
        }
    }
}

class PlayerInfoDatabase {
    playerInfos: IPlayer[] = [];

    public create(player: IPlayer) {
        this.playerInfos.push(player);
    }

    public readAll() : IPlayer[] {
        return this.playerInfos;
    }
}

///
/// CLIENT CODE
///
class Client implements Example {
    playerDB = new PlayerInfoDatabase();

    public run() {
        let APIresponse = GetLeagueInfo(); // Calls the service, gets a list of incompatible data

        for (let i = 0; i < APIresponse.length; i++) {
            // Creates an adapter for each player in the data
            let adapter = new PlayerAdapter(APIresponse[i]);
            // the adapter is now a compatible player!
            // We can add it to the db safely
            this.playerDB.create(adapter);
        }

        console.log("Adapter example:");
        console.log(this.playerDB.readAll());
        return;
    }
}

export { Client, IPlayer };
