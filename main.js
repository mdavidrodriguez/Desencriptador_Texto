const textoMensaje = document.querySelector("#texto-encriptar");
const btnEncriptar = document.querySelector(".boton-encriptar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
const textoDesencriptado = document.querySelector("#texto-desencriptado");
const cajaAlternativa = document.querySelector(".texto-alternativo");
const botonCopiar = document.querySelector(".boton-copiar")

function quitarCaja() {
  cajaAlternativa.style.display = "none";
}
function agregarBotonCopiar(){
    botonCopiar.style.display = "block"
}


document.addEventListener("DOMContentLoaded", () => {
  btnEncriptar.addEventListener("click", () => {
    const caracteres = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    const mayusculas = /[A-Z]/;
    const acentos = /[áéíóúÁÉÍÓÚ]/;

    const verificar = textoMensaje.value;
    if (verificar == "") {
      alert("Disculpa, el recuadro no debe estar vacío.");
    } else if (caracteres.test(verificar) || mayusculas.test(verificar) || acentos.test(verificar)) {
      alert(
        "El texto no puede contener Mayusculas ni acentos por favor ni caracteres especiales."
      );
    } else {
      verificar.textContent = "";
      const texto = textoDesencriptado;
      var textoCifrado = verificar
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
      texto.textContent = textoCifrado;
      quitarCaja();
      agregarBotonCopiar()
    }
  });

  btnDesencriptar.addEventListener("click", () => {
    const verificar = textoMensaje.value;
    var textoCifrado = verificar
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    const texto = textoDesencriptado;
    texto.textContent = textoCifrado;
    quitarCaja();
  });

  botonCopiar.addEventListener("click", () => {
    const textoEncriptado = textoDesencriptado
    textoEncriptado.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Has copiado el texto")

  })

});
