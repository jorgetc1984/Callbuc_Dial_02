document.addEventListener('DOMContentLoaded', function() {
  const salvacionRadio = document.getElementById('salvacion');
  const salvacionOpciones = document.getElementById('salvacion-opciones');
  salvacionRadio.addEventListener('click', function() {
    resetearOpciones();
    salvacionOpciones.style.display = 'block';
  });

  const venidaRadio = document.getElementById('2da_venida');
  const venidaOpciones = document.getElementById('venida-opciones');
  venidaRadio.addEventListener('click', function() {
    resetearOpciones();
    venidaOpciones.style.display = 'block';
  });

  const eleccionRadio = document.getElementById('eleccion');
  const eleccionOpciones = document.getElementById('eleccion-opciones');
  eleccionRadio.addEventListener('click', function() {
    resetearOpciones();
    eleccionOpciones.style.display = 'block';
  });

  const solaEscrituraRadio = document.getElementById('sola_escritura');
  const solaEscrituraOpciones = document.getElementById('sola-escritura-opciones');
  solaEscrituraRadio.addEventListener('click', function() {
    resetearOpciones();
    solaEscrituraOpciones.style.display = 'block';
  });

  const jesusRadio = document.getElementById('jesus');
  const jesusOpciones = document.getElementById('jesus-opciones');
  jesusRadio.addEventListener('click', function() {
    resetearOpciones();
    jesusOpciones.style.display = 'block';
  });

  const trinidadRadio = document.getElementById('trinidad');
  const trinidadOpciones = document.getElementById('trinidad-opciones');
  trinidadRadio.addEventListener('click', function() {
    resetearOpciones();
    trinidadOpciones.style.display = 'block';
  });

  const botonDoctrina = document.getElementById('boton-doctrina');
  botonDoctrina.addEventListener('click', function() {
    const doctrinaSeleccionada = document.querySelector('input[name="doctrina"]:checked');
    if (doctrinaSeleccionada) {
      const seleccion = doctrinaSeleccionada.parentElement.querySelector('input[name="' + doctrinaSeleccionada.getAttribute('name') + '-opcion"]:checked');
      if (seleccion) {
        const tuDoctrina = doctrinaSeleccionada.parentElement.querySelector('label').textContent;
        const doctrinaOponente = seleccion.parentElement.querySelector('label').textContent;
        document.getElementById('tu-doctrina').textContent = tuDoctrina;
        document.getElementById('doctrina-oponente').textContent = doctrinaOponente;
        mostrarMensaje('¡Doctrina seleccionada!', 'success');
      } else {
        mostrarMensaje('Por favor, selecciona una opción para la doctrina.', 'error');
      }
    } else {
      mostrarMensaje('Por favor, selecciona una doctrina.', 'error');
    }
  });

  const botonDoctrinaTarea = document.getElementById('boton-doctrina-tarea');
  botonDoctrinaTarea.addEventListener('click', function() {
    mostrarMensaje('Realizando tarea de doctrina...', 'info');
    // Lógica para realizar la tarea de doctrina
  });

  const botonInterpretacionTarea = document.getElementById('boton-interpretacion-tarea');
  botonInterpretacionTarea.addEventListener('click', function() {
    mostrarMensaje('Realizando tarea de interpretación...', 'info');
    // Lógica para realizar la tarea de interpretación
  });

  const botonVideosTarea = document.getElementById('boton-videos-tarea

  document.addEventListener('DOMContentLoaded', function() {
    const salvacionRadio = document.getElementById('salvacion');
    const salvacionOpciones = document.getElementById('salvacion-opciones');
    salvacionRadio.addEventListener('click', function() {
        salvacionOpciones.style.display = 'block';
    });

    const venidaRadio = document.getElementById('2da_venida');
    const venidaOpciones = document.getElementById('venida-opciones');
    venidaRadio.addEventListener('click', function() {
        venidaOpciones.style.display = 'block';
    });

    const eleccionRadio = document.getElementById('eleccion

window.addEventListener("load", iniciarJuego);