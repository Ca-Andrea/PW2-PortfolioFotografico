import React from "react";

function Dest ({titulo, precio, imagen}){
	return(
	<>
       <div className="tarjetaServicio">
            <img src={imagen} alt={titulo}/>
            <h2>{titulo}</h2>
            <p>Precio: ${precio.toLocaleString("es-AR")}</p>
        </div>
    </>
  );
}

export default Dest;