import Navegacion from "./componentes/Navegacion"
import consultarAlumnos from "./paginas/consultarAlumnos";  
import insertarAlumno from "./paginas/insertarAlumno";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route exact path="/" Component={ insertarAlumno }></Route>
        <Route exact path="/consultarAlumno" Component={ consultarAlumnos }></Route>
      </Routes>
    </Router>
  );
}

export default App;
