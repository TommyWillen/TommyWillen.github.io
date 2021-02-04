import React from "react";
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Projects from "../../project.json"

function PortfolioCard() {
    return (
<CardDeck>
  {Projects.map(item => {
    <Card key={item.id}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><a href={item.gitHub}>Github Repo</a></small>
      <small className="text-muted"><a href={item.deployed}></a>Deployed Site</small>
    </Card.Footer>
  </Card>
  })}
  
  
</CardDeck>
    )
}

export default PortfolioCard