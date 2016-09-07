'use strict';

var Set = function () {
    this.set = [];
};

Set.prototype.add = function (item) {
    this.set.push(item);
};

Set.prototype.clear = function(){
    this.set.length = 0;
}



