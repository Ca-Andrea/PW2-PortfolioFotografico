import React from "react";
import Formulario from "../componentes/Formulario";
import PiePagina from "../componentes/PiePagina";
import "../estilo/EstiloCont.css";

function Contacto (){
	return(
	<>
      <h1>Contactos</h1>
	  <div className="contenedorContacto">
	  
		<div className="formularioContacto">
			<h2>Formulario</h2>
			<Formulario />
		</div>
	  
		<div className="mapa">
			<h2>Ubicación</h2>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5185.125473246052!2d-65.40583178772341!3d-24.745605406075757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc1264c76c971%3A0x5fc7316c3bf2248!2sUPATecO%20-%20Universidad%20Provincial%20de%20Administraci%C3%B3n%2C%20Tecnolog%C3%ADa%20y%20Oficios!5e1!3m2!1ses!2sar!4v1793391349662!5m2!1ses!2sar" 
				width="100%" 
				height="450" 
				style={{ border: 0 }} 
				allowFullScreen
				loading="lazy" 
				referrerPolicy="strict-origin-when-cross-origin"
				title="Ubicación de UPATecO"
			></iframe>
		</div>
	  </div>			
	  <PiePagina/>
    </>
  );
}

export default Contacto;