import React, { useEffect, useState } from 'react'

const JuegosTitulo = () => {
    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
      const tituloLS = localStorage.getItem("Titulo")
      setTitulo(JSON.parse(tituloLS))
    }, [])

  return (
    <>      
        <h1>TITULO DE LOS JUEGOS</h1>
        <table>
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
                  <td>{t.juegos.titulo}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </>
  )
}

export default JuegosTitulo