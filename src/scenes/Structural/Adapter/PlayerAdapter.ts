import { IPlayer } from "./AdapterExample";

export default class PlayerAdapter implements IPlayer
{
    firstName: string;
    lastName: string;
    age: number;
    team: string;

    constructor(servicePlayer: IServicePlayer) {
        this.firstName = servicePlayer.firstName;
        this.lastName = servicePlayer.lastName;
        this.age = servicePlayer.age;
        this.team = servicePlayer.team;
    }

    public getInfo() {
        return {
            name: this.firstName + " " + this.lastName,
            age: this.age,
            team: this.team
        }
    }
}

interface IServicePlayer {
    firstName: string, lastName: string, age: number, team: string;
}