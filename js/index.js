import { createRoot } from "react-dom/client";
import Header from "./header";
import CV from "./cv";
import Home from "./home";
import Projects from "./projects";
import Publications from "./publications";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cv",
        element: <CV />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "publications",
        element: <Publications />,
      },
    ],
  },
]);

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<RouterProvider router={router} />);