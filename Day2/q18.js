const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
const result = arr1.map((val, index) => [val, arr2[index]]);
console.log(result);