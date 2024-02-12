import Example from "../../../Example";
import {Player} from "@motion-canvas/core";
import PlayerInfoAPI from './PlayerInfoAPI';

interface PlayerInfo {
    name: string,
    age: number,
    team: string,
}

/// Considered TARGET
class PlayerInfoDatabase {
    playerInfos: PlayerInfo[];

    public post(): PlayerInfo {
        return {
            name: "a",
            age: 1,
            team: "gz"
        }
    }
}

/// The ADAPTEE, which is adapted to fit the target
class ThirdPartyAPI {    
    public request(): any {
        return {
            firstName: "a",
            lastName: "z",
            age: 1,
            team: "gz"
        }
    }
}

class Adapter extends PlayerInfoDatabase {
    private api: ThirdPartyAPI;

    constructor(api: ThirdPartyAPI) {
        super();
        this.api = api;
    }

    public post(): PlayerInfo {
        return super.post();
    }
}

///
/// CLIENT CODE
///
class Client implements Example {
    target = new PlayerInfoDatabase();
    adaptee = new ThirdPartyAPI();

    public run() {

    }
}

export default Client;
