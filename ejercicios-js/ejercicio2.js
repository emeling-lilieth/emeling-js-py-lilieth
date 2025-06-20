function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return '✅';
    } else {
        return '❌';
    }
}

// Generar un número aleatorio entre 1 y 100
let number = Math.floor(Math.random() * 100) + 1;

let result = checkEvenOdd(number);
console.log('El número ${number} es ${result}.');