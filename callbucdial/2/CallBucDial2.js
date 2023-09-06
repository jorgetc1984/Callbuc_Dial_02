// Funciones JavaScript para la funcionalidad de los botones

function mostrarCajaTexto(caja) {
  var cajaEmail = document.getElementById("cajaEmail");
  var cajaWhatsapp = document.getElementById("cajaWhatsapp");
  var cajaChatInterno = document.getElementById("cajaChatInterno");

  cajaEmail.style.display = "none";
  cajaWhatsapp.style.display = "none";
  cajaChatInterno.style.display = "none";

  if (caja === "cajaEmail") {
    cajaEmail.style.display = "block";
  } else if (caja === "cajaWhatsapp") {
    cajaWhatsapp.style.display = "block";
  } else if (caja === "cajaChatInterno") {
    cajaChatInterno.style.display = "block";
  }
}

function agregarNumero(numero) {
  var numeroTelefono = document.getElementById("numeroTelefono");
  numeroTelefono.value += numero;
}

function llamar() {
  var numeroTelefono = document.getElementById("numeroTelefono").value;
  // Aquí puedes implementar la lógica para realizar la llamada utilizando el número de teléfono
  console.log("Llamando al número: " + numeroTelefono);
}

function enviarCita() {
  var enviarCitaRadios = document.getElementsByName("enviarCita");
  var textoEmail = document.getElementById("textoEmail").value;
  var textoWhatsapp = document.getElementById("textoWhatsapp").value;
  var textoChatInterno = document.getElementById("textoChatInterno").value;

  var seleccionado = null;
  for (var i = 0; i < enviarCitaRadios.length; i++) {
    if (enviarCitaRadios[i].checked) {
      seleccionado = enviarCitaRadios[i].value;
      break;
    }
  }

  if (seleccionado === "email") {
    console.log("Enviar cita por correo: " + textoEmail);
  } else if (seleccionado === "whatsapp") {
    console.log("Enviar cita por WhatsApp: " + textoWhatsapp);
  } else if (seleccionado === "chatInterno") {
    console.log("Enviar cita por chat interno: " + textoChatInterno);
  }
}

function finalizarSesion() {
  // Aquí puedes implementar la lógica para finalizar la sesión
  console.log("Sesión finalizada");
}

function enviarCita() {
  // Obtener los valores de los campos
  var nombreCliente = document.getElementById("nombreCliente").value;
  var telefonoCliente = document.getElementById("telefonoCliente").value;
  var declaraTaxesNo = document.getElementById("declaraTaxesNo").checked;

  // Verificar si los campos están vacíos o se seleccionó "NO" en declaraTaxes
  if (nombreCliente === "" || telefonoCliente === "" || declaraTaxesNo) {
    // Mostrar mensaje de cita inválida
    alert("La cita no es válida. Por favor, complete todos los campos y/o seleccione una opción válida en Declara Taxes.");
  } else {
    // Enviar la cita
    console.log("Cita enviada correctamente.");
  }
}

function mostrarOpcionesCalificacion() {
    var opcionesCalificacion = document.getElementById("opcionesCalificacion");
    opcionesCalificacion.style.display = "block";
  }

// Obtener todos los botones de calificación
const opciones = document.querySelectorAll('.opciones-calificacion button');

// Agregar un evento de clic a cada botón
opciones.forEach(opcion => {
  opcion.addEventListener('click', () => {
    // Eliminar la clase 'seleccionado' de todos los botones
    opciones.forEach(btn => btn.classList.remove('seleccionado'));
    // Agregar la clase 'seleccionado' al botón clicado
    opcion.classList.add('seleccionado');
  });
});

// Obtener todos los botones del teclado
const teclas = document.querySelectorAll('#tecladoNumerico button');

// Agregar un evento de clic a cada botón
teclas.forEach(tecla => {
  tecla.addEventListener('click', () => {
    // Eliminar la clase 'seleccionado' de todas las teclas
    teclas.forEach(btn => btn.classList.remove('seleccionado'));
    // Agregar la clase 'seleccionado' a la tecla clicada
    tecla.classList.add('seleccionado');
  });
});

function finalizarSesion() {
  window.location.href = "file:///E:/Programacion2023/callbucdial/2/CallBucDial2.html";
}

function agregarNumero(numero) {
  var numeroTelefono = document.getElementById("numeroTelefono");
  
  if (numero === "borrar") {
    // Eliminar el último dígito del número de teléfono
    numeroTelefono.value = numeroTelefono.value.slice(0, -1);
  } else {
    // Agregar el número seleccionado al número de teléfono
    numeroTelefono.value += numero;
  }
}

function llamar() {
  var numeroTelefono = document.getElementById("numeroTelefono").value;
  // Aquí puedes implementar la lógica para realizar la llamada utilizando el número de teléfono
  console.log("Llamando al número: " + numeroTelefono);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    agregarNumero("borrar");
  }
});

