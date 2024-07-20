import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import JuegosGenero from './JuegosGenero';
import JuegosPlataforma from './JuegosPlataforma';
import JuegosTitulo from './JuegosTitulo';

const Inicio = () => {
    const url = "http://45.236.130.191/juegos.php";
    const [juegos, setJuegos] = useState([]);

    return (
        <div>

            <Router>
              <Routes>
                <Route>
                  <ul>
                    <li></li>
                  </ul>
                </Route>
              </Routes>
            </Router>

        </div>
    );
}

export default Inicio;