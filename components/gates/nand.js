const Node = require('../node');
const Graph = require('../graph');
const AND = require('./and');
const NOT = require('./not');

module.exports = class NAND extends Node {
    constructor(id) {
        super(2, id, true);
        this.graph = new Graph()
        this.and1 = new AND('and1');
        this.not1 = new NOT('not1');
        this.graph.addComponent(this.and1, true);
        this.graph.addComponent(this.not1);
        this.graph.addConnection(this.and1, this.not1);
        this.and1.inputs = this.inputs;
    }

    compute() {
        this.graph.run();
        this.state = this.not1.state;
        super.compute();
    }
}