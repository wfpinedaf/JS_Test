// 3. La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
//  a) Si es un niño menor a 10 años, debe ir a reclamar un jugo.
//  b) Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza.
//  c) Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
//  d) O si es un hombre debe reclamar adicionalmente una porción de pizza tres carnes.
//  e) Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.
let edadI = document.querySelector("#InputEdad");
let generoI = document.querySelector("#InputGenero");
let promoBTN = document.querySelector("#SubmitEjercicio3");
let resultado = document.querySelector("#Inputresultado");

promoBTN.addEventListener("click", function (e) {
  e.preventDefault();

  let edad = parseInt(edadI.value);
  let genero = generoI.value;
  let premio = "";

  if (edad < 10) {
    premio += "un jugo";
  } else if (edad >= 18) {
    premio += "una cerveza";
  }

  if (genero === "femenino") {
    premio += " y una porción de pizza Hawaiana";
  } else if (genero === "masculino") {
    premio += " y una porción de pizza tres carnes";
  }

  if (premio !== "") {
    resultado.value = `Debes reclamar ${premio}.`;
  } else {
    resultado.value =
      "No cumples ninguna de las condiciones, lamentablemente no recibirás ningún premio.";
  }
});
