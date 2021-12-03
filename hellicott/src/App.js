import logo from './HellicottLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Hellicott website, reimagined in React...
        </p>
        <a
          className="App-link"
          href="https://github.com/hellicott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hellicott Github
        </a>
      </header>
    </div>
  );
}

export default App;
