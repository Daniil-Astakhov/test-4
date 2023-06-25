import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { useDispatch } from "react-redux";
import { addObject } from "store/slices/schedulerSlise";
import { Table3Svg } from "assets/svg/icon";

const HorizontalTable = () => {
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.HORIZONTAL },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const handleUp = () => {
    dispatch(addObject("horizontaltable"));
  };
  return (
    <div
      data-type={"horizontaltable"}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,

        width: "80px",
        height: "70px",
      }}
      onMouseDown={handleUp}
    >
      <Table3Svg />
    </div>
  );
};

export default HorizontalTable;
