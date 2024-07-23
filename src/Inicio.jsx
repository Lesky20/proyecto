import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JuegosGenero from './JuegosGenero';
import JuegosPlataforma from './JuegosPlataforma';
import JuegosTitulo from './JuegosTitulo';


const Inicio = () => {


    return (
        <div>
          <h1>Bienvenido :D</h1>
          <Router>
            <ul>
              <nav>
                <li><Link to={"/"}>INICIO</Link></li>
                <li><Link to={"/JuegosTitulo"}>TITULO DE LOS JUEGOS</Link></li>
                <li><Link to={"/JuegosPlataforma"}>PLATAFORMA DE LOS JUEGOS</Link></li>
                <li><Link to={"/JuegosGenero"}>GENERO DE LOS JUEGOS</Link></li>
              </nav>
            </ul>
            <Routes>
              <Route path='juegosTitulo' element={<JuegosTitulo />}></Route>
              <Route path='JuegosPlataforma' element={<JuegosPlataforma />}></Route>
              <Route path='JuegosGenero' element={<JuegosGenero />}></Route>
            </Routes>
          </Router>
        </div>
    );
}

export default Inicio;