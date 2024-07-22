import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JuegosGenero from './JuegosGenero';
import JuegosPlataforma from './JuegosPlataforma';
import JuegosTitulo from './JuegosTitulo';

const Inicio = () => {
    const url = "http://45.236.130.191/juegos.php";

    useEffect(() => {
      fetch(url).then((response) => response.json()).then((data) => {
        localStorage.setItem("Titulo", JSON.stringify(data))
      })
    })

    return (
        <div>
          <Router>
            <ul>
              <li><Link to={"/"}>INICIO</Link></li>
              <li><Link to={"/JuegosTitulo"}>TITULO DE LOS JUEGOS</Link></li>
              <li><Link to={"/JuegosPlataforma"}>PLATAFORMA DE LOS JUEGOS</Link></li>
              <li><Link to={"/JuegosGenero"}>GENERO DE LOS JUEGOS</Link></li>
            </ul>
            <Routes>
              <Route path='/' element={<Inicio />}></Route>
              <Route path='Titulo' element={<JuegosTitulo />}></Route>
              <Route path='JuegosPlataforma' element={<JuegosPlataforma />}></Route>
              <Route path='JuegosGenero' element={<JuegosGenero />}></Route>
            </Routes>
          </Router>
        </div>
    );
}

export default Inicio;