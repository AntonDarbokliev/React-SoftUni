import "./App.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Search } from "./components/Search.jsx";
function App() {
  return (
    <>
          <Header />
      <main class="main">
        <section class="card users-container">
          <Search />
        </section>
      </main>
          <Footer />
    </>
  );
}

export default App;
