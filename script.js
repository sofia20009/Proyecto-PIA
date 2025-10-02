// =======================
// REGISTRO
// =======================
const registroForm = document.getElementById("registroForm");

if (registroForm) {
  registroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("regNombre").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;

    // VALIDACIÓN OBLIGATORIA DEL ARROBA (@)
    if (!email.includes('@')) {
      alert("❌ El correo electrónico debe contener el símbolo @.");
      return; // Detiene la ejecución si falla la validación
    }

    // Guardar datos en LocalStorage
    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("emailUsuario", email);
    localStorage.setItem("passUsuario", pass);
    // Establecer una bandera de login
    localStorage.setItem("isLoggedIn", "true");

    alert("✅ Registro exitoso, ahora inicia sesión");

    // Redirigir al login
    window.location.href = "iniciosesion.html";
  });
}

// =======================
// LOGIN
// =======================
const loginForm = document.getElementById("loginForm");

// Datos de la cuenta temporal
const TEMP_EMAIL = "prueba@menteconectada.com";
const TEMP_PASS = "123456";
const TEMP_NOMBRE = "Invitado";

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    // VALIDACIÓN OBLIGATORIA DEL ARROBA (@)
    if (!email.includes('@')) {
      alert("❌ El correo electrónico debe contener el símbolo @.");
      return; // Detiene la ejecución si falla la validación
    }

    // Intento de login con cuenta guardada o temporal
    const emailGuardado = localStorage.getItem("emailUsuario");
    const passGuardado = localStorage.getItem("passUsuario");
    
    const esRegistrado = (email === emailGuardado && pass === passGuardado);
    const esTemporal = (email === TEMP_EMAIL && pass === TEMP_PASS);

    // Validar datos
    if (esRegistrado || esTemporal) {
      const nombreMostrar = esTemporal ? TEMP_NOMBRE : localStorage.getItem("nombreUsuario");
      alert(`🎉 Bienvenido ${nombreMostrar}`);
      
      // Establecer una bandera de login
      localStorage.setItem("isLoggedIn", "true"); 

      // REDIRECCIÓN A INICIO (PUNTO SOLICITADO)
      window.location.href = "index.html"; // <-- CAMBIO AQUÍ
    } else {
      alert("❌ Correo o contraseña incorrectos");
    }
  });
}