function createGreeter(greeting) {
    let name = "World";
    function sayHello() {
        return greeting + ", " + name;
    }
    return sayHello;
}
const helloFunc1 = createGreeter("Hello");
const helloFunc2 = createGreeter("Hi");
console.log(helloFunc1());
console.log(helloFunc2());

