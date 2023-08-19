// 1. Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.

// var n = parseInt(prompt("Ingrese un número:"));
// var suma = 0;
// for (var i = 1; i <= n; i++) {
//   suma += i;
// }
// console.log("La suma de los números del 1 a", n, "es:", suma);

let n = document.querySelector("#InputEjercicio1");
let submitbtn = document.querySelector("#SubmitEjercicio1");
let respuesta = document.querySelector("#Inputresultado");
let sum = 0;

submitbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let nValue = n.value;
  for (var i = 1; i <= nValue; i++) {
    sum += i;
  }
  respuesta.value = `La suma de los números del 1 a ${nValue} es: ${sum} `;
});
