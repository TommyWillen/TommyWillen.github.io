import React from "react";
import Col from "react-bootstrap/Col"


function MainContainer(props) {
    return (
          <Col md={{ span: 10, offset: 2 }} className="main" role="main">
              {props.children}
          </Col>
    )
}

export default MainContainer