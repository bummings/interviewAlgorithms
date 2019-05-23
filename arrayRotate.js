// Erica has two arrays of integers. THE FIRST consists
// of distinct, positive integers and is her WORK ARRAY.
// The second holds a list of integers DEFINING OPERATIONS
// ON THE WORK ARRAY. In one left circular motion, the element
// at index[0] is moved to the highest index of the array
// and all of the elements shift left (down) by 1 index.

// Given an array of distinct positive integers, perform each
// rotation in the second array and determine the index of the
// highest value element within the array.

function getMaxElementIndexes(workArr, shift) {
  for (let x = 0; x < shift.length; x++) {
    // for each value in the shift array, do this:
    for (let i = 0; i < shift[x]; i++) {
      //  rotate the array x amount of times, as per shift number
      let shifted = workArr.shift();
      workArr.push(shifted);
    }
    // grab the index of the highest value in the array
    let highestIndex = workArr.indexOf(Math.max(...workArr));
    console.log(highestIndex);
  }
}

// Here you go, Erica
getMaxElementIndexes([1, 2, 3, 4, 5], [2, 3]);
