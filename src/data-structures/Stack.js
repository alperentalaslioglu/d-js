'use strict';

var Stack = function () {
    this.stack = [];
};

Stack.prototype.push = function (item) {
    this.stack.push(item);
};

Stack.prototype.pop = function () {
    var top = this.stack.pop();
    return top;
};

Stack.prototype.peek = function () {
    return this.stack[stack.length - 1];
}

Stack.prototype.isEmpty = function () {
    return this.stack.length == 0;
}

Stack.prototype.displayStack = function () {

};

module.exports = Stack;


