'use strict';

var Queue = function () {
    this.queue = [];
};

Queue.prototype.enqueue = function(item){
    this.queue.push(item);
}

Queue.prototype.dequeue = function(){
    if(this.queue.length > 0){
        return this.queue.shift();
    }else{
        console.log("Empty Queue!");   
    }
}

Queue.prototype.getFrontItem = function(){
    if(this.queue.length > 0){
        return this.queue[0];
    }else{
        console.log("Empty Queue!");   
    }
}

Queue.prototype.getBackItem = function(){
    if(this.queue.length > 0){
        return this.queue[queue.length - 1];
    }else{
        console.log("Empty Queue!");   
    }
}


module.exports = Queue;

