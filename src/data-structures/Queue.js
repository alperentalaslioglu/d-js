'use strict';

var Queue = function () {
    this.queue = [];
};

Queue.prototype.enqueue = function(item){
    this.queue.push(item);
}

Queue.prototype.dequeue = function(){
    this.queue.shift();
}

Queue.prototype.getFrontItem = function(){
    this.queue[0];
}

Queue.prototype.getBackItem = function(){
    this.queue[queue.length - 1];
}


module.exports = Queue;

