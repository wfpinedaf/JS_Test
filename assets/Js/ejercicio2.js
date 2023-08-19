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

let Input = document.querySelector("#InputEjercicio2");
let button = document.querySelector("#SubmitEjercicio2");
let ResultadoI = document.querySelector("#Inputresultado");

button.addEventListener("click", function (but) {
  but.preventDefault();
  let numero = Input.value;

  if (isNaN(numero)) {
    ResultadoI.value = "Por favor, ingrese un número válido";
  } else {
    if (numero % 2 === 0) {
      ResultadoI.value = `El número  ${numero} es par.`;
    } else {
      ResultadoI.value = `El número ${numero} es impar`;
    }
  }
});
