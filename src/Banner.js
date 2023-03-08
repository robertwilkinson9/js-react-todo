import todo from './sticky-todo.jpg';
import './Banner.css';

function Banner() {
  return (
    <div className="Banner">
      <header className="Banner-header">
        <img src={todo} className="Banner-todo" alt="todo" width={250} height={250} />
        <p>
	  My first react app - the TODO list
        </p>
        <a
          className="Banner-link"
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

export default Banner;
