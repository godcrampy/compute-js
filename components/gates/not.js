const Node = require('../node');

module.exports = class NOT extends Node {
    constructor(id) {
        super(1, id, false);
    }
    compute() {
        // Input Sizes match is verified by the graph
        this.state = !this.inputs[0].getState();
        super.compute();
    }
}