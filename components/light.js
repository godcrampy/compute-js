const Node = require('./node');

module.exports = class Light extends Node {
    constructor(id) {
        super(1, id, false);
    }
    compute() {
        this.state = this.inputs[0].getState();
    }
}