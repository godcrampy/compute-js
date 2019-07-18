const Node = require('./node');

module.exports = class Switch extends Node {
    constructor(id) {
        super(0, id);
    }
    toggleSwitch() {
        this.state = !this.state;
        this.compute();
    }
    switchOn() {
        this.state = true;
        this.compute();
    }
    switchOff() {
        this.state = false;
        this.compute();
    }
    compute() {
        super.compute();
    }
}