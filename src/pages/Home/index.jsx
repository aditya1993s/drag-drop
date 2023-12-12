import React from "react";
import SomePage from "../SomePage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <SomePage />
      </div>
    </DndProvider>
  );
};

export default Home;
