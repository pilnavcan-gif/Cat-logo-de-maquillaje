const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //No se recargue la pagina

  alert("Gracias por contactar con nosotros");



form.reset();
});

