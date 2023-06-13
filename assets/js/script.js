//-------------parte 1
const imagen = document.querySelector("#imagen-click");

imagen.addEventListener("click", () => {
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "none";
  } else {
    imagen.style.border = "2px solid red";
  }
});
//-------------parte 2
const pedidoBoton = document.querySelector("#pedidoBoton");

pedidoBoton.addEventListener("click", () => {
  const sticker1 = parseInt(document.querySelector("#sticker1").value);
  const sticker2 = parseInt(document.querySelector("#sticker2").value);
  const sticker3 = parseInt(document.querySelector("#sticker3").value);

  let total = sticker1 + sticker2 + sticker3;

  if (total <= 10) {
    document.querySelector("#resultado").innerHTML = "Llevas " + total + " stickers";
  } else {
    document.querySelector("#resultado").textContent = "Llevas demasiados stickers";
  }
});
//-------------parte 3
const ingresar_boton = document.querySelector("#ingresar_boton");

ingresar_boton.addEventListener("click", () => {
  let digito1 = document.getElementById("digito1").value;
  let digito2 = document.getElementById("digito2").value;
  let digito3 = document.getElementById("digito3").value;
  let password = digito1 + digito2 + digito3;

  let resultado = document.getElementById("resultado");

  if (password === "911") {
    resultado.innerHTML = "Password 1 correcto";
    return;
  }

  if (password === "714") {
    resultado.innerHTML = "Password 2 correcto";
    return;
  }

  resultado.innerHTML = "Password incorrecto";
});

