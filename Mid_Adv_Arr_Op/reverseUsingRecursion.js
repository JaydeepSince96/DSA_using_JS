// Q) Reverse the array without using any loop
// Approach------> we can swap the arr[start] element to arr[end] element and like this the arr[start]+1 element to arr[end]-1 element by doing this all the array elements will transfered from first to last and our array will will be reversed but always performed this using condition

const reverseArray = (data, start, end) => {
  // When start element will be less or equal to the end element than swapping will be stopped.
  if (start <= end) {
    let temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverseArray(data, start + 1, end - 1);
  }
  return data;
};
const data = [3, 12, 32, 25, 97, 34, 30000];
console.log(reverseArray(data, 0, data.length - 1));
