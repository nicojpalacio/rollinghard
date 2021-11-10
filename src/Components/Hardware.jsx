import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Hardware(props) {
  return (
    <div key={props.key}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.hardware.imagen} />
        <Card.Body>
          <Card.Title>{props.hardware.titulo}</Card.Title>
          <Card.Text>
            {props.hardware.description}
          </Card.Text>
          <Button variant="Secondary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
