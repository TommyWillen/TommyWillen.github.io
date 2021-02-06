import React from "react";
import Row from "react-bootstrap/Row";



function Portfolio(props) {
    return (
      <Row>
      {props.children}  
      </Row>
    )
}

export default Portfolio