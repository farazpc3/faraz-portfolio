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
        <header></header>
      </main>
      <aside className="right-side-bar"></aside>
      <footer className="main-footer">
        <p>Copyright &copy; 2023 My Portfolio</p>
      </footer>
    </>
  );
}

export default App;
