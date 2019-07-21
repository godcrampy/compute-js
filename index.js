const Switch = require("./components/switch");
const Graph = require("./components/graph");
const AND = require("./components/gates/and");
const OR = require("./components/gates/or");
const NOT = require("./components/gates/not");
const Light = require("./components/light");
const NAND = require("./components/gates/nand");
const XOR = require("./components/gates/xor");

var switch1 = new Switch("swt1");
var switch2 = new Switch("swt2");
var test = new XOR("not1");
var light1 = new Light("lgt1");

var graph = new Graph();

graph.addComponent(switch1, true);
graph.addComponent(switch2, true);

graph.addComponent(light1);
graph.addComponent(test);


graph.addConnection(switch1, test);
graph.addConnection(switch2, test);
graph.addConnection(test, light1);
graph.run();


switch1.logState();
switch2.logState();
light1.logState();


switch1.switchOn();
switch1.logState();
switch2.logState();
light1.logState();

switch2.switchOn();
switch1.logState();
switch2.logState();
light1.logState();