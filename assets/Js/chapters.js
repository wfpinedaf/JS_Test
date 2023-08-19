// 1. Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.

// var n = parseInt(prompt("Ingrese un número:"));
// var suma = 0;

// for (var i = 1; i <= n; i++) {
//   suma += i;
// }

// console.log("La suma de los números del 1 a", n, "es:", suma);

// 2. Se necesita validar si un número ingresado por el usuario es par o impar.
//   var numberInput = document.getElementById("");
//   var resultado = document.getElementById("");
//   var numero = parseInt(numberInput.value);

// let numero = parseInt(prompt("Ingrese un número:"));
// if (isNaN(numero)) {
//   console.log("Por favor, ingrese un número válido");
// } else {
//   if (numero % 2 === 0) {
//     console.log(`El número  ${numero} es par.`);
//   } else {
//     console.log(`El número ${numero} es impar`);
//   }
// }

// 3. La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
//  a) Si es un niño menor a 10 años, debe ir a reclamar un jugo.
//  b) Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza.
//  c) Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
//  d) O si es un hombre debe reclamar adicionalmente una porción de pizza tres carnes.
//  e) Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.

// let edad = prompt("Ingrese su edad:");
// let genero = prompt("Ingrese su genero, masculino, femenino, Indefinido:");
// if (edad < 10 || edad > 18 || genero == "masculino" || genero == "femenino") {
//   if (edad < 10 && genero == "masculino") {
//     console.log("Debes reclamar un jugo y una procion de pizza tres carnes.");
//   } else if (edad > 18 && genero == "masculino") {
//     console.log(
//       "Debes reclamar una cerveza y una procion de pizza tres carnes."
//     );
//   } else if (edad < 10 && genero == "femenino") {
//     console.log("Debes reclamar un jugo y una procion de pizza Hawaiana.");
//   } else if (edad > 18 && genero == "femenino") {
//     console.log("Debes reclamar una cerveza y una procion de pizza Hawaiana.");
//   }
// } else {
//   console.log(
//     "No cumple ninguna de las condiciones, lastimosamente no recibiras ningun premio"
//   );
// }

// 4. Se necesita crear un menú de opciones, donde la persona escriba que quiere de comer, se le vaya sumando el valor a lo seleccionado hasta que el usuario escriba pagar, Una vez termine de comprar, se le debe mostrar el valor que debe pagar. (El menú y precios lo decide el  programado@r.)

// let menu = [
//   {
//     Item: "hamburguesa",
//     Valor: "20000",
//   },
//   {
//     Item: "pizza",
//     Valor: "10000",
//   },
//   {
//     Item: "salchipapa",
//     Valor: "15000",
//   },
//   {
//     Item: "pollo",
//     Valor: "10000",
//   },
//   {
//     Item: "helado",
//     Valor: "12000",
//   },
//   {
//     Item: "jugo",
//     Valor: "9000",
//   },
// ];

// let orden = prompt("Ingrese que desea añadir del menu");

// let MenuUsuario = [];
// let total = 0;

// while (true) {
//   let orden = prompt(
//     "Ingrese qué desea añadir al menú (o escriba 'pagar' para finalizar):"
//   );

//   if (orden.toLowerCase() === "pagar") {
//     break;
//   }

//   let itemSeleccionado = menu.find((e) => e.Item === orden.toLowerCase());

//   if (itemSeleccionado) {
//     MenuUsuario.push(itemSeleccionado.Item);
//     total += itemSeleccionado.Valor;
//     console.log(`"${itemSeleccionado.Item}" añadido al carrito.`);
//   } else {
//     console.log("El artículo no está en el menú.");
//   }
// }

// console.log("Carrito de compras:");
// MenuUsuario.forEach((e) => console.log(e));
// console.log(`Total a pagar: ${total}`);

// 5. Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, adicionalmente, se debe mostrar el total de las multiplicaciones.

// let NumeroTMulipicar = prompt(
//   "Ingrese el numero de la tabla de desea mostrar:"
// );

// for (let index = 0; index <= 10; index++) {
//   let multiplicador = NumeroTMulipicar * index;
//   console.log(`${NumeroTMulipicar} * ${index} = ${multiplicador} `);
// }
// 6. Validar cual es el valor de matrícula (1’000.000) que debe pagar un estudiante, teniendo en cuenta que:
//  a) Si el promedio fue menor a 3 no se le descuenta nada.
//  b) Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
//  c) Cuando el promedio sea mayor que 4, se le descuenta 50%

// let Promedio = prompt("Ingrese el promedio ponderado");
// let NPromedio = parseFloat(Promedio);
// console.log(NPromedio);
// let matricula = 1000000;
// if (NPromedio > 4) {
//   let descuento = matricula * 0.5;
//   console.log(
//     `Recibiras el 50% de descuento por lo que debes pagar $${descuento}`
//   );
// } else if (NPromedio > 3) {
//   let descuento = matricula * 0.95;
//   console.log(
//     `Recibiras el 5% de descuento por lo que debes pagar $${descuento}`
//   );
// } else {
//   console.log("No recibiras ningun descuento");
// }
