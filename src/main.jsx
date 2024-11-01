import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home } from "./Components/Home.jsx";
import NewsDetails from "./Components/NewsDetails.jsx";
import BlogPage from "./Components/BlogPost.jsx";
import AboutUs from "./Components/AboutUs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/newsDetails/:id",
            element: <NewsDetails />,
          },
        ],
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
