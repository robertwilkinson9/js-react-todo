import logo from './logo.svg';
import todo from './sticky-todo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={todo} className="App-todo" alt="todo" width={250} height={250} />
        <p>
	  My first react app - the TODO list
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

export default App;
