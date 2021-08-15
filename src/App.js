import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";

import "./App.css";

// import About from "./components/About";
// import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
// import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <div className="App">
          <Navigation />
          <Home />

          {/* <Route path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> */}
          {/* <Navigation />
          <About />
          <Header /> */}
          {/* <Home /> */}
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
