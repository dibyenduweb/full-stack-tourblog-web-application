import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Header from "./Header";
import Banner from "./HomeSections/Banner";
import RecentBlog from "./HomeSections/RecentBlog";
import NewsLetter from "./HomeSections/NewsLetter";
import GetAboutUs from "./HomeSections/GetAboutUs";
import Pakages from "./HomeSections/Pakages";

const Home = () => {
    //recent blog data fetch
    const tourdata =useLoaderData();
    console.log(tourdata);
    const latestTours = tourdata.slice(0, 6);
    console.log(latestTours);

    return (
        <>
        <Header/>
       <Banner/>
       

  
       <div>
       <h1 className="bg-sky-500 text-cyan-50 w-56 mx-auto rounded-md mt-4 text-4xl font-bold text-center my-4">Rcent post</h1>
       <div className="lg:grid lg:grid-cols-3 gap-6 lg:px-36">
            
            {
                latestTours.map(tour => <RecentBlog key={tour._id} tour={tour}></RecentBlog>)
            }
            </div>
       </div>
       <GetAboutUs/>
   <Pakages/>
      
       <NewsLetter/>
     


       <Footer/>
            </>
       
    );
};

export default Home;