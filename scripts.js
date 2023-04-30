// Esperamos a que se cargue el documento
document.addEventListener('DOMContentLoaded', function() {
  // Obtenemos la manzana y el formulario
  const apple = document.querySelector('.apple');
  const wormForm = document.querySelector('#worm-form');
  const clearButton = document.querySelector('#clear-button');

  // Escuchamos el evento submit del formulario
  wormForm.addEventListener('submit', function(event) {
    // Prevenimos el comportamiento por defecto del formulario
    event.preventDefault();

    // Obtenemos el número de gusanos a agregar
    const wormNumber = document.querySelector('#worm-number').value;

    // Creamos los gusanos y los agregamos a la manzana
    for (let i = 0; i < wormNumber; i++) {
      const worm = document.createElement('div');
      worm.classList.add('worm');
      worm.style.top = `${Math.random() * 100}%`;
      worm.style.left = `${Math.random() * 100}%`;
      worm.dataset.text = 'Texto de gusano';
      apple.appendChild(worm);
    }
  });

  // Escuchamos el evento click en la manzana
  apple.addEventListener('click', function(event) {
    // Obtenemos el elemento de gusano clickeado
    const worm = event.target.closest('.worm');

    // Si se clickeó en un gusano
    if (worm) {
      // Obtenemos el texto correspondiente a ese gusano
      const wormText = worm.dataset.text;

      // Creamos un elemento input para editar el texto del gusano
      const wormInput = document.createElement('input');
      wormInput.type = 'text';
      wormInput.value = wormText;
      wormInput.addEventListener('blur', function() {
        // Cuando el input pierde el foco, actualizamos el texto del gusano
        worm.dataset.text = wormInput.value;
        worm.removeChild(wormInput);
        worm.textContent = ' ';
      });
      worm.appendChild(wormInput);

      // Enfocamos el input
      wormInput.focus();
    }
  });

  // Escuchamos el evento click del botón de limpiar
  clearButton.addEventListener('click', function() {
    // Obtenemos todos los gusanos de la manzana
    const worms = document.querySelectorAll('.worm');

    // Removemos todos los gusanos
    worms.forEach(function(worm) {
      worm.parentNode.removeChild(worm);
    });
  });
});
