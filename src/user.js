import Person from "./person.js";

/**
 * Class representing a dot.
 * @extends Person
 */
export default class User extends Person {
    #email;
    #password;
    #friends = [];

    /**
     * Create a user.
     * @param {string} name - the name value.
     * @param {string} email - the email value.
     * @param {string} password - the password value.
     */
    constructor(name, email, password) {
        super(name);
        this.#email = email;
        this.#password = password;
    }

    /**
     * Get the email value.
     * @returns {string} the email value.
     */
    getEmail() {
        return this.#email;
    }

    /**
     * Set email value.
     * @param {string} email - the email value.
     */
    setEmail(email) {
        this.#email = email;
    }

    /**
     * Get the password value.
     * @returns {string} password - the password value.
     */
    getPassword() {
        return this.#password;
    }

    /**
     * Set password value.
     * @param {string} password - the password value. 
     */
    setPassword(password) {
        this.#password = password;
    }

    /**
     * Get Friends
     * @returns {User[]} array - the friends array value.
     */
    getFriends() {
        return this.#friends;
    }

    /**
     * Add friend
     * @param {User} user - add Friend to list. 
     */
    addFriend(user) {
        if (user instanceof User) {
            this.#friends.push(user);
        } else {
            throw new Error(`User add Faild : ${user} - ${typeof user}`);
        }
    }

}