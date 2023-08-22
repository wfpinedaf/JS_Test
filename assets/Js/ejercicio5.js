// 5. Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, adicionalmente, se debe mostrar el total de las multiplicaciones.
// let NumeroTMulipicar = prompt(
//   "Ingrese el numero de la tabla de desea mostrar:"
// );
// for (let index = 0; index <= 10; index++) {
//   let multiplicador = NumeroTMulipicar * index;
//   console.log(`${NumeroTMulipicar} * ${index} = ${multiplicador} `);
// }

let submitButton = document.querySelector("#SubmitEjercicio5");
let numeroInput = document.querySelector("#InputEjercicio5");
let resultadoContainer = document.querySelector("#Inputresultado");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let numeroTMultiplicar = parseInt(numeroInput.value);
  let tablaMultiplicar = "";
  for (let index = 0; index <= numeroTMultiplicar; index++) {
    let multiplicador = numeroTMultiplicar * index;
    tablaMultiplicar += `${numeroTMultiplicar} * ${index} = ${multiplicador}  
    `;
  }
  resultadoContainer.value = tablaMultiplicar;
});
