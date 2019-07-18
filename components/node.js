module.exports = class Node {
    constructor(inputSize, id, defaultState = false) {
        this.inputs = [];
        this.outputs = [];
        this.inputSize = inputSize;
        this.id = id;
        this.state = defaultState;
    }
    logState() {
        console.log(`${this.id} state:  ${this.state?'On':'Off'}`)
    }
    getState() {
        return this.state;
    }
    compute() {
        this.outputs.forEach((output) => output.compute())
    }
}