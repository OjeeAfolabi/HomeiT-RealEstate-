import ImageSlider from "./components/ImageSlider/ImageSlider";
import NavBar from "./components/NavBar/NavBar";
import {createBrowserRouter,Route } from "react-router-dom";
function App() {
  return (
    <div className="layout">
      <NavBar />
      <ImageSlider />
    </div>
  );
}  

export default App;
