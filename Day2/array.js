let arr = [1, 2, 3, 4, 5, 6];
console.log("Array 1: " + arr);
console.log("Length of array 1: " + arr.length);

const newarr = [6, 8, 1, 4, 5];
const sorted = newarr.sort();
console.log("New Array: " + newarr);
console.log("Sorted New Array: " + sorted);

const arr2 = [55, 10, 30, 45, 60];
const filtered = arr2.filter((ele) => ele % 10 == 0);
console.log(filtered);

const arr3 = [1];
console.log(arr3.fill(8));
console.log(arr.fill(8));

console.log(newarr.fill(10).join('\n'));
console.log(newarr.fill(10).join('\t'));

console.log(arr.reduce((function (total, number) {
    return total + number;
})));

const newarr4 = ["Aditya", "Hari", "Tarun"];
console.log(newarr4.toString().toLowerCase().toUpperCase());

console.log(arr.splice(0, 3));

// Array(10).fill(true).map((ele, index) => (
//     return (
//         <div></div>
//     )
// ))
