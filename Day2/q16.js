const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter((x) => arr2.includes(x));
console.log(result);