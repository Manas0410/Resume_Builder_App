import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePageComponents/HomePage";
import TemplateP from "./TemplateComponents/TemplateP";
import CreateResumeP from "./CreateResumeComps/CreateResumeP";
import { Provider } from "react-redux";
import { store } from "./ReduxSetUp/store";
// import Test from "./ReduxSetUp/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/templates",
    element: <TemplateP />,
  },
  {
    path: "/create",
    element: <CreateResumeP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
{
  /* <script>
      // Add this polyfill at the top of your script file
      if (typeof global === "undefined") {
        global = window;
      }
    </script> */
}
