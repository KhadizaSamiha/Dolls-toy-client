import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Main = () => {
    return (
        <div className="lg:max-w-[1100px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;