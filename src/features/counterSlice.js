import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const incrementAsync = createAsyncThunk();

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    

  },
});

export const {} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
