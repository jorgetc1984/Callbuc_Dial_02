class MarcadorPredictivo {
  constructor() {
    this.numeroActual = '';
  }

  marcar() {
    if (this.numeroActual !== '') {
      console.log('Marcando ' + this.numeroActual + '...');
      // Lógica para realizar la llamada saliente utilizando una API o biblioteca de telefonía
    } else {
      console.log('No se ha ingresado un número para marcar.');
    }
  }

  module.exports = MarcadorPredictivo;

recibirLlamada(numero) {
  console.log('Llamada entrante de ' + numero);
  // Lógica para atender la llamada entrante y realizar las acciones necesarias
}

agregarDigito(digito) {
  this.numeroActual += digito;
  console.log('Número actual: ' + this.numeroActual);
  // Lógica para mostrar el número actual en la interfaz de usuario
  document.getElementById('numeroTelefono').value = this.numeroActual;
}

borrarUltimoDigito() {
  this.numeroActual = this.numeroActual.slice(0, -1);
  console.log('Número actual: ' + this.numeroActual);
  // Lógica para actualizar la interfaz de usuario
  document.getElementById('numeroTelefono').value = this.numeroActual;
}
}

const marcador = new MarcadorPredictivo();

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

function agregarNumero(numero) {
  marcador.agregarDigito(numero);
}

function llamar() {
  marcador.marcar();
}

function recibirLlamada(numero) {
  marcador.recibirLlamada(numero);
}

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

function finalizarSesion() {
  // Aquí puedes implementar la lógica para finalizar la sesión
  console.log('Sesión finalizada');
}

// Evento de carga para iniciar CallBucDial
window.addEventListener('load', () => {
  llamar();

  // Ejemplo de llamada entrante
  recibirLlamada('123456789');
});

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

const express = require("express");
const app = express();
const port = 3000;

// Simulación de datos de la base de datos
const clientes = [
  { id: 1, nombre: "Cliente 1" },
  { id: 2, nombre: "Cliente 2" },
  // ...
];

app.get("/obtener-clientes", (req, res) => {
  res.json(clientes);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'tu_host_de_mysql',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/registrar', (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;
  const campaña = req.body.campaña;

  registrar(usuario, password, campaña, (registroExitoso) => {
    if (registroExitoso) {
      res.redirect('/?registrado=true');
    } else {
      res.status(400).send('Error en el registro. Verifica los datos ingresados.');
    }
  });
});

function registrar(usuario, password, campaña, callback) {
  const extensionesValidas = ['101', '102', '103'];
  const claveValida = '123456';
  const campañaValida = 'paneles';

  if (
    extensionesValidas.includes(usuario) &&
    password === claveValida &&
    campaña === campañaValida
  ) {
    const insertQuery = 'INSERT INTO registros (usuario, campaña) VALUES (?, ?)';
    db.query(insertQuery, [usuario, campaña], (err) => {
      if (err) {
        console.error(err);
        callback(false);
      } else {
        callback(true);
      }
    });
  } else {
    callback(false);
  }
}

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


document.addEventListener("DOMContentLoaded", () => {
  // Cuando la página está cargada, realizar la solicitud al servidor
  fetch("/obtener-clientes")
    .then(response => response.json())
    .then(data => {
      const listaClientes = document.getElementById("lista-clientes");
      data.forEach(cliente => {
        const li = document.createElement("li");
        li.textContent = cliente.nombre;
        listaClientes.appendChild(li);
      });
    })
    .catch(error => console.error("Error:", error));
});

// Función para agregar un número al cuadro de "Llamada Manual"
function agregarNumeroLlamadaManual(numero) {
  var cuadroLlamadaManual = document.getElementById("numeroTelefono");
  cuadroLlamadaManual.value += numero;
}

function finalizarSesion() {
  window.location.href = "file:///E:/Programacion2023/callbucdial/1/CallBucDial1.html";
}