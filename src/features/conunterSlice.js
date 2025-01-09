import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      if (!state[id]) {
        state[id] = { value: 0 };
      }
      state[id].value += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (!state[id]) {
        state[id] = { value: 0 };
      }
      state[id].value -= 1;
    },
    incrementByAmount: (state, action) => {
      const { id, amount } = action.payload;
      if (!state[id]) {
        state[id] = { value: 0 };
      }
      state[id].value += amount;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
