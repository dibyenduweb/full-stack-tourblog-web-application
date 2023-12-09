import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Home/Header";
import UserComments from "./UserComments";
import useAuth from "../../Hooks/useAuth";


const Details = () => {
  const user =useAuth();
  console.log(user);
   

    const {id} = useParams();
     console.log(id);
    const allData = useLoaderData();
  console.log(allData);

//  console.log(cart);
const tourDetails = allData.find(tours => tours._id === id);
console.log(tourDetails);
    return (
        <>
          
      <div >
        <Header/>
        <div className="card bg-base-100 shadow-xl">
  <figure><img className="w-[600px] rounded-lg" src={tourDetails.image} alt="Album"/></figure>
  <div className="card-body">
    
    <p className="ml-24 bg-amber-300 w-[270px] rounded-lg">Auter Name:{tourDetails.userName}</p>    
    <p className="mx-24 text-2xl">{tourDetails.description}</p>
    <p className="mx-24">{tourDetails.longdescription}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>

{<UserComments key={tourDetails._id} tourDetails={tourDetails} /> }
      </div>
      <Link to='/'>
    <button className="btn text-center btn-primary">go back to home</button>
    </Link>
        </>
    );
};

export default Details;