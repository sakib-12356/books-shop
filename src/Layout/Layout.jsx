import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
           <div class="container mx-auto px-4">

            <Navbar/>
            <Outlet/>
            <Footer/>
            </div>
        </div>
    );
};

export default Layout;