// How to merge two arrays into another array?

//Approach----------> We can make a variable and keep the first-one array into it by using for loop, second times we can again use for loop but this time run your loop after the length of first-one array.

function mergeTwoArr() {
  const arr1 = [3, 4, 98, 101, 37, 41, 99];
  const arr2 = [76, 34, 22, 87, 89, 57, 51, 9999];
  const combinedArr = [];
  // keep first array in to the variable
  for (let i = 0; i < arr1.length; i++) {
    combinedArr[i] = arr1[i];
  }
  // run the for loop after the length of first array.
  for (let i = 0; i < arr2.length; i++) {
    combinedArr[arr1.length + i] = arr2[i];
  }
  return combinedArr;
}

console.log(mergeTwoArr());
