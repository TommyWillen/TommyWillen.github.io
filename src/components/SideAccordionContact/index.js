import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function SideAccordionContact() {

    return (
      <Card bg="dark" text="light" className="rounded-0">
        <Card.Title>Jump to a Section</Card.Title>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Contact Me
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <div><a href="mailto:tommywillen12@gmail.com" className="text-light">Email</a></div>
          <div><a href="https://github.com/TommyWillen" className="text-light">GitHub Profile</a></div>
          <div><a href="https://www.linkedin.com/in/tommy-willen-12867b1b3/" className="text-light">LinkedIn Profile</a></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
  );
}

export default SideAccordionContact;