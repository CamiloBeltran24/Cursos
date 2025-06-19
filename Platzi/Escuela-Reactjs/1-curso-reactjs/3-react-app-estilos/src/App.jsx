import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // importar Estilos CSS
import Card from './components/Card/Card.jsx' // importar Componente Card
import Button from './components/Button/Button.jsx'
import TailwindText from './components/TailwindText/TailwindText.jsx'


function App() {
  return (
    <>
     {/* <Card></Card> */}

      {/* <Button>Gris</Button>
      <Button blue>Azul</Button> */}
      <TailwindText></TailwindText>
    </>
  )
}

export default App
