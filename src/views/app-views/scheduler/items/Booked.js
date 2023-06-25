import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { BookedSvg } from "assets/svg/icon";

const Booked = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.BOOKED },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("booked"));
  };
  return (
    <div
      data-type={"booked"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "30px",
        height: "50px",
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
      }}
      onMouseDown={handleUp}
    >
      <BookedSvg />
    </div>
  );
};

export default Booked;
