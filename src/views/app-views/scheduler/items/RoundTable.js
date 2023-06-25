import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Table1Svg } from "assets/svg/icon";

const RoundTable = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.NOTTABLE },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("nottable"));
  };
  return (
    <div
      data-type={"nottable"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,

        width: "50px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Table1Svg />
    </div>
  );
};

export default RoundTable;
