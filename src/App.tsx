import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainNavBar from "./components/MainNavBar.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="main-header">
        <h1>Welcome to my portfolio</h1>
        <MainNavBar />
      </header>
      <aside className="left-side-bar"></aside>
      <main className="main">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
      <aside className="right-side-bar"></aside>
      <footer className="main-footer">
        <p>Copyright &copy; 2023 My Portfolio</p>
      </footer>
    </>
  );
}

export default App;
