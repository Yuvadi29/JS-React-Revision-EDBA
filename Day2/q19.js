function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log(count);
        },
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1.increment();
counter1.increment();
counter2.increment();
counter1.reset();
counter2.increment();
