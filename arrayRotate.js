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

getMaxElementIndexes([1, 2, 3, 4, 5], [2, 3]);
