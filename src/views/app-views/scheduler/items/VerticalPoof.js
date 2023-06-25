import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Poof2Svg } from "assets/svg/icon";

const VerticalPoof = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.VERTICALPOOF },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("verticalpoof"));
  };
  return (
    <div
      data-type={"verticalpoof"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "40px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Poof2Svg />
    </div>
  );
};

export default VerticalPoof;
