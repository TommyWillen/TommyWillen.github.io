import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function SideAccordion(props) {
  console.log(props.titleItem)
    return (
      <Card bg="dark" text="light" className="rounded-0">
        <Card.Title>Jump to a Section</Card.Title>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {props.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          {props.titleItem.map(item => 
          <div><a href={item.link} className="text-light">{item.linkTitle}</a></div>
            )}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
  );
}

export default SideAccordion;