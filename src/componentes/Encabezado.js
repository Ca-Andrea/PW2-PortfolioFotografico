
import { NavLink } from "react-router-dom";
import "../estilo/Estilo.css";

function Encabezado (){
	return(
	 <>
      <nav>
        <NavLink to="/Inicio" end>
         Inicio
        </NavLink>
        <NavLink to="/Servicios" end>
         Servicios
        </NavLink>
        <NavLink to="/Contacto" end>
         Contacto
        </NavLink>
      </nav>
     </>
  );
}

export default Encabezado;