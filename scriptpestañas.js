const info = {
  general: `<h2>General</h2><p>Esta es la información general del proyecto.</p>`,
  logistica: `<h2>Logística</h2><p>Esta es la información relacionada con la logística.</p>`,
  multimedia: `<h2>Multimedia</h2><p>Esta es la información sobre multimedia y recursos digitales.</p>`,
  calidad: `<h2>Calidad</h2><p>Esta es la información referente a la calidad.</p>`
};

const buttons = document.querySelectorAll('.menu button');
const contentDiv = document.getElementById('content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Cambiar contenido
    const section = button.getAttribute('data-section');
    contentDiv.innerHTML = info[section];

    // Cambiar botón activo
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
const contenedor = document.getElementById('contenedor');

// Cargamos el HTML secundario usando fetch
fetch('pagina-secundaria.html')
  .then(response => response.text())  // Convertimos la respuesta a texto
  .then(data => {
    contenedor.innerHTML = data;  // Pegamos el HTML dentro del div
  })
  .catch(error => console.error('Error cargando HTML:', error));