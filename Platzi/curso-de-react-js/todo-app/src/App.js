
import { TodoCounter }  from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';

const defaultTodos = [
  {
    text: "Preparar la maleta",
    completed: false,
  },
  {
    text: "Hacer el Examen de ingles",
    completed: false,
  },
  {
    text: "Tomar el curso de react",
    completed: false,
  },
  {
    text: "Jugar Una hora",
    completed: false,
  }
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={2} total={5} /> { /* De esta manera se agregan componentes dentro de componentes. */}

      <TodoSearch /> { /* componentes de etiqueta de auto cierre */}

      { /* Etiquetas de componentes con apertura y cierre */}
      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;

/*
 * Los componenetes se crean mediante funciones
 *
 * los elementos dentro de los componentes se llaman elementos de react
 * estos elementos de react que son elementos muy similares al HTML, estan construidos bajo el lenguaje JSX
 *
 *
 * Las props dentro son objetos por dentro, las props se pasan
 * como parametron dentro del as etiquetas jsx y se reciben
 * dentro de las funciones.
 * 
 * React.Fragment nos permite eliminar el elemento div de clase
 * APP que usualmente vemos en los proytectos React
 * 
 * los elementos que se rendericen a partir de un array necesitan tener una propiedad
 * llamada key que debe ser un identificador unico.
 */