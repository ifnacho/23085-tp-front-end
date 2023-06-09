// Expresiones regulares para validar campos
const regexNombre = /^[a-zA-Z\s]+$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Validar campos al hacer clic en el botón "Resumen"
document.getElementById('resumen').addEventListener('click', function() {
  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const categoria = parseInt(document.getElementById('categoria').value);

  // Validar campos
  const errorNombre = document.getElementById('errorNombre');
  const errorApellido = document.getElementById('errorApellido');
  const errorCorreo = document.getElementById('errorCorreo');
  const errorCantidad = document.getElementById('errorCantidad');

  errorNombre.textContent = '';
  errorApellido.textContent = '';
  errorCorreo.textContent = '';
  errorCantidad.textContent = '';

  let valido = true;

  if (nombre !== "" && !regexNombre.test(nombre)) {
    errorNombre.textContent = 'Ingrese un nombre válido';
    valido = false;
  }

  if (apellido !== '' && !regexNombre.test(apellido)) {
    errorApellido.textContent = 'Ingrese un apellido válido';
    valido = false;
  }

  if (email !== '' && !regexEmail.test(email)) {
    errorCorreo.textContent = 'Ingrese un correo electrónico válido';
    valido = false;
  }

  if (cantidad <= 0 || isNaN(cantidad)) {
    errorCantidad.textContent = 'Elija una cantidad de tickets válida';
    valido = false;
  }

  // Calcular total a pagar
  if (valido) {
    const total = cantidad * categoria;
    document.getElementById('totalAPagar').textContent = 'Total a Pagar: $' + total;
  } else {
    document.getElementById('totalAPagar').textContent = 'Total a Pagar: $';
  }
});

// Restablecer campos y total a pagar al hacer clic en el botón "Borrar"
document.getElementById('borrar').addEventListener('click', function() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('email').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('categoria').selectedIndex = 0;
  document.getElementById('errorNombre').textContent = '';
  document.getElementById('errorApellido').textContent = '';
  document.getElementById('errorCorreo').textContent = '';
  document.getElementById('errorCantidad').textContent = '';
  document.getElementById('totalAPagar').textContent = 'Total a Pagar: $';
});
