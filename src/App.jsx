import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./assets/pages/home";
import ProductPage from "./assets/pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/about", element: <h1>ABOUT</h1> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
