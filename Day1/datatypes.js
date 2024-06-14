// const string = "Aditya";
// console.log(string.slice(1,4));
// console.log(string);

// const number = 150;
// console.log(number);

const arr = [1, 5, 6, 10];
// arr.push(18);
// console.log(arr.unshift(arr[0]));
// // log
// console.log(arr);
// console.log(arr[2]);


// for(let ele of arr) {
//     console.log(ele);
// }

const obj = {
    name: "aditya",
    2: "hari",
    3: "tarun"
}

for(let ele in obj) {
    console.log(ele+"-----"+obj[ele])
}

const arr2 = ["apple", "banana", "orange"];

arr2.map((ele,_) => {
    console.log(ele+"s");
});