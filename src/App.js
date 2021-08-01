import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
