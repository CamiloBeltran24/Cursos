import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/Card'

function App() {
  const items = ["React", "Vite", "JavaScript", "CSS", "HTML"];

  return (
    <>
      <section>
        <h1>Hola Desde React</h1>

        <Card title="Card 1" description="Esta es una descripion"></Card>
        <Card title="Card 2" description="Esta es una descripion para la Card 2"></Card>
        <Card title="Card 3" description="Esta es la descripcion para la Card 3"/>

        <ul>
          {
            items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}


export default App // Esta linea es necesaria para que el componente App sea exportado y pueda ser utilizado en otros archivos.
