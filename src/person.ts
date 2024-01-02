export default class Person {

    constructor(private name: string) {}
    
    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}