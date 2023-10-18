import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
