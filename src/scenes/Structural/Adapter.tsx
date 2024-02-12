import Example from "../../Example";

interface Player {
    name: string,
    age: number
}

class Target {

}

class ThirdPartyAPI {    
    public request(): string {
        
    }
}

class Adapter extends Target {

}


// Here's our code:
class Client implements Example {
    public run() {
        let target = new Target();
    }
}

export default Client;
