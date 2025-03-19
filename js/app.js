const email_input = document.querySelector("#email");
const asunto_input = document.querySelector("#asunto");
const mensaje_input = document.querySelector("#mensaje");
const formulario = document.querySelector("#formulario");

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

  const correo = `mailto:nelsonlondonodev@gmail.com?subject=${asunto}&body=Nombre: ${email}\nMensaje: ${mensaje}`;

  window.location.href = correo;

  // console.log(`Email: ${email}, Asunto: ${asunto}, Mensaje: ${mensaje}`);
});

// let value_email_input = email_input.value.trim();
// console.log(value_email_input);

// let value_asunto_input = asunto_input.value.trim();
// console.log(value_asunto_input);

// let value_mensaje_input = mensaje_input.value.trim();
// console.log(value_mensaje_input);

// form.funcion_boton_enviar =
//   ("submit",
//   () => {
//     console.log(value_email_input, value_asunto_input, value_mensaje_input);
//     alert("Email enviado...");
//   });
