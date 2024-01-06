/**
 * the complete Message.
 * @typedef {Object} Message
 * @property {string} msg
 */

/**
 * Class representing a message.
 * @class
 */
class Message {
    #msg
    /**
     * create Message.
     * @param {string} msg - the message value.
     */
    constructor(msg) {
        this.#msg = msg;
    }

    /**
     * Get message value.
     * @returns {string} msg - the message value.
     */
    getMessage() {
        return this.#msg;
    }

    /**
     * Set message value.
     * @param {string} message - the message value.
     */
    setMessage(message) {
        this.#msg = message;
    }
}

export { Message }