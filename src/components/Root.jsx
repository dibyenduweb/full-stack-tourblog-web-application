import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div>
           <Outlet></Outlet>
           <Toaster   position="top-right"
  reverseOrder={false}/>
        </div>
    );
};

export default Root;