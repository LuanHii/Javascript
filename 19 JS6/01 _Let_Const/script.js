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


