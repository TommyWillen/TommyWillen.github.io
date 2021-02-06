{Projects.map(item => {
    console.log(item);
  <Card key={item.id}>
  <Card.Img variant="top" src={item.image} alt={item.altTag}/>
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