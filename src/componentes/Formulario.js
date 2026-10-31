import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../estilo/EstiloForm.css";

function Formulario (){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5tbhq4b', 'template_rnbndia', form.current, {
        publicKey: 'n-IJsrdZbab-CeL-_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
		  alert ("Correo enviado");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );

};
export default Formulario;