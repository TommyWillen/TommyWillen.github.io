import React from "react";
import Row from "react-bootstrap/Row";
import ContactCard from "../components/ContactCard";


function ContactMe(props) {
    
    props.sideNavCheck()

    return (
        <Row>
            
        
        <ContactCard></ContactCard>
        </Row>
    )
}

export default ContactMe