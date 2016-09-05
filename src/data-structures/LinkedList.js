'use strict';

function Node(val,next){
  return {val: val, next: next};
}

var LinkedList = function () {};

LinkedList.prototype.displayLinkedList = function(linkedList,link){
  if(linkedList.next){
    link = (link || "") + linkedList.val + " -> ";
    displayLinkedList(linkedList.next,link);
  }else{
    link = (link || "") + linkedList.val + " -> ";
    console.log(link);
  }
}



module.exports = LinkedList;


