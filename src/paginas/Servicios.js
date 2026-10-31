import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import Dest from "./Dest";
import "../estilo/EstiloServ.css";
import PiePagina from "../componentes/PiePagina";

function Servicios (){
	
	const Data = [
	{
		id:1,
		titulo: 'Fotografía otoñal',
		precio: 15000,
		imagen: img1,
	},
	{
		id:2,
		titulo: 'Fotografía creativa',
		precio: 10000,
		imagen: img2,
	},
	{
		id:3,
		titulo: 'Fotografía ambiental',
		precio: 25000,
		imagen: img3,
	},
	{
		id:4,
		titulo: 'Fotografía vintage',
		precio: 35000,
		imagen: img4,
	},
	{
		id:5,
		titulo: 'Fotografía silueta',
		precio: 35000,
		imagen: img5,
	},
	{
		id:6,
		titulo: 'Fotografía minimalista',
		precio: 30000,
		imagen: img6,
	},
	
	] 
	return(
	<>
      <h1>Servicios</h1>
	  <div className="galeriaServicios">
	  {Data.map((d) => (
         <Dest key={d.id} 
			titulo={d.titulo}
			precio={d.precio}
			imagen={d.imagen}
		 />
      ))}
	  </div>
	  <PiePagina/>
    </>
	);
}

export default Servicios;