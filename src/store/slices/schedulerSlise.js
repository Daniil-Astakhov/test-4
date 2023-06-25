import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentItem: "",
  table: {
    x: 0,
    y: 0,
    vue: false,
  },
  nottable: {
    x: 0,
    y: 0,
    vue: false,
  },

  horizontaltable: {
    x: 0,
    y: 0,
    vue: false,
  },
  poof: {
    x: 0,
    y: 0,
    vue: false,
  },
  verticalpoof: {
    x: 0,
    y: 0,
    vue: false,
  },
  wall: {
    x: 0,
    y: 0,
    vue: false,
  },
  verticalwall: {
    x: 0,
    y: 0,
    vue: false,
  },
  booked: {
    x: 0,
    y: 0,
    vue: false,
  },
  areaRef: "null",
};

const objectsSlice = createSlice({
  name: "objects",
  initialState,
  reducers: {
    addObject: (state, action) => {
      state.currentItem = action.payload;
    },
    setTable: (state, action) => {
      state.table = action.payload;
    },
    setNottable: (state, action) => {
      state.nottable = action.payload;
    },
    setHorizontaltable: (state, action) => {
      state.horizontaltable = action.payload;
    },
    setPoof: (state, action) => {
      state.poof = action.payload;
    },
    setVerticalPoof: (state, action) => {
      state.verticalpoof = action.payload;
    },
    setWall: (state, action) => {
      state.wall = action.payload;
    },
    setVerticalWall: (state, action) => {
      state.verticalwall = action.payload;
    },
    setBooked: (state, action) => {
      state.booked = action.payload;
    },
    delAll: (state) => {
      Object.keys(state).forEach((key) => {
        if (typeof state[key] === "object" && key !== "areaRef") {
          state[key].vue = false;
        }
      });
    },
    setAreaRef: (state, action) => {
      state.areaRef = action.payload;
    },
    updateState: (state, action) => {
      const newState = action.payload;
      Object.assign(state, newState);
    },
  },
});

export const {
  addObject,
  setTable,
  setNottable,
  setHorizontaltable,
  setPoof,
  setVerticalPoof,
  setWall,
  setVerticalWall,
  delAll,
  setAreaRef,
  updateState,
  setBooked,
} = objectsSlice.actions;

export default objectsSlice.reducer;
