// 1 - var let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log (x)
}

console.log(x) // variavel x foi manchada pelo escopo local

let a = 10
let b = 15

if (b > 10) {
    let a = 5;
    console.log(a)
}

console.log(a) // let nao mancha o escopo global


// 2 - Arrow function

const sum = function sum(a,b) {
    return a + b
}

const arrowSum = (a,b) =>  a + b


console.log(sum(5,5));
console.log(arrowSum(5,5));

const greeting = (name) => {
    if (name) {
        return "Olá " + name
    } else {
        return "Olá."
    }
}

console.log(greeting("Luan"));
console.log(greeting());

const testeArrow = () => console.log("testado");

const user = {
    name: "Luan",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log("Username:" + this.name);
        },500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(thisconsole.log("Username: " + this.name))
        },500)
    },
}


user.sayUserName();
user.sayUserNameArrow();

// 3 - Filter
const arr = [1,2,3,4,5]

const highNumbers = arr.filter((n) => {
    if (n >=3) {
        return n
    }
})

console.log(highNumbers)