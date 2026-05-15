import ImageSlider from "./components/ImageSlider/ImageSlider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listing from "./routes/Listing/Listing";
import SinglePage from "./routes/SinglePage/SinglePage";
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
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
