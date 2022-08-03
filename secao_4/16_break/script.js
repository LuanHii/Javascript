let nome = "Luan";
for (let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
        nome = "Vitor";
    }

    if (i == 5 && nome == "Vitor") {
        console.log("O nome é Victor");
        break;
    }

    console.log(i);
}