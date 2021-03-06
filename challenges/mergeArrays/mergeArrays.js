function mergeArray(left, right) {
  const combinedArray = [];
  // if there is anything left in either array
  while (left.length || right.length) {
    // if both have values
    if (left.length && right.length) {
      // if (left[0]===right[0]){
      //   combinedArray.push(left.shift())
      //   combinedArray.push(right.shift())
      // }
      // if left value is lower then put it in the final array
      if (left[0] < right[0]) {
        combinedArray.push(left.shift());
      } else { /* if right value is lower then put it in the final array */
        combinedArray.push(right.shift());
      }
    } else if (left.length) { /* if just left is left, than put its value in final array */
      combinedArray.push(left.shift());
    } else { /* if just right is left, than put its value in final array */
      combinedArray.push(right.shift());
    }
  }
  return combinedArray;
}

// Options
// concatenate and then sort
// sort each and then mergeSort *already sorted so nvm
// sort one and then merge elements in one by one *alreadySorted so nvm
// merge from mergeSort
function mergeArrays(arrays) {
  let finalArray = [];
  // let firstArray = arrays[0]
  // let nextArray = arrays[1]
  while (arrays.length) {
    // let firstArray = arrays.shift()
    // let nextArray = arrays.shift()
    finalArray = mergeArray(finalArray, arrays.shift());
  }

  return finalArray;
}

module.exports = mergeArrays;
