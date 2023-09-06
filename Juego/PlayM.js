let sectionMensajes = document.getElementById('resultado');
let contenedorTarjetas = document.getElementById('contenedorTarjetas');
let CREATUMS = [];
let optionDeCREATUMS;
let ataqueGuerreroJugador;
let ataqueGuerreroEnemigo;
let vidasGuerreroJugador = 3;
let vidasGuerreroEnemigo = 3;
let sectionSeleccionarReinicio;

class CREATUM {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let zeus = new CREATUM('Zeus', 'img/Zeus.png', 3);
let faraon = new CREATUM('Faraon', 'img/faraon1.png', 3);
let moises = new CREATUM('Moises', 'img/faraon1.png', 3);

zeus.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
);

faraon.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
);

moises.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
);

CREATUMS.push(zeus, faraon, moises);

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'none';

  CREATUMS.forEach((CREATUM) => {
    optionDeCREATUMS = `<p>
      <input type="radio" name="guerrero" id=${CREATUM.nombre} />
      <label class="tarjeta-de-creatum" for=${CREATUM.nombre}>
      <p>${CREATUM.nombre}</p>
      <img src=${CREATUM.foto} alt=${CREATUM.nombre}>
      </label>
      </p>`;
  });

  let sectionSeleccionarReinicio = document.getElementById('reiniciar');
  sectionSeleccionarReinicio.style.display = 'none';
  let botonGuerreroJugador = document.getElementById('boton-guerrero');
  botonGuerreroJugador.addEventListener('click', seleccionarGuerreroJugador);
  let botonReiniciar = document.getElementById('boton-reiniciar');
  botonReiniciar.addEventListener('click', reiniciarJuego);
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;
}

function seleccionarGuerreroJugador() {
  let inputZeus = document.getElementById('zeus');
  let inputFaraon = document.getElementById('faraon');
  let inputMoises = document.getElementById('moises');
  let spanGuerreroJugador = document.getElementById('guerrero-jugador');

  if (inputZeus.checked) {
    spanGuerreroJugador.innerHTML = inputZeus.id;
    seleccionarGuerreroEnemigo();
  } else if (inputFaraon.checked) {
    spanGuerreroJugador.innerHTML = inputFaraon.id;
    seleccionarGuerreroEnemigo();
  } else if (inputMoises.checked) {
    spanGuerreroJugador.innerHTML = inputMoises.id;
    seleccionarGuerreroEnemigo();
  } else {
    alert('Debes seleccionar un Guerrero');
  }
}

function seleccionarGuerreroEnemigo() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'block';

  let guerreroEnemigo = aleatorio(0, CREATUMS.length - 1);
  let spanGuerreroEnemigo = document.getElementById('guerrero-enemigo');

  if (guerreroEnemigo === 0) {
    spanGuerreroEnemigo.innerHTML = 'Zeus';
  } else if (guerreroEnemigo === 1) {
    spanGuerreroEnemigo.innerHTML = 'Faraon';
  } else if (guerreroEnemigo === 2) {
    spanGuerreroEnemigo.innerHTML = 'Moises';
  }

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = false;
  botonFuego.addEventListener('click', () => {
    ataqueFuego(guerreroEnemigo);
  });
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = false;
  botonAgua.addEventListener('click', () => {
    ataqueAgua(guerreroEnemigo);
  });
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = false;
  botonTierra.addEventListener('click', () => {
    ataqueTierra(guerreroEnemigo);
  });
  let botonGuerreroJugador = document.getElementById('boton-guerrero-jugador');
  botonGuerreroJugador.disabled = true;
}

function ataqueFuego(guerreroEnemigo) {
  ataqueGuerreroJugador = 'Fuego 🔥';
  ataqueAleatorioGuerreroEnemigo(guerreroEnemigo);
}

function ataqueAgua(guerreroEnemigo) {
  ataqueGuerreroJugador = 'Agua 💧';
  ataqueAleatorioGuerreroEnemigo(guerreroEnemigo);
}

function ataqueTierra(guerreroEnemigo) {
  ataqueGuerreroJugador = 'Tierra 🌱';
  ataqueAleatorioGuerreroEnemigo(guerreroEnemigo);
}

function ataqueAleatorioGuerreroEnemigo(guerreroEnemigo) {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueGuerreroEnemigo = 'Fuego 🔥';
  } else if (ataqueAleatorio === 2) {
    ataqueGuerreroEnemigo = 'Agua 💧';
  } else if (ataqueAleatorio === 3) {
    ataqueGuerreroEnemigo = 'Tierra 🌱';
  }
  combate(guerreroEnemigo);
}

