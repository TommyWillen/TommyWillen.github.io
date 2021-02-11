import React from "react";
import AboutMain from "../components/AboutMain"
import Row from "react-bootstrap/Row";


function AboutMe(props) {
    return (
        <Row>


        <AboutMain></AboutMain>
        {props.children}
        </Row>
    )
}

export default AboutMe;