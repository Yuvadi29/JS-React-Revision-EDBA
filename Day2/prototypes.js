function Person(myName, age) {
    this.myName = myName;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`My name is ${this.myName} and I am ${this.age} years old`);
};

const aditya = new Person("Aditya", 23);
const hari = new Person("Hari", 53);

aditya.sayHello();
hari.sayHello();