import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Wall2Svg } from "assets/svg/icon";

const VerticalWall = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.VERTICALWALL },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("verticalwall"));
  };
  return (
    <div
      data-type={"verticalwall"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "50px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Wall2Svg />
    </div>
  );
};

export default VerticalWall;
