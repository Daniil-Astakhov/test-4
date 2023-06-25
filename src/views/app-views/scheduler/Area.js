import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Table from "./items/Table";
import { useEffect, useRef } from "react";
import RoundTable from "./items/RoundTable";
import { useSelector, useDispatch } from "react-redux";
import style from "./Scheduler.module.css";
import HorizontalTable from "./items/HorizontalTable";
import Poof from "./items/Poof";
import {
  setTable,
  setNottable,
  setHorizontaltable,
  setPoof,
  setVerticalPoof,
  setWall,
  setVerticalWall,
  setBooked,
} from "store/slices/schedulerSlise";
import VerticalPoof from "./items/VerticalPoof";
import Wall from "./items/Wall";
import VerticalWall from "./items/VerticalWall";
import Booked from "./items/Booked";
const Area = ({ onSaveZone }) => {
  const dispatch = useDispatch();
  const {
    currentItem,
    table: tablePosition,
    nottable: notTablePosition,
    horizontaltable: horizontalTablePosition,
    poof: poofPosition,
    verticalpoof: verticalPoofPosition,
    wall: wallPosition,
    verticalwall: verticalwallPosition,
    booked: bookedPosition,
  } = useSelector((state) => state.scheduler);

  const areaRef = useRef(null);
  const saveZone = useRef(null);

  const [{ isOver }, dropRef] = useDrop({
    accept: [
      ItemTypes.TABLE,
      ItemTypes.NOTTABLE,
      ItemTypes.HORIZONTAL,
      ItemTypes.POOF,
      ItemTypes.VERTICALPOOF,
      ItemTypes.WALL,
      ItemTypes.VERTICALWALL,
      ItemTypes.BOOKED,
    ],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const areaRect = areaRef.current.getBoundingClientRect();
      const x = clamp(offset.x - 30 - areaRect.left, 0, areaRect.width);
      const y = clamp(offset.y - 50 - areaRect.top, 0, areaRect.height);
      const vue = true;
      const id = x - y;

      switch (item.type) {
        case ItemTypes.TABLE:
          dispatch(setTable({ x, y, vue, id }));
          break;
        case ItemTypes.NOTTABLE:
          dispatch(setNottable({ x, y, vue, id }));
          break;
        case ItemTypes.HORIZONTAL:
          dispatch(setHorizontaltable({ x, y, vue, id }));
          break;
        case ItemTypes.POOF:
          dispatch(setPoof({ x, y, vue, id }));
          break;
        case ItemTypes.VERTICALPOOF:
          dispatch(setVerticalPoof({ x, y, vue, id }));
          break;
        case ItemTypes.WALL:
          dispatch(setWall({ x, y, vue }));
          break;
        case ItemTypes.VERTICALWALL:
          dispatch(setVerticalWall({ x, y, vue, id }));
          break;
        case ItemTypes.BOOKED:
          dispatch(setBooked({ x, y, vue, id }));
          break;
        default:
          return;
      }
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  useEffect(() => {
    if (isOver) {
      switch (currentItem) {
        case "table":
          dispatch(setTable({ vue: false }));
          break;
        case "nottable":
          dispatch(setNottable({ vue: false }));
          break;
        case "horizontaltable":
          dispatch(setHorizontaltable({ vue: false }));
          break;
        case "poof":
          dispatch(setPoof({ vue: false }));
          break;
        case "verticalpoof":
          dispatch(setVerticalPoof({ vue: false }));
          break;
        case "wall":
          dispatch(setWall({ vue: false }));
          break;
        case "verticalwall":
          dispatch(setVerticalWall({ vue: false }));
          break;
        case "booked":
          dispatch(setBooked({ vue: false }));
          break;
        default:
          return;
      }
    }
  }, [isOver, dispatch, currentItem]);

  useEffect(() => {
    onSaveZone(saveZone.current);
  }, [saveZone, onSaveZone]);

  const clamp = (value, min, max) => {
    return Math.max(min, Math.min(value, max));
  };

  return (
    <div ref={saveZone} id={"area"}>
      <div className={style.headArea}>Карта заведения</div>
      <div
        className={style.area}
        ref={(node) => {
          dropRef(node);
          areaRef.current = node;
        }}
      >
        {tablePosition.vue && (
          <div
            style={{
              position: "absolute",
              left: tablePosition.x,
              top: tablePosition.y,
            }}
          >
            <Table />
          </div>
        )}

        {notTablePosition.vue && (
          <div
            style={{
              position: "absolute",
              left: notTablePosition.x,
              top: notTablePosition.y,
            }}
          >
            <RoundTable />
          </div>
        )}

        {horizontalTablePosition.vue && (
          <div
            style={{
              position: "absolute",
              left: horizontalTablePosition.x,
              top: horizontalTablePosition.y,
            }}
          >
            <HorizontalTable />
          </div>
        )}

        {poofPosition.vue && (
          <div
            style={{
              position: "absolute",
              left: poofPosition.x,
              top: poofPosition.y,
            }}
          >
            <Poof />
          </div>
        )}
        {verticalPoofPosition.vue && (
          <div
            style={{
              position: "absolute",
              left: verticalPoofPosition.x,
              top: verticalPoofPosition.y,
            }}
          >
            <VerticalPoof />
          </div>
        )}
        {wallPosition.vue && (
          <div
            style={{
              position: "absolute",
              left: wallPosition.x,
              top: wallPosition.y,
            }}
          >
            <Wall />
          </div>
        )}
        {verticalwallPosition.vue && (
          <div
            style={{
              position: "absolute",
              left: verticalwallPosition.x,
              top: verticalwallPosition.y,
            }}
          >
            <VerticalWall />
          </div>
        )}
        {bookedPosition.vue && (
          <div
            style={{
              position: "absolute",
              left: bookedPosition.x,
              top: bookedPosition.y,
            }}
          >
            <Booked />
          </div>
        )}
      </div>
    </div>
  );
};

export default Area;
