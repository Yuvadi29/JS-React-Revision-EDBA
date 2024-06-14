// if-else 

let a = 67;

if(a > 18) {
    console.log("Adult");
} else if(a < 18) {
    console.log("Not Adult");
} else if(a > 55) {
    console.log("old")
}

(a > 18)? console.log("Adult"):(a < 18)? console.log("Not Adult") : (a > 55)? console.log("Not Adult") : console.log("None of the Above");



switch(val) {
    case 1: console.log("1");
    break;
    case 2: console.log("2");
    break;
    default: console.log("none")
}