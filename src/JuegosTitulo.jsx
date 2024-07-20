import React, { useEffect, useState } from 'react'

const JuegosTitulo = () => {
    const url = "http://45.236.130.191/juegos.php"
    const [juego, setJuegos] = useState([])

    useEffect(() => {
      fetch(url).then((response) => response.json()).then((datos) => setJuegos(datos))
    }, []);

  return (
    <>      
        <h1>Titulo De Los Juegos</h1>
        <ul>
          {juego.map(u => <li>{u.juegos.titulo}</li>)}
        </ul>
    </>
  )
}

export default JuegosTitulo