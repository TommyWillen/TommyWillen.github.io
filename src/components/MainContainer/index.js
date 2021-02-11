import React from "react";
import Col from "react-bootstrap/Col"


function MainContainer(props) {
    return (
          <Col md={{ span: 10, offset: 2 }} className="main" role="main" style={{marginTop: "55px"}}>
              {props.children}
          </Col>
    )
}

export default MainContainer