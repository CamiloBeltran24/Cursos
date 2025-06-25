import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext, useEffect } from "react";


const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [ theme, setTheme ] = useState("light");

  const toggleTheme = () => {
    setTheme( prevTheme => prevTheme === "light" ? "dark" : "light" )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

function ThemeButton() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return(
    <>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#fff" : 
          "#333",
          color: theme === "light" ? "#000" : "#fff"
        }}
      >Cambiar Tema</button>
    </>
  )
}


function App() {

  return (
    <ThemeProvider>
      <ThemeButton></ThemeButton>
    </ThemeProvider>
  )
}

export default App
