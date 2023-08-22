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

let Promedio = document.querySelector("#InputEjercicio6");
let Matricula = 1000000;
let BtnProm = document.querySelector("#SubmitEjercicio6");
let resultado = document.querySelector("#Inputresultado");

BtnProm.addEventListener("click", function (e) {
  e.preventDefault();
  let promx = parseInt(Promedio.value);
  if (promx > 4) {
    let descuento = Matricula * 0.5;
    resultado.value = `Recibiras el 50% de descuento por lo que debes pagar $${descuento}`;
  } else if (promx >= 3) {
    let descuento = Matricula * 0.95;
    resultado.value = `Recibiras el 5% de descuento por lo que debes pagar $${descuento}`;
  } else {
    resultado.value = `No recibiras ningun descuento`;
  }
  Promedio.value = "";
});
