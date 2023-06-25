import styles from "./Scheduler.module.css";
import Elements from "./Elements";
import React, { useRef } from "react";
import Area from "./Area";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Params from "./Params";
import Buttons from "./Buttons";

const Board = () => {
  const saveZone = useRef(null);

  const handleSaveZone = (zone) => {
    saveZone.current = zone;
  };

  return (
    <div className={styles.dropboard}>
      <DndProvider backend={HTML5Backend}>
        <div>
          <Elements />
          <Params />
          <Buttons saveZone={saveZone} />
        </div>
        <Area onSaveZone={handleSaveZone} />
      </DndProvider>
    </div>
  );
};

export default Board;
