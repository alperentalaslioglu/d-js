'use strict';

var Stack = function () {
    this.stack = [];
};

Stack.prototype.push = function (item) {
    this.stack.push(item);
};

Stack.prototype.pop = function () {
    return this.stack.pop();;
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


