import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: null,
    selectedChannelId: "",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = state = null ? true : !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    disibleMenu: (state) => {
      state.isMenuOpen = null;
    },
    updateChannelId: (state, action) => {
      state.selectedChannelId = action.payload;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  disibleMenu,
  updateChannelId,
  updateSubscriberCount,
} = appSlice.actions;
export default appSlice.reducer;
