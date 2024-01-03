import Message from "./message.js"

/** Class representing a Chanel. */
export default class Channel {
    #message
    #queue
    /**
     * create the channel.
     * @param {Message} message - the message value.
     * @param {string} queue - the queue value.
     */
    constructor(message, queue) {
        this.#message = message;
        this.#queue = queue;
    }

    /**
     * Get message value.
     * @returns {Message} the message value.
     */
    getMessage() {
        return this.#message;
    }

    /**
     * Set message value.
     * @param {Message} message - the message value. 
     */
    setMessage(message) {
        this.#message = message;
    }

    /**
     * Get the queue value.
     * @returns {string} the queue value.
     */
    getQueue() {
        return this.#queue;
    }

    /**
     * Set queue value.
     * @param {string} queue - the queue value.
     */
    setQueue(queue) {
        this.#queue = queue;
    }
}