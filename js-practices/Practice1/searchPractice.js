'use strict'

function search(input, target) {
  var index = -1;
  var evaluating = 0.5;
  var start = 0;
  var end = input.length - 1;
  var maxLoop = (Math.log2(input.length)).toFixed(0) + 1;
  for (var i = 0;i <= maxLoop; i++ ){
    let evaluateIndex = ((end + start)/2).toFixed(0);
    evaluating = input[evaluateIndex];
    console.log(start + "  " + end + "  " + evaluating);
    if(evaluating === target){
      index = evaluateIndex;
      break;
    }
    if(evaluating > target){
      end = input.indexOf(evaluating);
    }
    if(evaluating < target){
      start = input.indexOf(evaluating);
    }

  }
  console.log(typeof (2.444).toFixed(2));
  return index;
}

console.log(search([-9638,-9583,-9503,-9494,-9253,-9199,-9137,-8980,-8918,-8852,-8642,-8638,-8189,-8145,-7876,-7804,-7779,-7409,-6972,-6881,-6853,-6021,-5955,-5911,-5890,-5200,-5040,-4960,-4857,-4558,-4428,-4414,-4082,-3707,-3612,-3569,-2877,-2647,-2537,-1952,-1925,-1902,-1610,-1200,-1156,-700,-185,85,376,809,1228,1616,1623,1629,1883,2205,2314,2352,2454,2665,2955,3103,3181,3425,3475,3847,3889,3958,4045,4156,4464,4974,5151,5237,5518,5636,5705,5894,5909,5962,6155,6326,6358,6694,6967,7596,7981,8168,8239,8395,8447,8740,8755,9407,9469],-5200));

module.exports = search
