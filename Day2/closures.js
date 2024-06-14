function baharWala(baharWalaVariable) {
    return function andarWala(andarWalaVariable) {
        console.log("Baharwala variable: " + baharWalaVariable);
        console.log("Andarwala variable: " + andarWalaVariable);
    }
}

const newFunction = baharWala("outside");
newFunction("inside");