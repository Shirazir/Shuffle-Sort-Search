 //Dataset Randomization, Bubble Sort, and Binary Search Implementation in JavaScript
 
var newArr = [];
 
for (i = 10000; i > 1; i -= 3) {
  newArr.push(i);
}
 
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];        array[j] = temp;
  }
  return array;
}

function sort(array) {
  for (j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }  
    }
  }
  return array;
}

function binarySearch(array, target) {
  var newArray = [];
  var n = Math.floor(array.length / 2);
  if (array.length === 1) {
   if(array[0] === target) {
     return true;
   } 
   else {
     return false;
   }
  }
  else if (array[n] > target) {
    newArray = array.slice(0, n);
    return binarySearch(newArray, target);
  }
  else if (array[n] < target) {
    newArray = array.slice((n + 1), array.length);
    return binarySearch(newArray, target);
  }
}

shuffleArray(newArr);

sort(newArr);

binarySearch(newArr, 9997);