const arr = [10, 20, 30, 40, 50];
const result = arr.reduce((sum, x) => sum + x, 0) / arr.length;
console.log(result);