import React from "react";
import Card from "react-bootstrap/Card";

function AboutMain() {
  return (
    <Card className="border-0 rounded-0 py-2 card-bg col-md-8">
      <Card.Body>
        <h1>About Me</h1>
        <hr />
        <h2 id="from">Who I Am</h2>
        <p>
          I am a flood of inspiration and creativity looking to break past the
          barriers placed by my soon-to-be former profession and utilize my
          newly acquired coding skills to enter the world of web development.
          Born in the quiet and cozy neighborhood of Fairwood in Renton, WA, and
          currently reside in Bothell, WA with my wife and son.
        </p>
        
        <h2 id="from">Education</h2>
        <p>
          <strong>University of Washington:</strong> Full-Stack Web Development
          Certificate
        </p>
        <p>
          <strong>Seattle Pacific University:</strong> Master of Art in Teaching
        </p>
        <p>
          <strong>Washington State University:</strong> Bachelors of Science in
          Biology
        </p>
        <h2 id="from">Why I Code</h2>
        <p>In this profession I truly see a pathway to break free from the rut of my old profession into a new one filled with possibility. I became a web developer because it will allows me to unleash my creative instincts where my only limits are what I can imagine. This journey has its struggles, but I welcome them with open arms and a grinning face. Already in this journey I have found great joy in the challenge of making my code work and am excited at the chance to do this as a profession. As you peruse my portfolio I hope you see the time, passion, and painstaking effort spent towards each line of code.</p>
      </Card.Body>
    </Card>
  );
}

export default AboutMain;
