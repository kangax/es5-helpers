// doesn't take care of repeating names
Object.getPropertyNames = function(obj) {
  var proto = Object.getPrototypeOf(obj);
  return Object.getOwnPropertyNames(obj).concat(proto ? Object.getPropertyNames(proto) : []);
};