function agregarNumero(numero) {
  var numeroTelefono = document.getElementById("numeroTelefono");
  
  if (numero === "borrar") {
    // Eliminar el último dígito del número de teléfono
    numeroTelefono.value = numeroTelefono.value.slice(0, -1);
  } else {
    // Agregar el número seleccionado al número de teléfono
    numeroTelefono.value += numero;
  }
}

function llamar() {
  var numeroTelefono = document.getElementById("numeroTelefono").value;
  // Aquí puedes implementar la lógica para realizar la llamada utilizando el número de teléfono
  console.log("Llamando al número: " + numeroTelefono);
}

class MarcadorPredictivo {
  constructor() {
    this.numeroActual = '';
  }

  marcar(numero) {
    console.log('Marcando ' + numero + '...');
    // Aquí puedes agregar la lógica para realizar la llamada saliente utilizando una API o biblioteca de telefonía
    // Por ejemplo: 
    // telefoniaAPI.realizarLlamada(numero);
  }

  recibirLlamada(numero) {
    console.log('Llamada entrante de ' + numero);
    // Aquí puedes agregar la lógica para atender la llamada entrante y realizar las acciones necesarias
    // Por ejemplo: 
    // telefoniaAPI.atenderLlamada(numero);
  }

  agregarDigito(digito) {
    this.numeroActual += digito;
    console.log('Número actual: ' + this.numeroActual);
    // Aquí puedes agregar la lógica para mostrar el número actual en la interfaz de usuario
  }

  borrarUltimoDigito() {
    this.numeroActual = this.numeroActual.slice(0, -1);
    console.log('Número actual: ' + this.numeroActual);
    // Aquí puedes agregar la lógica para actualizar la interfaz de usuario
  }
}

// Crear una instancia del marcador predictivo
const marcador = new MarcadorPredictivo();

// Función para mostrar la caja de texto correspondiente
function mostrarCajaTexto(caja) {
  const cajas = document.querySelectorAll('.caja-texto');
  cajas.forEach(cajaTexto => {
    cajaTexto.style.display = 'none';
  });

  const cajaSeleccionada = document.getElementById(caja);
  if (cajaSeleccionada) {
    cajaSeleccionada.style.display = 'block';
  }
}

// Función para agregar un número al marcador
function agregarNumero(numero) {
  marcador.agregarDigito(numero);
}

// Función para realizar una llamada
function llamar() {
  const numeroTelefono = marcador.numeroActual;
  marcador.marcar(numeroTelefono);
}

// Función para recibir una llamada
function recibirLlamada(numero) {
  marcador.recibirLlamada(numero);
}

// Función para enviar una cita
function enviarCita() {
  const enviarCitaRadios = document.getElementsByName('enviarCita');
  let seleccionado = null;
  enviarCitaRadios.forEach(radio => {
    if (radio.checked) {
      seleccionado = radio.value;
    }
  });

  if (seleccionado === 'email') {
    const textoEmail = document.getElementById('textoEmail').value;
    console.log('Enviar cita por correo: ' + textoEmail);
  } else if (seleccionado === 'whatsapp') {
    const textoWhatsapp = document.getElementById('textoWhatsapp').value;
    console.log('Enviar cita por WhatsApp: ' + textoWhatsapp);
  } else if (seleccionado === 'chatInterno') {
    const textoChatInterno = document.getElementById('textoChatInterno').value;
    console.log('Enviar cita por chat interno: ' + textoChatInterno);
  }
}

// Función para finalizar la sesión
function finalizarSesion() {
  // Aquí puedes implementar la lógica para finalizar la sesión
  console.log('Sesión finalizada');
}

// Evento de carga para iniciar CallBucDial
function iniciarCallbucdial() {
  // Ejemplo de llamada saliente
  agregarNumero('5');
  agregarNumero('0');
  agregarNumero('1');
  llamar();

  // Ejemplo de llamada entrante
  recibirLlamada('123456789');
}

// Evento de clic en botones de calificación
const opcionesCalificacion = document.querySelectorAll('.opciones-calificacion button');
opcionesCalificacion.forEach(opcion => {
  opcion.addEventListener('click', () => {
    opcionesCalificacion.forEach(btn => {
      btn.classList.remove('seleccionado');
    });
    opcion.classList.add('seleccionado');
  });
});

// Evento de clic en teclas del teclado
const teclasNumerico = document.querySelectorAll('#tecladoNumerico button');
teclasNumerico.forEach(tecla => {
  tecla.addEventListener('click', () => {
    teclasNumerico.forEach(btn => {
      btn.classList.remove('seleccionado');
    });
    tecla.classList.add('seleccionado');
  });
});

// Evento de tecla 'Backspace' para borrar dígitos
document.addEventListener('keydown', event => {
  if (event.key === 'Backspace') {
    agregarNumero('borrar');
  }
});


window.addEventListener("load", iniciarCallbucdial);