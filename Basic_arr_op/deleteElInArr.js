// How we can delete a particular Element from an Arr?

// Approach-----------> We can start position of loop from that particular element which we have to delete, just set one position ahead from that particular element's position
// in result we will get the last element's value repeat two times we just have to make one position less from the original size of the array.

function deleteElInArr() {
  const arr = [2, 89, 5, 31, 75, 39];
  const position = 3;
  for (let i = position; i < arr.length; i++) {
    // setting one position ahead from the removing element's position
    arr[i] = arr[i + 1];
  }
  // lastly here we set array's length one postion less from the original size of the array.
  arr.length = arr.length - 1;
  return arr;
}
console.log(deleteElInArr());
