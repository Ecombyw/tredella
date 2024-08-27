
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_BACKEND_PATH } from "../config";

export const fetchAsyncThunkData = (name, api) => {
    return createAsyncThunk(name, async (params) => {
        const url = `${REACT_BACKEND_PATH}${api}${params?.id ? `/${params?.id}` : ""
            }`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${null}`, // Replace with actual token
            },
        });
        if (!response.ok) {
            throw new Error("Network response is not ok");
        }
        const data = await response.json();
        return data;
    });
};