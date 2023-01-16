const empanadas = [
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

let carrito = {};
let precioEmpanada = 450;

const mostrarLista = () => {
  let lista = document.getElementById("listaEmpanadas");
  lista.innerHTML = "";
  empanadas.forEach((empanada) => {
    let item = document.createElement("li");
    item.innerHTML = `${empanada} - Cantidad: ${carrito[empanada] || 0}`;
    let botonAgregar = document.createElement("button");
    botonAgregar.style.cssText = "margin-left: 10px;background-color:green";
    botonAgregar.innerHTML = "Añadir";
    botonAgregar.onclick = () => {
      if (!carrito[empanada]) {
        carrito[empanada] = 1;
      } else {
        carrito[empanada]++;
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      console.log("Carrito actualizado:", carrito);
      mostrarLista();
    };
    let botonQuitar = document.createElement("button");
    botonQuitar.style.cssText = "background-color:red";
    botonQuitar.innerHTML = "Quitar";
    botonQuitar.onclick = () => {
      if (carrito[empanada]) {
        carrito[empanada]--;
        if (carrito[empanada] === 0) {
          delete carrito[empanada];
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log("Carrito actualizado:", carrito);
        mostrarLista();
      }
    };
    item.appendChild(botonAgregar);
    item.appendChild(botonQuitar);
    lista.appendChild(item);
  });

  let carritoListado = document.getElementById("carrito-listado");
  carritoListado.innerHTML = "";
  let total = 0;
  for (let empanada in carrito) {
    let item = document.createElement("li");
    let precio = carrito[empanada] * precioEmpanada;
    total += precio;
    item.innerHTML = `${empanada} - Cantidad: ${carrito[empanada]} - Precio: $${precio}`;
    carritoListado.appendChild(item);
  }
  document.getElementById("total").innerHTML = `Total: $${total}`;
};

const cargarCarrito = () => {
  let carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  console.log("Carrito cargado:", carrito);
};

cargarCarrito();
mostrarLista();
