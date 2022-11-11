let total = 1;
let number = 10;
let i = 1; 

while (true) {
    if (i === (number + 1)){
        break;
    }
    total = total * i;
    i++;
}

console.log(total);