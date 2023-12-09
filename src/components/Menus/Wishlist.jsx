// import { Link, useLoaderData } from "react-router-dom";
// import Header from "../Home/Header";
// import toast from "react-hot-toast";
// import { useState } from "react";


// const Wishlist = () => {
//     const wishList = useLoaderData()
//     console.log(wishList);

//     const [updatedWishlist, setUpdatedWishlist] =useState(wishList);


//     const handleRemove = (_id) => {
//       console.log(_id);
//       const URL = `https://assesment-11-tourblog-server.vercel.app/wishlist/${_id}`;
//       fetch(URL, {
//         method: 'DELETE',
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
  
//           if (data.deletedCount >0) {
//             toast.success('Data deleted successfully');
//           }
//           const filteredData = updatedWishlist?.filter((item) => item._id !== _id);
//           setUpdatedWishlist(filteredData);
//         });
//     };


//     return (
//         <>
//          <Header/>
        
//         <div className='lg:grid lg:grid-cols-3 w-[1200px] mx-auto gap-10'>
           
//             {
//             updatedWishlist.map(list => <div  key={list._id}>

//              <div >
       
//              <div className="card w-96 bg-base-100 shadow-xl">
                
//   <figure className="px-10 pt-10">
//     <img src={list.image} alt="img" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{list.title}</h2>
//     <p>{list.description}</p>
//     <div className="card-actions justify-start">
//       <Link to={`/details/${list._id}`}>
//       <button className="btn btn-primary btn-sm">View Now</button>
//       </Link>
//       <button onClick={()=> handleRemove (list._id)} className="btn btn-sm btn-neutral">Remove</button>

//     </div>
//   </div>
// </div>
//              </div>
//             </div>
            
//             )
//             }
//         </div>
//         </>
//     );
// };

// export default Wishlist;

import {  useLoaderData } from "react-router-dom";
import Header from "../Home/Header";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const Wishlist = () => {
  const wishList = useLoaderData();
  console.log(wishList);

  const [updatedWishlist, setUpdatedWishlist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch the wishlist data when the component mounts
    fetchWishlistData();
  }, );

  const fetchWishlistData = () => {
    // Replace with your API endpoint to fetch the wishlist data
    fetch("https://assesment-11-tourblog-server.vercel.app/wishlist")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Filter the data to only include items that match the user's email
        const filteredData = data.filter((item) => item.userEmail === user?.email);
        setUpdatedWishlist(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching wishlist data:", error);
      });
  };

  const handleRemove = (_id) => {
    const URL = `https://assesment-11-tourblog-server.vercel.app/wishlist/${_id}`;
    fetch(URL, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('Data deleted successfully');
          // Remove the deleted item from the state
          const filteredData = updatedWishlist.filter((item) => item._id !== _id);
          setUpdatedWishlist(filteredData);
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <>
      <Header />

      <div className='lg:grid lg:grid-cols-3 w-[1200px] mx-auto gap-10'>
        {updatedWishlist.map((list) => (
          <div key={list._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={list.image} alt="img" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{list.title}</h2>
                <p>{list.description}</p>
                <div className="card-actions justify-start">
                  {/* <Link to={`/details/${list._id}`}>
                    <button className="btn btn-primary btn-sm">View Now</button>
                  </Link> */}
                  <button onClick={() => handleRemove(list._id)} className="btn btn-sm btn-neutral">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
