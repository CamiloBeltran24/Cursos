import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import CounterWithCustomHook from './components/CounterwithCustomHook/CounterWithCustomHook'

function App() {
  return (
    <>
      <Counter></Counter>
      <CounterWithCustomHook></CounterWithCustomHook>
    </>
  )
}

export default App
