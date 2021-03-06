/* eslint-disable */
// TODO: enable linting

const list1 = [23, 4, 42, 15, 16, 8, 3];

const merge = (left, right) => {
  const result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
};

const mergeSort = (listArg) => {
  const list = listArg;
  if (list.length <= 1) {
    return list;
  }

  const middle = list.length / 2;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(list1));
