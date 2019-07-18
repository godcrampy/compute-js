const Node = require('../node');

module.exports = class XOR extends Node {
    constructor(id) {
        super(2, id);
    }

    compute() {
        this.state = this.inputs[0].getState() ^ this.inputs[1].getState();
        super.compute();
    }
}