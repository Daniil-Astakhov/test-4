import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Poof1Svg } from "assets/svg/icon";

const Poof = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.POOF },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("poof"));
  };
  return (
    <div
      data-type={"poof"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,

        width: "80px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Poof1Svg />
    </div>
  );
};

export default Poof;
