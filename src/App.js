import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Container fluid>
          <Row>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/aboutme" component={AboutMe} />
          </Row>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
