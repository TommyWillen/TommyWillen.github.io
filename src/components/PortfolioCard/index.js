import React from "react";
import CardColumns from "react-bootstrap/CardColumns"
import Card from "react-bootstrap/Card"
import Projects from "../../project"

function PortfolioCard() {
    return (
<CardColumns className="mt-3">
  {Projects.map(item => {
return (<Card key={item.id}>
    <Card.Img variant="top" src={item.image} alt={item.altTag} id={"proj" + item.id}/>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.body}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><a href={item.gitHub}>Github Repo</a></small>
      <br></br>
      <small className="text-muted"><a href={item.deployed}></a>Deployed Site</small>
    </Card.Footer>
  </Card>)
  })}
  
  
</CardColumns>
    )
}

export default PortfolioCard