/** Class representing a Timeline. */
export default class Timeline {
    #initial
    #end
    #data
    /**
     * create the Timeline.
     * @param {Date} initial - the date initial .
     * @param {Object} data - the data process.
     */
    constructor(initial, data) {
        this.#initial = initial;
        this.#data = data;
    }

    /**
     * Get date initial.
     * @returns {Date} the date initial.
     */
    getInitial() {
        return this.#initial;
    }

    /**
     * Get date end
     * @returns {Date} the date end.
     */
    getEnd() {
        return this.#end;
    }

    /**
     * Get data process.
     * @returns {Object} the data process.
     */
    getData() {
        return this.#data;
    }

    /**
     * Set date end.
     * @param {Date} end - the date end. 
     */
    setEnd(end) {
        this.#end = end;
    }

}