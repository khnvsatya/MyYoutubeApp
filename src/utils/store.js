// import { configureStore } from "@reduxjs/toolkit";
// import appSlice from "./appSlice";

// const store = configureStore({
//   reducer: {
//     app: appSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default store;
