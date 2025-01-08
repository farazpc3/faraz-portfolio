import "./App.css";
import MainNavBar from "./components/navigation/MainNavBar";

function App() {
  return (
    <>
      <header className="main-header">
        <MainNavBar />
      </header>
      <aside className="left-side-bar"></aside>
      <main className="main">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illo
          nisi laudantium, similique laborum dolores soluta mollitia modi fuga
          ad quos autem provident alias, consequuntur nemo voluptates expedita
          nam enim?
        </p>
      </main>
      <footer className="main-footer">
        <p>Copyright &copy; 2023 My Portfolio</p>
      </footer>
    </>
  );
}

export default App;
