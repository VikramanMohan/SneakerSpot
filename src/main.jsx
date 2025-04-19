import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";


createRoot(document.getElementById("root")).render(
   <RouterProvider router={router}>
    <App />
   </RouterProvider>
)