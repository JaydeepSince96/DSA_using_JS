//Q: Can you merge two array with sorted order?

// Approach-----> we can do this using while loop.inside the while loop we have to give some condition so that our array loop have some boundry, after that we have to check which array's first elements is have less value and increase the variable's value according to that.
//If one of the array's elements is more than the other then we have to run another while loop.

const mergeSortedArr = () => {
  const arr1 = [2, 15, 23, 45, 52, 61];
  const arr2 = [29, 38, 49, 51];
  const mergeArr = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr[k] = arr1[i];
      //  k++; Here K is reapeted two times so better we can put k inside while brackets.
      i++;
    } else {
      mergeArr[k] = arr2[j];
      //  k++; Here K is reapeted two times so better we can put k inside while brackets.
      j++;
    }
    //Here we keep k out of the if-else statement;
    k++;
  }
  // The while loop stops after the traversing of shorter elements array arr2 in-order to include all the elements of arr1 we can run another while loop.
  while (i < arr1.length) {
    mergeArr[k] = arr1[i];
    i++;
    k++;
  }
  return mergeArr;
};

console.log(mergeSortedArr());
