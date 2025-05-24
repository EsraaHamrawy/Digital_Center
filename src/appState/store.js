import { configureStore } from "@reduxjs/toolkit";
import corrsSlice from "./slices/corrsSlice";
import purchaseSlice from "./slices/purchaseSlice";

const store = configureStore({
  reducer: {
    corrs: corrsSlice,
    purchase: purchaseSlice,
  },
});

export default store;
