import { HashRouter, Routes, Route } from "react-router-dom";
import Encabezado from "./componentes/Encabezado";
import Inicio from "./paginas/Inicio";
import Servicios from "./paginas/Servicios";
import Contacto from "./paginas/Contacto";
import NoExiste from "./paginas/NoExiste";
function App() {
  return (
    <>
	  <HashRouter>
	    <Encabezado/>
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/Inicio" element={<Inicio />} />
			<Route path="/Servicios" element={<Servicios />} />
			<Route path="/Contacto" element={<Contacto />} />
			<Route path="*" element={<NoExiste />} />
		</Routes>
	  </HashRouter>
	  
    </>
  );
}

export default App;
