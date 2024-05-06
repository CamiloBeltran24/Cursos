import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />  /* De esta manera puedo agreagar un componente dentro de otro componente */

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return(
    <li>
      <span>V</span>
      <p>Hacer alguna actividad</p>
      <span>X</span>
    </li>
  );
}

export default App;
