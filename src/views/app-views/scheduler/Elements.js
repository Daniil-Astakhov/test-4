import styles from "./Scheduler.module.css";
import Booked from "./items/Booked";
import HorizontalTable from "./items/HorizontalTable";
import Poof from "./items/Poof";
import RoundTable from "./items/RoundTable";
import Table from "./items/Table";
import VerticalPoof from "./items/VerticalPoof";
import VerticalWall from "./items/VerticalWall";
import Wall from "./items/Wall";

const Elements = () => {
  return (
    <div className={styles.elements}>
      <Table />
      <RoundTable />
      <HorizontalTable />
      <Poof />
      <VerticalPoof />
      <Wall />
      <VerticalWall />
      <Booked />
    </div>
  );
};

export default Elements;
