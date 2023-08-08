let num = 23;
let divis = 0;

for(let i = 1; i <= num; i++) {
    if (num % i == 0) {
        divis++;
    }
}

if(divis == 2){
   console.log(`${num} é primo`); 
} else {
    console.log(`${num} não é primo`);
}