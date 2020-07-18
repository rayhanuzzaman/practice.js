// // function myArrayMin(arr) {
//   var len = arr.length;
//   var min = 0;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }
// var minNumber = myArrayMin(['rakibul','rahimudiin','rayhan','jamaluddin','ni']);
// // console.log(minNumber);


function tinyFriend(words)
  for ( i = 0; i < words.length; i++ ){   // Looping through the array to find index
    let length = words[i].length;    // Setting  variable 'length' as the length of an index in the array
    let min = Math.min(length);   // Setting variable 'min' to index in the array that's the shortest
    return min;   // min should return whatever length is the shortest?
  }
  var result = tinyFriend(['abc','abcd','abcvds']);
  console.log(result);
