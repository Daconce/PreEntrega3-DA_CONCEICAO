var empanadas = [
  "Carne picante (cortada a cuchillo)",
  "Carne suave (cortada a cuchillo)",
  "Carne dulce (con pasas)",
  "Carne molida suave (con aceitunas)",
  "Pollo picante",
  "Pollo suave",
  "Jamón y mozzarella",
  "Cebolla y mozzarella",
  "Cantimpalo y mozzarella",
  "Roquefort",
  "Roquefort y jamón",
  "Mozzarella, tomate y albahaca",
  "Verdura y salsa blanca",
  "Humita",
  "Humita y mozzarella",
  "Atún",
];

var lista_empanadas = document.getElementById("listaEmpanadas");

empanadas.map(function (empanada) {
  var item = document.createElement("li");
  var cantidad = document.createElement("input");
  cantidad.style.cssText = "width:40px";
  var boton = document.createElement("button");
  var clearButton = document.createElement("button");
  boton.style.cssText = "background-color: rgb(255, 165, 0);padding:2px";
  clearButton.style.cssText = "padding:0.5px";
  boton.innerHTML = "Añadir";
  clearButton.innerHTML = "Borrar";
  cantidad.type = "number";
  cantidad.value = 0;
  item.innerHTML = empanada;
  item.appendChild(cantidad);
  item.appendChild(boton);
  item.appendChild(clearButton);
  lista_empanadas.appendChild(item);
  boton.addEventListener("click", function () {
    var carrito = {
      item: empanada,
      cantidad: cantidad.value,
    };
    // agregar carrito al carrito de compras
    var cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push(carrito);
    localStorage.setItem("cart", JSON.stringify(cartData));
    console.log(cartData);
  });
  clearButton.addEventListener("click", function () {
    localStorage.removeItem("cart");
  });
});

function showCartData() {
  var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartData);
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var headRow = document.createElement("tr");
  var itemHead = document.createElement("th");
  var cantidadHead = document.createElement("th");
  itemHead.innerHTML = "Item";
  cantidadHead.innerHTML = "Cantidad";
  headRow.appendChild(itemHead);
  headRow.appendChild(cantidadHead);
  thead.appendChild(headRow);
  table.appendChild(thead);

  cartData.forEach(function (item) {
    var row = document.createElement("tr");
    var itemData = document.createElement("td");
    var cantidadData = document.createElement("td");
    itemData.innerHTML = item.item;
    cantidadData.innerHTML = item.cantidad;
    row.appendChild(itemData);
    row.appendChild(cantidadData);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
}

window.onload = function () {
  showCartData();
};
