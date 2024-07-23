import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JuegosGenero = () => {
    const url = "http://45.236.130.191/juegos.php"
    const [Genero, setGenero] = useState([])

    useEffect(() => {
      axios.get(url).then((response) => {
        localStorage.setItem("Genero", JSON.stringify(response.data))
        setGenero(JSON.parse(localStorage.getItem("Genero")))
      })
        
    }, [])
  return (
    <>
      <h1>GENERO DE LOS JUEGOS</h1>
      <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>GENERO</th>
            </tr>
          </thead>
          <tbody>
            {
              Genero.map(g => (
                <tr key={g.id}>
                  <td>{g.id}</td>
                  <td>{g.genero}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      
    </>
  )
}

export default JuegosGenero