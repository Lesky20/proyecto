import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JuegosPlataforma = () => {
    const url = "http://45.236.130.191/juegos.php"
    const [plataforma, setPlataforma] = useState([])

    useEffect(() => {
      axios.get(url).then((response) => {
        localStorage.setItem("Plataforma", JSON.stringify(response.data))
        setPlataforma(JSON.parse(localStorage.getItem("Plataforma")))
      })
        
    }, [])
  return (
    <>
      <h1>PLATAFORMA DE LOS JUEGOS</h1>
      <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>PLATAFORMA</th>
            </tr>
          </thead>
          <tbody>
            {
              plataforma.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.juegos.plataforma}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </>
  )
}

export default JuegosPlataforma