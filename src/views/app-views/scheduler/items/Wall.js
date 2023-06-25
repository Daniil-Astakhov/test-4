import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Wall1Svg } from "assets/svg/icon";

const Wall = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.WALL },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("wall"));
  };
  return (
    <div
      data-type={"wall"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "50px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Wall1Svg />
    </div>
  );
};

export default Wall;
