import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function SideAccordionAbout() {

    return (
      <Card bg="dark" text="light" className="rounded-0">
        <Card.Title>Jump to a Section</Card.Title>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          About Me
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <div><a href="#from" className="text-light">Who I Am</a></div>
          <div><a href="#education" className="text-light">Education</a></div>
          <div><a href="#family" className="text-light">Why I Code</a></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
  );
}

export default SideAccordionAbout;