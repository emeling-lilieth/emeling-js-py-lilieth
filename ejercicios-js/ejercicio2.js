console.log ("ejercicio 2: verificador de par/impar")
// Generar un número aleatorio entre 1 y 100
const numero = Math.floor(Math.random() * 100) + 1;

// Verificar si es par o impar
const resultado = (numero % 2 === 0) ? "par" : "impar";

// Mostrar el resultado
('El número generado es ${numero} y es ${resultado}.') ;