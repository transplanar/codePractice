/* eslint-disable */
// TODO: enable linting

// take in array, sort it, loop through until lowest value is found
function missingIntSolution(A) {
  // Sort array with built in function
  const sortedArray = A.sort();
  let lowestIntUnfound = 1;
  let sortedArrayContains1 = false;

  for (let i = 0; i < sortedArray.length; i += 1) {
    // if first element is greater than 1
    if (i === 0 && sortedArray[i] > 1) {
      break;
    }
    // if the list is negative, lowest Int is 1
    if (sortedArray[i] < 1) {
      continue;
    }
    if (sortedArray[i] === 1) {
      sortedArrayContains1 = true;
    }

    if (sortedArray[i + 1] - sortedArray[i] > 1) {
      lowestIntUnfound = sortedArray[i] + 1;
      break;
    }

    // list is sorted evenly reaches last one and lowest unfound int is one after last element
    if (sortedArrayContains1 && i === sortedArray.length - 1) {
      lowestIntUnfound = sortedArray.slice(-1).pop() + 1;
    }
  }

  return lowestIntUnfound;
}

module.exports = missingIntSolution;
