import ImageSlider from "./components/ImageSlider/ImageSlider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listing from "./routes/Listing/Listing";
import Layout from "./layout/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ImageSlider />,
        },
        {
          path: "/listing",
          element: <Listing />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
