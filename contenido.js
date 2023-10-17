
//Estructuras de control:

//1: Escribir un programa que determine si un número es par o impar y mostrar el resultado en la consola.

let numero = 6;

if (numero % 2 === 0){
    console.log("El numero es par.")
}
else{
    console.log("El numero es impar")
}
console.log("\n\n")

//2: Crear un programa que determine si un número es positivo, negativo o cero.

if (numero == 0){
    console.log("El numero es igual a 0")
}

else if(numero > 0){
    console.log("El numero es positivo.", "("+ numero + ")")
}

else{
    console.log("El numero es negativo.", "("+ numero + ")")
}
console.log("\n\n")

//3:Solicitar al usuario un número y mostrar todos los números pares desde 1 hasta ese número.

// let numero1 = parseInt(prompt("Ingresa un número:"));


// if (!isNaN(numero1)) {
    
    //   for (let i = 2; i <= numero1; i += 2) {
//     console.log(i);
//   }
// } else {
    //   console.log("El valor ingresado no es un número válido.");
    // }
    

    //Ejecicios sobre funciones:

// 1. Crear una función que reciba dos números como parámetros y retorne su suma.

let numero2 = 5

function suma (x,y){
    return x + y
}

console.log(numero, "+", numero2 , "=", suma(numero,numero2) )
console.log("\n\n")

// 2. Escribe una función que tome un arreglo como parámetro y devuelva la suma de todos sus elementos.

function sumaArreglo(arreglo) {
    let suma = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    
    return suma;
}


let miArreglo = [1, 22, 15, 6, 5];
let resultado = sumaArreglo(miArreglo);
console.log("La suma de los elementos del arreglo es: " + resultado);
console.log("\n\n")

//3. Crear una función que determine si una cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

function esPalindromo(cadena) {
    cadena = cadena.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    
    let cadenaRevertida = cadena.split("").reverse().join("");
    return cadena === cadenaRevertida;
}

let cadena1 = "Que va";
let cadena2 = "A man, a plan, a canal, Panama";

console.log("¿'Que va' es un palíndromo? " + esPalindromo(cadena1));
console.log("¿'A man, a plan, a canal, Panama' es un palíndromo? " + esPalindromo(cadena2));

  console.log("\n\n")

//Ejercicios sobre array y objetos:

// 1. Definir un objeto que represente a una persona con propiedades como nombre, edad y dirección. Luego, mostrar la información en la consola.

let persona = {
    nombre: "Juan Pérez",
    edad: 30,
    direccion: "Cali, Ciudad"
};

console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Dirección: " + persona.direccion);
console.log("\n\n")

//2. Crear un arreglo de objetos que representen productos con propiedades como nombre, precio y cantidad en stock. Luego, listar los productos con su información.
let productos = [
    {
      nombre: "Locion",
      precio: 50000,
      stock: 20
    },
    {
        nombre: "Aceite",
        precio: 24000,
        stock: 15
    },
    {
        nombre: "Arroz",
        precio: 2500,
        stock: 30
    },
    {
        nombre: "Cafe",
        precio: 5000,
        stock: 10
    }
];

console.log("----------");
console.log("Listado de Productos:");
productos.forEach(function(producto) {
    console.log("Nombre: " + producto.nombre);
    console.log("Precio: $" + producto.precio);
    console.log("Cantidad en Stock: " + producto.stock);
    console.log("----------");
});
console.log("\n\n")

//3. Escribir una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con los números ordenados de forma ascendente.


let arreglo1 = [1, 2, 3, 6, 7, 8]
let arreglo2 = [5, 9 , 10 , 1 ,2]

let arregloUnido = arreglo1.concat(arreglo2);

arregloUnido.sort(function(a, b) {
    return a - b;
});
console.log("Arreglo unido y ordenado de manera ascendente: " + arregloUnido);