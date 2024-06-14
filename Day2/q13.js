const arr = [1, 2, 3, 4, 5];
const result = arr.map((s) => s * 2).reduce((sum, s) => sum + s, 0);
console.log(result);