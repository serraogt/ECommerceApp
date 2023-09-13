/*import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slicer";

function configureStore({
  reducer: {
    counter: counterReducer
  }
});
export default configureStore;
*/

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slicer";

// Define the reducer object
const rootReducer = {
  counter: counterReducer
};

// Create the Redux store with the rootReducer
const store = configureStore({
  reducer: rootReducer
});

export default store;
