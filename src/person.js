/** Class representing a Person. */
export default class Person {

    #name;
    /**
     * create a person.
     * @param {string} name - the name value.
     */
    constructor(name) {
        if (!name) {
            throw new Error(`error: name is empty`);
        }
        this.#name = name;
    }
    
    /**
     * set name value.
     * @param {string} name - the name value.
     */
    setName(name) {
        this.#name = name;
    }

    /**
     * Get the name value.
     * @returns {string} the name value.
     */
    getName() {
        return this.#name;
    }
}