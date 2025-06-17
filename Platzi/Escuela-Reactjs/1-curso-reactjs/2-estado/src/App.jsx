import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
      <NameForm></NameForm>
      <ToggleButton></ToggleButton>
      <CounterWithEffect></CounterWithEffect>
    </>
  )
}

export default App
