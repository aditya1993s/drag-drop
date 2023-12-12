import React from "react";
import { Card } from "react-bootstrap";
import { useDrag } from "react-dnd";

const StepComponent = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      <Card
        ref={drag}
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
        body
      >
        {props.name}
      </Card>
    </div>
  );
};

export default StepComponent;
