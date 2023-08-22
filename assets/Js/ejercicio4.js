let menu = [
  { Item: "hamburguesa", Valor: 20000 },
  { Item: "pizza", Valor: 10000 },
  { Item: "salchipapa", Valor: 15000 },
  { Item: "pollo", Valor: 10000 },
  { Item: "helado", Valor: 12000 },
  { Item: "jugo", Valor: 9000 },
];

let menuContainer = document.querySelector("#menuContainer");
let resultado = document.querySelector("#Inputresultado");
let BtnSubmit = document.querySelector("#SubmitEjercicio4");
let orden = document.querySelector("#InputItem");

menu.forEach((item) => {
  let menuItem = document.createElement("div");
  menuItem.textContent = `${item.Item}: ${item.Valor}`;
  menuContainer.appendChild(menuItem);
});

let itemsSeleccionados = [];

BtnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let ordenV = orden.value.toLowerCase().trim();

  // Como funciona Reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  //   const array1 = [1, 2, 3, 4];

  //   // 0 + 1 + 2 + 3 + 4
  //   const initialValue = 0;
  //   const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

  //   console.log(sumWithInitial);
  //   // Expected output: 10

  if (ordenV === "pagar") {
    let total = itemsSeleccionados.reduce((sum, item) => sum + item.Valor, 0);
    resultado.value = `Total a pagar: ${total}`;
    orden.value = "";
    return;
  }

  let itemSeleccionado = menu.find((e) => e.Item.toLowerCase() === ordenV);

  if (itemSeleccionado) {
    itemsSeleccionados.push(itemSeleccionado);
    resultado.value = "Sigue añadiendo items";
    orden.value = "";
  } else {
    alert("¡Item no encontrado en el menú!");
  }
});
