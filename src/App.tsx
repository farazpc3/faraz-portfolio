import { useState } from "react";
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
