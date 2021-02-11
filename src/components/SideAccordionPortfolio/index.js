import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Projects from "../../project";

function SideAccordionPortfolio() {

    return (
      <Card bg="dark" text="light" className="rounded-0">
        <Card.Title>Jump to a Section</Card.Title>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          About Me
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {Projects.map(item => <div><a href="#/portfolio" className="text-light">{item.title}</a></div>)}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
  );
}

export default SideAccordionPortfolio;