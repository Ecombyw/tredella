import { createSlice } from "@reduxjs/toolkit";

export const generateReducer = (name, key) => {
  const slice = createSlice({
    name,
    initialState: { [key]: null },
    reducers: {
      setData: (state, action) => {
        state[key] = action.payload;
      },
    },
  });
  return { reducer: slice.reducer, actions: slice.actions };
};

export const getReducer = (name) => {
  const myReducer = generateReducer(name);
  const { setData } = myReducer.actions;
  return setData;
};
