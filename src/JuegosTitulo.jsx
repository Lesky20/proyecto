import axios from 'axios';
import React, { useEffect, useState } from 'react'

const JuegosTitulo = () => {
    const url = "http://45.236.130.191/juegos.php";
    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
      axios.get(url).then((response) => {
        localStorage.setItem("Titulo", JSON.stringify(response.data))
        setTitulo(JSON.parse(localStorage.getItem("Titulo")))
      })
        
    }, [])

  return (
    <>      
        <h1>TITULO DE LOS JUEGOS</h1>
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE/TITULO</th>
            </tr>
          </thead>
          <tbody>
            {
              Titulo.map(t => (
                <tr key={t.id}>
                  <td>{t.juegos.id}</td>
                  <td>{t.titulo}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </>
  )
}

export default JuegosTitulo