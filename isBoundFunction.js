function isBoundFunction(obj) {
  return typeof obj == 'function' && !Object.hasOwnProperty.call(obj, 'prototype');
}

/*

var f = function(){ return this; };
var objToBind = { };

var bound = f.bind(objToBind);

isBoundFunction(f); // false
isBoundFunction(bound); // true

isBoundFunction({ }); // false

*/