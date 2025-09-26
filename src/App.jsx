import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./assets/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <h1>PRODUCT</h1> },
      { path: "/about", element: <h1>ABOUT</h1> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