function combate(guerreroEnemigo) {
  let spanVidasGuerreroJugador = document.getElementById('vida-guerrero-jugador');
  let spanVidasGuerreroEnemigo = document.getElementById('vida-guerrero-enemigo');

  if (ataqueGuerreroJugador === ataqueGuerreroEnemigo) {
    crearMensaje('Empatados 😐');
  } else if (ataqueGuerreroJugador === 'Fuego 🔥' && ataqueGuerreroEnemigo === 'Tierra 🌱') {
    crearMensaje('Ganaste! 🎉');
    vidasGuerreroEnemigo--;
    spanVidasGuerreroEnemigo.innerHTML = `${vidasGuerreroEnemigo}`;
  } else if (ataqueGuerreroJugador === 'Agua 💧' && ataqueGuerreroEnemigo === 'Fuego 🔥') {
    crearMensaje('Ganaste! 🎉');
    vidasGuerreroEnemigo--;
    spanVidasGuerreroEnemigo.innerHTML = `${vidasGuerreroEnemigo}`;
  } else if (ataqueGuerreroJugador === 'Tierra 🌱' && ataqueGuerreroEnemigo === 'Agua 💧') {
    crearMensaje('Ganaste! 🎉');
    vidasGuerreroEnemigo--;
    spanVidasGuerreroEnemigo.innerHTML = `${vidasGuerreroEnemigo}`;
  } else {
    crearMensaje('Perdiste 😢');
    vidasGuerreroJugador--;
    spanVidasGuerreroJugador.innerHTML = `${vidasGuerreroJugador}`;
  }
  revisarVidas(guerreroEnemigo);
}

function revisarVidas(guerreroEnemigo) {
  if (vidasGuerreroEnemigo === 0) {
    let sectionSeleccionarReinicio = document.getElementById('reiniciar');
    sectionSeleccionarReinicio.style.display = 'none';
    crearMensajeFinal('Felicitaciones Ganaste 🎉');
    deshabilitarBotones();
  } else if (vidasGuerreroJugador === 0) {
    let sectionSeleccionarReinicio = document.getElementById('reiniciar');
    sectionSeleccionarReinicio.style.display = 'block';
    crearMensajeFinal('Eres una decepcion Perdiste 😢');
    deshabilitarBotones();
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById('mensajes');
  let parrafo = document.createElement('p');
  parrafo.innerHTML = `Tu guerrero atacó con ${ataqueGuerreroJugador}, el guerrero del enemigo atacó con ${ataqueGuerreroEnemigo} - ${resultado}`;
  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById('mensajes');
  let parrafo = document.createElement('p');
  parrafo.innerHTML = `${resultadoFinal}`;
  sectionMensajes.appendChild(parrafo);
}

function deshabilitarBotones() {
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;
}

function reiniciarJuego() {
  vidasGuerreroJugador = 3;
  vidasGuerreroEnemigo = 3;
  let sectionMensajes = document.getElementById('mensajes');
  sectionMensajes.innerHTML = '';
  let sectionSeleccionarReinicio = document.getElementById('reiniciar');
  sectionSeleccionarReinicio.style.display = 'none';
  let botonGuerreroJugador = document.getElementById('boton-guerrero-jugador');
  botonGuerreroJugador.disabled = false;
  let spanVidasGuerreroJugador = document.getElementById('vida-guerrero-jugador');
  spanVidasGuerreroJugador.innerHTML = `${vidasGuerreroJugador}`;
  let spanVidasGuerreroEnemigo = document.getElementById('vida-guerrero-enemigo');
  spanVidasGuerreroEnemigo.innerHTML = `${vidasGuerreroEnemigo}`;
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

CREATUMS.forEach((CREATUM) => {
  let botonFuego = document.getElementById(CREATUM.ataques[0].id);
  let botonAgua = document.getElementById(CREATUM.ataques[1].id);
  let botonTierra = document.getElementById(CREATUM.ataques[2].id);
  
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
});

CREATUMS.forEach((CREATUM) => {
  let botonFuego = document.getElementById(CREATUM.ataques[0].id);
  let botonAgua = document.getElementById(CREATUM.ataques[1].id);
  let botonTierra = document.getElementById(CREATUM.ataques[2].id);
  
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
});

iniciarJuego();