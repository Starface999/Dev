function binarySearchIterative(array, target) {
  // declare variables for high, low, and mid points of the array
  var mid, low = 0,
      high = array.length - 1; // declaring multiple variables at once

  // while the low is less than the high
  while (low <= high) {
    // set mid equal to halfway between the low and the high
    mid = Math.floor((low + high) / 2);

    // if the value of indexing the array using mid is greater than the target
    if (array[mid] > target) {
      // set the high to mid - 1, start loop over
      high = mid - 1;
    // else if the value of indexing the array using mid is greater than the target
    } else if (array[mid] < target) {
      // set the low to mid - 1, start loop over
      low = mid + 1;
    } else {
      // return the midpoint when the indexed midpoint matches the target
      return mid;
    }
  }
  // return null if the target is not found
  return null;
}

var testArray = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearchIterative(testArray, 3, 1, 10));
console.log(binarySearchIterative(testArray, 7, 1, 10));