import React from "react";

import GlobalStyle from "./styles/GlobalStyle";

import NavigationMenu from "./components/NavigationMenu";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import SmoothScrollbar from "./components/SmoothScrollbar";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <NavigationMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </div>
  );
};

export default App;
