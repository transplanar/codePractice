/* eslint-disable */
// TODO: enable linting

const list1 = [23, 4, 42, 8, 16, 15];

const selectionSort = (listArg) => {
  const list = listArg;
  for (let i = 0; i < list.length; i += 1) {
    let currentMinIndex = i;
    for (let j = currentMinIndex + 1; j < list.length; j += 1) {
      if (list[j] < list[currentMinIndex]) {
        currentMinIndex = j;
      }
    }
    if (currentMinIndex !== i) {
      const oldMinValue = list[i];
      list[i] = list[currentMinIndex];
      list[currentMinIndex] = oldMinValue;
    }
  }
  return list;
};

console.log(selectionSort(list1));
