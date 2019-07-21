const Node = require("../node");

module.exports = class NOR extends Node {
  constructor(id) {
    super(2, id, true);
  }

  compute() {
    this.state = !(this.inputs[0].getState() || this.inputs[1].getState());
    super.compute();
  }
};