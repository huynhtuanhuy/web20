'use strict'

function generate(testLengthArray){
  // const result = [];
  // for(let i=0; i < testLengthArray.length; i++) {
  //   let item = {
  //     input: [],
  //     output: null,
  //     target: null,
  //   }
  //   for(let j=0; j < testLengthArray[i]; j++) {
  //     item.input[j] = Math.floor(Math.random()*20000 - 10000);
  //   }

  //   item.input = item.input.sort((a,b) => a-b);

  //   if(i === 0) {
  //     item.target = 10001;
  //     item.output = item.input.indexOf(item.target);
  //   }

  //   if(i === 1) {
  //     item.output = 0;
  //     item.target = item.input[0];
  //   }

  //   if(i === 2) {
  //     item.output = item.input.length - 1;
  //     item.target = item.input[item.output];
  //   }

  //   if(i === 3) {
  //     item.output = 1;
  //     item.target = item.input[item.output];
  //   }

  //   if(i > 3) {
  //     item.target = item.input[Math.floor(Math.random()*testLengthArray[i])];
  //     item.output = item.input.indexOf(item.target);
  //   }

  //   result[i] = item;
  // }
  // Array.forEach(function(item, index, array) {

  // });
  // Array.filter(function(item, index, array) {
    
  // });

  return testLengthArray.map(function(itemInputLength, index) {
    let newItem = {
      input: [],
      output: null,
      target: null,
    }

    newItem.input = new Array(itemInputLength).map(function() {
      return Math.floor(Math.random()*20000 - 10000);
    }).sort((a,b) => a-b);

    if(index === 0) {
      newItem.target = 10001;
      newItem.output = newItem.input.indexOf(newItem.target);
    }

    if(index === 1) {
      newItem.output = 0;
      newItem.target = newItem.input[0];
    }

    if(index === 2) {
      newItem.output = newItem.input.length - 1;
      newItem.target = newItem.input[newItem.output];
    }

    if(index === 3) {
      newItem.output = 1;
      newItem.target = newItem.input[newItem.output];
    }

    if(index > 3) {
      newItem.target = newItem.input[Math.floor(Math.random()*itemInputLength)];
      newItem.output = newItem.input.indexOf(newItem.target);
    }

    return newItem;
  });
}

module.exports = generate
