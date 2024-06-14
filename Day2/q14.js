const arr = [5, 3, 8, 1, 2, 7];
const result = arr.filter((x) => x > 3).sort((a, b) => a - b);
console.log(result);