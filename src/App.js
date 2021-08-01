import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

// import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
// import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* <About /> */}
        <Header />
        <Home />
        {/* <Projects />
        <Contact /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
