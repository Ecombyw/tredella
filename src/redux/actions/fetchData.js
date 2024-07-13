import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REACT_BACKEND_PATH } from "../config";

export const fetchDataThunk = (name, api) => {
  return createAsyncThunk(name, async (params) => {
    const url = `${REACT_BACKEND_PATH}${api}${
      params?.id ? `/${params?.id}` : "?"
    }`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${234567890987654323456789098765434567890}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  });
};
const generateSlice = ({ name, fetchData }) => {
  const initialState = {
    data: [],
    total: 0,
    isLoading: false,
    isError: false,
  };

  const slice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.total = action.payload.total;
        state.isLoading = false;
        state.isError = false;
      });
      builder.addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    },
  });

  return slice.reducer;
};
export default generateSlice;
