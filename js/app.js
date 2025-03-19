const formulario = document.querySelector("#formulario");
const email_input = document.querySelector("#email");
const asunto_input = document.querySelector("#asunto");
const mensaje_input = document.querySelector("#mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = new FormData(formulario);

  const email = datos.get("email");
  const asunto = datos.get("asunto");
  const mensaje = datos.get("mensaje");

  const objecto_mensaje = {
    Email: email,
    Asunto: asunto,
    Mensaje: mensaje,
  };

  console.log(objecto_mensaje);

  const correo = `mailto:nelsonlondonodev@gmail.com?subject=${asunto}&body=Email: ${email} ${mensaje}`;

  window.location.href = correo;
});
