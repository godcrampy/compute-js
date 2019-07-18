module.exports = class Graph {
    constructor() {
        this.adjacencyList = {};
        this.root = [];
    }
    run() {
        if (this.root.length)
            this.root.forEach((component) => component.compute());
        else throw `No root element`;
    }
    addComponent(component, isRoot = false) {
        if (!this.adjacencyList[component.id]) {
            if (isRoot) this.root.push(component);
            this.adjacencyList[component.id] = [];
        } else throw `Component with the same id already exists in this graph`;
    }

    addConnection(component1, component2) {
        // Check if components exist
        if (this.adjacencyList[component1.id] && this.adjacencyList[component2.id]) {
            // Check if components can be added
            if (component2.inputSize > component2.inputs.length) {
                // Connect components
                component1.outputs.push(component2);
                this.adjacencyList[component1.id].push(component2);
                component2.inputs.push(component1);
                this.adjacencyList[component2.id].push(component1);
                // component2.compute()
            } else throw `${component2.id}: Input size exceeded`;
        } else throw `Cannot find component to make connections`
    }
}