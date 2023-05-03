// Sometimes interviewer ask insert an element in an Array in a particular position without using inbuilt method of JS, what should be your approach ?

// Approach:-----> At a paricular position you have to insert your element in an Array so you can shift one position ahead to all the rest elements from that particular position. The value in that particular position will be repeated two times(one its own original pos value and another one that you shifted ).
// So now what you can do is assign new Element in that particular position. It will give you desired output.

const insertingElInArr = () => {
  const arr = [3, 45, 89, 70, 31, 78];
  const newEl = 1199;
  const pos = 3;
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] == pos) {
      arr[i] == arr[i + 1];
    }
    arr[pos] = newEl;
    return arr;
  }
};
console.log(insertingElInArr());
