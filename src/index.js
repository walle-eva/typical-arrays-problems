
exports.min = function min (array) {
  let min = Infinity;
    for(let i = 0; i , array.length; i++){
      if(array[i] < min){
        min = array[i]
      }
    }
    return min;
}

exports.max = function max (array) {
  let max = -Infinity;
    for(let i = 0; i < array.length; i++){
      if(array[i] > max){
        max = array[i]
      }
    }
    return max;
}

exports.avg = function avg (array) {
  let suma = 0;
    for(let i = 0; i < array.length; i++){
      summa += arr[i]
    }
    return summa/array.length;
}
