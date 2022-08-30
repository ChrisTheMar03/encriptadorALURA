let entrada = document.getElementById("texto-entrada");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesin = document.getElementById("btnDesencriptar");
let resultado = document.getElementById("resultado");
let btnCopiar = document.getElementById("btnCopiar");
let mensaje = document.getElementById("mensaje");
let noMensaje = document.getElementById("nomensaje");

let vocales = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

window.onload = () => {
  resultado.style.display = "none";
  btnCopiar.style.display = "none";
};

btnEncriptar.onclick = function (e) {
  let valorentrada = entrada.value;
  let mensaje = encriptarPalabra(valorentrada);
  resultado.innerHTML = mensaje;
  noMensaje.style.display = "none";
  resultado.style.display = "block";
  btnCopiar.style.display = "block";
};

btnCopiar.addEventListener("click", (e) => {
  copiarTexto();
});

btnDesin.addEventListener("click", (e) => {
  let valorentrada = entrada.value;
  let mensajeDesincriptado = desencriptarPalabra(valorentrada);
  resultado.innerHTML = mensajeDesincriptado;
});

function encriptarPalabra(cadena) {
  let frase = "";
  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase();
    if (letra == "a") {
      letra = vocales.a;
    }
    if (letra == "e") {
      letra = vocales.e;
    }
    if (letra == "i") {
      letra = vocales.i;
    }
    if (letra == "o") {
      letra = vocales.o;
    }
    if (letra == "u") {
      letra = vocales.u;
    }
    frase += letra;
  }
  return frase;
}

function desencriptarPalabra(cadena) {
  let frase = "";
  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase();
    frase += letra;
    if (frase.includes(vocales.a)) {
      frase = frase.replace(vocales.a, "a");
    }
    if (frase.includes(vocales.e)) {
      frase = frase.replace(vocales.e, "e");
    }
    if (frase.includes(vocales.i)) {
      frase = frase.replace(vocales.i, "i");
    }
    if (frase.includes(vocales.o)) {
      frase = frase.replace(vocales.o, "o");
    }
    if (frase.includes(vocales.u)) {
      frase = frase.replace(vocales.u, "u");
    }
  }
  return frase;
}

function copiarTexto() {
  var input = document.createElement("input");
  input.setAttribute("value", resultado.innerHTML);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  limpiarEntrada();
}

function limpiarEntrada() {
  entrada.value = "";
  entrada.focus();
}
