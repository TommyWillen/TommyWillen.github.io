import React from "react";
import Row from "react-bootstrap/Row";


function AboutMe(props) {
    return (
        <Row>
            
        
        {props.children}
        </Row>
    )
}

export default AboutMe