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


//user.sayUserName();
//user.sayUserNameArrow();

// 3 - Filter
const arr = [1,2,3,4,5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >=3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Luan", avaliable:true},
    {name: "Pedro", avaliable:false},
    {name: "Matheus", avaliable:false},
    {name: "José", avaliable:true}
]

const avaliableUsers =  users.filter((user) => user.avaliable)
const notAvaliableUsers =  users.filter((user) => !user.avaliable)

console.log(avaliableUsers)

// 4 Map
const products = [
    {name: "camisa", price: 10.99, category: "roupas"},
    {name: "Chaleira", price: 20.99, category: "eletro"},
    {name: "ps5", price: 499.99, category: "eletro"},
    {name: "jeans", price: 50.99, category: "roupas"},
]

products.map((product) => {
    if (product.category === "roupas") {
        product.onSale = true
    }
})

console.log(products);

// 5 Template literals

const userName = "Luan"
const age = 21

console.log(`O nome do usuario é ${userName} e ele tem ${age} anos`)


// 6 Destructing

const fruits = ["Maça", "Laranja", "Maça"]

const [f1,f2,f3] = fruits
console.log(f1);
console.log(f3);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periferico",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)

// 7 spread operator

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "w"};

const car = {...carName, ...carBrand, Wheels: 4};


// 8 Classe
class Product {
    constructor(name,price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount)/ 100)
    }
}

const shirt = new Product("Camisa",20)
console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

const tenis = new Product("Tenis",30)
console.log(tenis.productWithDiscount(10))

// 9 herança

class ProductWithAttributes extends Product {
    constructor(name,price,colors){
        super(name,price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapeu", 30, ["Azul","Verde","Amarelo"]);

console.log(hat.name)
console.log(hat.productWithDiscount(30))
console.log(hat.showColors())
