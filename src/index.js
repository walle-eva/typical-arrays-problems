
exports.min = function min (array) {
  if(arguments.length == 0 || array.length == 0){return 0};
  let min = Infinity;
    for(let i = 0; i < array.length; i++){
      if(array[i] < min){
        min = array[i]
      }
    }
    return min;
}

exports.max = function max (array) {
  if(arguments.length == 0 || array.length == 0){return 0};
  let max = -Infinity;
    for(let i = 0; i < array.length; i++){
      if(array[i] > max){
        max = array[i]
      }
    }
    return max;
}

exports.avg = function avg (array) {
  if(arguments.length == 0 || array.length == 0){return 0};
  let summa = 0;
    for(let i = 0; i < array.length; i++){
      summa += array[i]
    }
    return summa/array.length;
}
