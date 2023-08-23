import ThreeCanvas from "./components/Canvas";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="w-screen h-screen">
      <ThreeCanvas />
      <RouterProvider router={router} />
    </div>
  );
}
