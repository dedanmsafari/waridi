//Given an array.Sot it in Ascending order i.e [2,3,6,5,3,1,9] should return [1,2,3,3,5,9]

const sort = [3, 2, 9, 7, 5, 1, 8, 4];

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (arr[minIndex] !== arr[i]) {
      let lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
};

const sorted = SelectionSort(sort);

console.log(sorted);
