// Sorting------> Sorting is paradims from which we can sort the array elements in specific order like increasing or decreasing order.

//Approach-------> We can use two for loops, the outer for loop is using to run inner for loops each time couts 0 to less than array's length and iner loop every time will compare its current element to its next element and if it will find that the first element is less value than the next one than it will swap the number and in this way it will make increasing order series.

const sortingArr = () => {
  const arr = [1, 87, 34, 21, 31, 91, 11];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(sortingArr());
