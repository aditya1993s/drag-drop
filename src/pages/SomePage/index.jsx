import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDrop } from "react-dnd";
import StepComponent from "../../components/StepComponent";

const PictureList = [
  {
    id: 1,
    name: "item001",
  },
  {
    id: 2,
    name: "item002",
  },
  {
    id: 3,
    name: "item003",
  },
  {
    id: 4,
    name: "item004",
  },
  {
    id: 5,
    name: "item005",
  },
  {
    id: 6,
    name: "item006",
  },
];

const SomePage = () => {
  const [board, setBoard] = useState([]);
  const [res, setRes] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  const handleClick = () => {
    setRes(board);
  };
  return (
    <div>
      <Button variant="success" onClick={handleClick}>
        Run
      </Button>
      <Container>
        <Row className="justify-content-md-center">
          <Col
            md="auto"
            style={{
              width: "300px",
              height: "500px",
              border: "2px solid black",
              marginRight: "30px",
              padding: "5px",
              borderRadius: "15px",
            }}
          >
            {PictureList.map((picture) => {
              return (
                <StepComponent
                  key={picture.id}
                  name={picture.name}
                  id={picture.id}
                />
              );
            })}
          </Col>

          <Col
            md="auto"
            style={{
              width: "300px",
              height: "500px",
              border: "2px solid black",
              marginRight: "30px",
              padding: "5px",
              borderRadius: "15px",
            }}
            ref={drop}
          >
            {board.map((picture) => {
              return (
                <StepComponent
                  name={picture.name}
                  key={picture.id}
                  id={picture.id}
                />
              );
            })}
          </Col>
          <Col
            md="auto"
            style={{
              width: "300px",
              height: "500px",
              border: "2px solid black",
              marginRight: "30px",
              padding: "5px",
            }}
          >
            {res.map((item) => {
              return (
                <p style={{ border: "1px solid black" }}>Running-{item.name}</p>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SomePage;
