import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../estilo/EstiloIni.css";
import PiePagina from "../componentes/PiePagina";


function Inicio (){
    const [gatos, setGatos] = useState([]);

    useEffect(() => {
      axios.get("https://cataas.com/api/cats?limit=6")
      .then(respuesta => setGatos(respuesta.data))
    });
	return(
	<>
      <h1>Inicio</h1>
	  <h1>Mi Portfolio</h1>
      <p>Bienvenidos a un lugar para los amantes de los gatos.
         Aquí podrás conocer mis trabajos, proyectos y habilidades.
      </p>
            <h2 className="tituloGaleria">
                Galería de imágenes
            </h2>
            <div className="galeria">
                {gatos.map((gato) => (
                    <div key={gato.id} className="tarjeta">
                        <img
                            src={`https://cataas.com/cat/${gato.id}`}
                            alt={"Fotografía de un gato"}
                        />
					</div>
			))}
			</div>
	  <PiePagina/>
    </>
  );
}

export default Inicio;