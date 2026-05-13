import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./layout.scss";
const Layout = () => {
  return (
    <div className="layout">
        <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
