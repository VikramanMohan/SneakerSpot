import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; 
import { RouterProvider } from "react-router-dom";

import App from "./App";
import router from "./routes/Routes";
import { store } from "./redux/slices/store"; 

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Wrap Redux provider around everything */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
