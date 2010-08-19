Object.defineProperty(Object.prototype, '__class__', { 
  get: function() {
    return Object.prototype.toString.call(this).slice(8,-1);
  } 
});

/*

// or slightly beefed up version
 
Object.defineProperty(Object.prototype, '__class__', { 
  get: (function(toString) { 
    return function() {
      return toString.call(this).slice(8,-1); 
    };
  })({}.toString)
});

*/