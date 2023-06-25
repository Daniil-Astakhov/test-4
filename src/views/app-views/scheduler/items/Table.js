import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Table2Svg } from "assets/svg/icon";

const Table = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.TABLE },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("table"));
  };
  return (
    <div
      data-type={"table"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "50px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Table2Svg />
    </div>
  );
};

export default Table;
