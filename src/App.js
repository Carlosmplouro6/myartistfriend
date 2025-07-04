import "./App.css";
import BaseCanvas from "./components/BaseCanvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaseCanvas />
        <p>Amo-te Anna, lets be happy</p>
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
