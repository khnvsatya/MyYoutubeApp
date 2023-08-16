import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(20, 1);
      //   state.messages.unshift(action.payload);
      state.messages = [action.payload, ...state.messages];
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
