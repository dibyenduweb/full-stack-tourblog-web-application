/* eslint-disable react/prop-types */

import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const RecentBlog = ({ tour }) => {
  const [updatedBlogs, setUpdateBlogs] = useState(tour);
  console.log(tour);
  // eslint-disable-next-line no-unused-vars
  const { _id, title, image,description,longdescription, category } = tour;
  const { user} = useAuth();
console.log(user);

const userEmail =  user?.email
console.log(userEmail);

  const cartData = {
    image,
    title,
    description,
    longdescription,
    category,
    userEmail
  };

  const handleAddToWishlist = () => {
    fetch("https://assesment-11-tourblog-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Your Blogs added to Wishlist'); 
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to add to Wishlist');
      });
  };

  console.log(cartData);

//delete features


const handleDelete = (_id) => {
  console.log(_id);
  const URL = `https://assesment-11-tourblog-server.vercel.app/blog/${_id}`;
  fetch(URL, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.deletedCount > 0) {
        toast.success('Data deleted successfully');
      }
      const filterBlog = updatedBlogs?.filter(item => item._id !== _id);
      setUpdateBlogs(filterBlog);
    });
};

console.log(updatedBlogs);

  return (
    <>
      <div  className="lg:grid grid-cols-3 gap-6">
      <div className="card card-compact w-80 gap-6 bg-base-100 shadow-xl">
        <figure>
          <img src={updatedBlogs.image} alt="images" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{updatedBlogs.title}</h2>
          <p>{updatedBlogs.description}</p>
          <p className="text-xl">{updatedBlogs.category}</p>
          <p>Post Date:-{updatedBlogs.createdAt.date},Time:-{updatedBlogs.createdAt.time}</p>
          <span></span>
          <div className="card-actions justify-center">
            <Link to={`/details/${updatedBlogs._id}`}>
              <button className="btn btn-sm btn-primary">Details</button>
            </Link>
            <button onClick={handleAddToWishlist} className="btn btn-sm btn-secondary">Wishlist</button>
          </div>
        </div>  
       <div className="flex ml-20 gap-4">
       {userEmail === updatedBlogs.userEmail && (
                      <>
                        <button
                          type='submit'
                          className='btn btn-neutral'
                          onClick={() => handleDelete(updatedBlogs._id)}
                        >
                          Delete
                        </button>
                        <Link to={`/update/${updatedBlogs._id}`}>
                          <button type='submit' className='btn btn-accent'>
                            Update
                          </button>
                        </Link>
                      </>
                    )}
       </div>
      </div>
      </div>
     
    </>
  );
};

export default RecentBlog;
