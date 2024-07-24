import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JuegosGenero from './JuegosGenero';
import JuegosPlataforma from './JuegosPlataforma';
import JuegosTitulo from './JuegosTitulo';


const Inicio = () => {


    return (
        <div>
          <h1>Bienvenido A Nuestra Pagina De Videojuegos :D</h1>
          <div className='col '>
            <label htmlFor="id" className='form-label'>ID: </label>
            <input type="number" id="id" className='form-control'/>
          </div>
          <div className="col">
            <label htmlFor="genero" className='form-label'>Genero: </label>
            <input type="text" id="genero" className='form-control'/>
          </div>
          <div className="col">
            <label htmlFor="juegos" className='form-label'>Juegos: </label>
            <input type="text" id="juegos" className='form-control'/>
          </div>
          <div className="col">
            <button>Guardar</button>
          </div>
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