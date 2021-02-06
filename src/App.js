import React, {useState} from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import "./App.css";
import Container from "react-bootstrap/Container";
import SideBar from "./components/Sidebar"
import MainContainer from "./components/MainContainer"
import SideAccordion from "./components/SideAccordion"

function App() {
  const [sideBarState, setSideBarState] = useState({
    title: "Background",
    titleItem: [
      {
        link: "from",
        linkTitle: "Where I Am From"
    },
    {
      link: "education",
      linkTitle: "Education"
    },
    {
      link: "family",
      linkTitle: "My Family"
    }
    ]
  })
  function changeSideBar(event){
    setSideBarState({ title:event.title, titleItem:event.titleItem})
  }
  return (
    <Router>
      <div style={{scrollPaddingTop: "60px"}}>
        <MyNavbar changeSideBar={changeSideBar}/>
        <SideBar>
          <SideAccordion title={sideBarState.title} titleItem={sideBarState.titleItem} />
        </SideBar>
        <Container fluid>
          <MainContainer>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/aboutme" component={AboutMe} />
            </MainContainer>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
