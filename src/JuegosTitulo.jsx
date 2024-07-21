import React, { useEffect, useState } from 'react'

const JuegosTitulo = () => {
    const url = "http://45.236.130.191/juegos.php"
    const [juegos, setJuegos] = useState([])

    useEffect(() => {
      fetch(url).then((response) => response.json()).then((datos) => setJuegos(datos))
    }, []);

  return (
    <>      
        <h1>Titulo De Los Juegos</h1>
        <ul>
          {juegos.map(u => <li>{u.juegos.titulo}</li>)}
        </ul>
    </>
  )
}

export default JuegosTitulo