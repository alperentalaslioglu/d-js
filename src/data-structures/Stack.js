'use strict';

var Stack = function () {
    this.stack = [];
};

Stack.prototype.push = function (item) {
    this.stack.push(item);
};

Stack.prototype.pop = function () {
    if (this.stack.length > 0) {
        return this.stack.pop();
    }
    return null;
};

Stack.prototype.peek = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
    }
    return null;
}

Stack.prototype.isEmpty = function () {
    return this.stack.length === 0;
}

Stack.prototype.getItemCount = function(){
    return this.stack.lenth;
}

Stack.prototype.displayStack = function () {
    console.log('|');
    for (var i = this.stack.length - 1; i >= 0; i--) {
        console.log('|' + this.stack[i]);
    }
    console.log('------');
};

module.exports = Stack;


