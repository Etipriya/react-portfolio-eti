import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
// import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <About />
        <Header />
        {/* <Home /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
