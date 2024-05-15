import { TodoTop } from './TodoTop';
import { TodoCounter }  from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContent } from './TodoContent';
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
    completed: true,
  },
  {
    text: "Cocinar la cena",
    completed: true,
  }
];

function App() {

  const [ todos, setTodos ] = React.useState( defaultTodos );
  const [ searchValue, setSearchValue ] = React.useState('') // Uso de use state
  
  // ESTODOS DERIVADOS
  const completedTodos = todos.filter(( todo ) => todo.completed === true).length
  // console.log(`Los usuarios buscan TODOs de: ${searchValue}`);
  const todosToShow = todos.filter(( todo ) => todo.text.includes(searchValue));
  // Validacion para la busqueda de coincidencias del teclado
  const searchedTodos = todos.filter( (todo) => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  // console.log(todosToShow);

  return (
    <React.Fragment>

      <TodoTop />

      <TodoCounter
        completed={completedTodos}
        total={todos.length}  /> { /* De esta manera se agregan componentes dentro de componentes. */}

        <TodoContent>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          /> { /* componentes de etiqueta de auto cierre */}

          <TodoList
          setTodos={setTodos}
          items={todosToShow}
          >
            {searchedTodos.map( todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}/>
            )) }
          </TodoList>

        </TodoContent>

      { /* Etiquetas de componentes con apertura y cierre */}

      <CreateTodoButton/>

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