Object.deepFreeze = function(obj) {
  var ownPropertyNames = Object.getOwnPropertyNames(obj), 
      i = ownPropertyNames.length, 
      ownProperty;
  Object.freeze(obj);
  while (i--) {
    ownProperty = obj[ownPropertyNames[i]];
    if (ownProperty !== null && (/^(object|function)$/).test(typeof ownProperty)) {
      Object.deepFreeze(ownProperty);
    }
  }
};