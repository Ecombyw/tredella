import { createSlice } from "@reduxjs/toolkit";

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