'use strict';
module.exports = function() {

  var secretNumberGenerator = (function(){
    var secretNumber = 0;
    return function(){
      if(secretNumber === 0){
        secretNumber = Math.random() % 1000000;
      }
      return secretNumber;
    };
  })();

  function secretNumber(){
    var secretNumber = 0;
    if(secretNumber === 0){
      secretNumber = Math.random() % 1000000;
    }
    return secretNumber;
  }

  return secretNumberGenerator;

};