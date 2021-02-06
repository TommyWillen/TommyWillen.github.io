import React from "react";
import Card from "react-bootstrap/Card"

function ContactCard() {
    return (
        <Card className="border-0 rounded-0 py-2 card-bg col-md-6">
        <Card.Body>
          <h1>Contact</h1>
          <hr />
          <p><strong>Name:</strong> Thomas "Tommy" Willen</p>
          <p><strong>Email:</strong> TommyWillen12@gmail.com</p>
          <p><strong>Phone Number:</strong> (206) 799-1640</p>
          <p><strong>GitHub Profile:</strong> <a href="https://github.com/TommyWillen" className="text-dark">TommyWillen</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tommy-willen-12867b1b3/" className="text-dark">Tommy Willen</a></p>
          <p><strong>Resum&eacute;:</strong><a href="./assets/Tommy-Willen-Resume-2020.pdf" className="text-dark"> Tommy Willen's Resum&eacute;</a></p>

        </Card.Body>
      </Card>  
    )
}

export default ContactCard