import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
           <Outlet></Outlet>
           <Toaster   position="top-right"
  reverseOrder={false}/>
        </div>
    );
};

export default Root;