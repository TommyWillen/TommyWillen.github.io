import React from "react";
import Row from "react-bootstrap/Row";



function Contact(props) {
    return (
      <Row>
      {props.children}  
      </Row> 
    )
}

export default Contact