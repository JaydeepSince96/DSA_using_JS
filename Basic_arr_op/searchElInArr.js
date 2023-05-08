//How to search an Element in an Array ?

//Approach-------------> We can start searching elements one by one in the array and the moment when searched elements occured we can return the index;

function searchElInArr() {
  const arr = [3, 77, 23, 31, 43, 96];
  const searchedEl = 43;
  for (let i = 0; i < arr.length; i++) {
    // Logic to get index of searched elements and the occurence of the searched elements can be checked by if condition.
    if (arr[i] == searchedEl) {
      return i;
    }
  }
}
console.log(searchElInArr());

// Basically this kind of approach which have check elements one by one called Linear search algorithm.
