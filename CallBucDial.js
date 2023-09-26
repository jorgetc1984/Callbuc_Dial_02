document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('loginform');
  var usuarioInput = document.getElementById('usuario');
  var passwordInput = document.getElementById('password');
  var campañaSelect = document.getElementById('campaña');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var usuario = usuarioInput.value;
    var password = passwordInput.value;
    var campaña = campañaSelect.value;

    registrar(usuario, password, campaña);
    form.reset();
  });

  var params = new URLSearchParams(window.location.search);
  var registrado = params.get("registrado");

  if (registrado === "true") {
    alert("Registro exitoso. ¡Bienvenido!");
  }
});

function registrar(usuario, password, campaña) {
  fetch('/registrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ usuario, password, campaña }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.registrado) {
        window.location.href = "file:///F:/Programacion2023/CallBucDial2.html";
      } else {
        alert("Error en el registro. Verifica los datos ingresados.");
      }
    })
    .catch(error => console.error("Error:", error));
}
const serverNode = require('./server_node');
window.addEventListener("load", iniciarCall);
