// Given a sorted array [2,3,4,5,6,6,7,8] and target 6 return first and last Index i.e 4 & 5.

function findIndex(arr, tgt) {
  let firstIndex = arr.indexOf(tgt);
  if (firstIndex !== -1) {
    let start = firstIndex;
    let end = firstIndex;
    while (arr[firstIndex] === arr[firstIndex + 1]) {
      end++;
      firstIndex++;
    }
    return [start, end];
  }
  return [-1, -1];
  //find its first index.
  //lastIndex === firstIndex.
  //if succeeding numbers === arr[fistIndex] increase lastIndex, then return
}

const indexes = findIndex([2, 3, 4, 5, 6, 6, 7, 8], 6);

console.log(indexes); //4 and 5
