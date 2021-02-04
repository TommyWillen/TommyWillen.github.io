import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MyNavbar(props) {
  return (
    <header className="sticky-top">
      <nav>
        <Navbar
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#22817d" }}
        >
          <Navbar.Brand href="/">Tommy Willen's Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="/aboutme"
                onClick={() =>
                  props.changeSideBar({
                    title: "Background",
                    titleItem: [
                      {
                        link: "#from",
                        linkTitle: "Where I Am From",
                      },
                      {
                        link: "#education",
                        linkTitle: "Education",
                      },
                      {
                        link: "#family",
                        linkTitle: "My Family",
                      },
                    ],
                  })
                }
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="/contact"
                onClick={() =>
                  props.changeSideBar({
                    title: "Contacts",
                    titleItem: [
                      {
                        link: "",
                        linkTitle: "Email",
                      },
                      {
                        link: "github",
                        linkTitle: "Github Profile",
                      },
                      {
                        link: "linkin",
                        linkTitle: "LinkIn Profile",
                      },
                    ],
                  })
                }
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/portfolio"
                onClick={() =>
                  props.changeSideBar({
                    title: "Portfolio",
                    titleItem: [
                      {
                        link: "#proj1",
                        linkTitle: "Project 1",
                      },
                      {
                        link: "#proj2",
                        linkTitle: "Project 2",
                      },
                      {
                        link: "#proj3",
                        linkTitle: "Project 3",
                      },
                      {
                        link: "#proj4",
                        linkTitle: "Project 4",
                      },
                      {
                        link: "#proj5",
                        linkTitle: "Project 5",
                      },
                      {
                        link: "#proj6",
                        linkTitle: "Project 6",
                      },
                    ],
                  })
                }
              >
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
}

export default MyNavbar;
