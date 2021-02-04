import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function SideBar(props) {
  return (
    <aside className="px-3 bg-dark side sticky" style={{marginTop: "55px", width: "17.2%"}}>
    <Accordion defaultActiveKey="0" >
      {props.children}
    </Accordion>
    </aside>
  );
}

export default SideBar;
