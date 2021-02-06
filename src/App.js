import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MyNavbar from "./components/MyNavbar";
import "./App.css";
import Container from "react-bootstrap/Container";
import SideBar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import SideAccordionAbout from "./components/SideAccordionAbout";
import SideAccordionContact from "./components/SideAccordionContact";
import SideAccordionPortfolio from "./components/SideAccordionPortfolio";
import MyFooter from "./components/Footer";
import AboutMain from "./components/AboutMain";
import ContactCard from "./components/ContactCard";
import PortfolioCard from "./components/PortfolioCard";

function App() {
  return (
    <Router>
      <div style={{ scrollPaddingTop: "60px" }}>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={AboutMe}>
            <SideBar>
              <SideAccordionAbout />
            </SideBar>
            <Container fluid>
              <MainContainer>
                <AboutMain />
              </MainContainer>
            </Container>
          </Route>
          <Route exact path="/contact" component={Contact}>
            <SideBar>
              <SideAccordionContact />
            </SideBar>
            <Container fluid>
              <MainContainer>
                <ContactCard/>
              </MainContainer>
            </Container>
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <SideBar>
              <SideAccordionPortfolio />
            </SideBar>
            <Container fluid>
              <MainContainer>
                <PortfolioCard/>
              </MainContainer>
            </Container>
          </Route>
          <Route exact path="/aboutme" component={AboutMe}>
            <SideBar>
              <SideAccordionAbout />
            </SideBar>
            <Container fluid>
              <MainContainer>
                <AboutMain />
              </MainContainer>
            </Container>
          </Route>
        </Switch>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
