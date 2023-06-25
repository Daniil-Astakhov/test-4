import { useSelector, useDispatch } from "react-redux";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

import { delAll, updateState } from "store/slices/schedulerSlise";
import styles from "./Scheduler.module.css";
import { useRef } from "react";

const Buttons = ({ saveZone }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.scheduler);
  const fileInput = useRef(null);

  const handleDel = () => {
    dispatch(delAll());
  };

  const handleSaveClick = () => {
    const areaElement = saveZone.current;
    html2canvas(areaElement).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "image.png");
      });
    });

    const stateString = JSON.stringify(state);
    const blob = new Blob([stateString], { type: "application/json" });
    saveAs(blob, "state.json");
  };
  const handleLoadChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const newState = JSON.parse(contents);
        dispatch(updateState(newState));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className={styles.buttons}>
      <button onClick={handleSaveClick} className={styles.save}>
        Сохранить
      </button>
      <button onClick={handleDel} className={styles.del}>
        Удалить все
      </button>
      <label htmlFor="fileInput" className={styles.loadButton}>
        Загрузить план
      </label>
      <input
        id="fileInput"
        ref={fileInput}
        type="file"
        accept=".json"
        onChange={handleLoadChange}
        className={styles.load}
      />
    </div>
  );
};

export default Buttons;
