const Node = require("../node");

module.exports = class AND extends Node {
  constructor(id) {
    super(2, id, false);
  }
  compute() {
    // Input Sizes match is verified by the graph
    this.state = this.inputs[0].getState() && this.inputs[1].getState();
    super.compute();
  }
};