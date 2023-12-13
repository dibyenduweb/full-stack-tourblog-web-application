/* eslint-disable no-unused-vars */

// import React, { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';
// import { Link, useLoaderData } from 'react-router-dom';
// import Header from '../Home/Header';
// import useAuth from '../../Hooks/useAuth';
// import { AiFillLike } from "react-icons/ai";
// import { FaShareAlt } from "react-icons/fa";


// const AllBlogs = () => {
//   const blogView = useLoaderData();
//   console.log(blogView);
//   const [updatedProduct, setUpdateProduct] = useState(blogView);

//   const { _id, title, image,description,longdescription, category } = blogView;

//   const { user } = useAuth();

//   const userEmail = user.email
//   console.log(userEmail);
//   const blogsData={
//     image,
//     title,
//     description,
//     longdescription,
//     category,
//     userEmail
//   }
// console.log(blogsData);
//   const [categoryFilter, setCategoryFilter] = useState(''); // State for filtering by category
//   const [searchQuery, setSearchQuery] = useState(''); // State for searching by title

//   useEffect(() => {
//     // Filter blogs based on category and search query
//     const filteredData = blogView.filter((item) => {
//       const matchesCategory =
//         !categoryFilter || item.category === categoryFilter;
//       const matchesSearchQuery =
//         item.title.toLowerCase().includes(searchQuery.toLowerCase());

//       return matchesCategory && matchesSearchQuery;
//     });

//     setUpdateProduct(filteredData);
//   }, [categoryFilter, searchQuery, blogView]);

//     const handleDelete = (_id) => {
//     console.log(_id);
//     const URL = `https://assesment-11-tourblog-server.vercel.app/blog/${_id}`;
//     fetch(URL, {
//       method: 'DELETE',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.deletedCount > 0) {
//           toast.success('Data deleted successfully');
//         }
//         const filteredData = updatedProduct?.filter((item) => item._id !== _id);
//         setUpdateProduct(filteredData);
//       });
//   };

//   const handleAddToWishlist = (cartItem) => {
//     console.log(cartItem);
//     console.log(blogsData);
//     const {title, image,description,longdescription, category}=cartItem;
//     fetch('https://assesment-11-tourblog-server.vercel.app/wishlist', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//        title, image,description,longdescription, category ,userEmail
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         toast.success('Your Blog added to Wishlist');
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error('Failed to add to Wishlist');
//       });
//   };


//   return (
//     <div>
//       <Header />
      
//       <div className='my-6 ml-20'>
//         <label>Filter by Category:</label>
//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="select border bg-red-500"
//         >
//           <option value="">All</option>
//               <option value="Historical">Historical</option>
//               <option value="Wildlife">Wildlife</option>
//               <option value="Adventure">Adventure</option>
//               <option value="Cultural">Cultural</option>
//               <option value="Nature">Nature</option>
//               <option value="Beach">Beach</option>
         
//         </select>
//       </div>

//       <div className='my-6 lg:ml-96'>
//         <label>Search by Title:</label>
//         <input
//         className="input input-bordered input-primary w-full max-w-xs"
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className='btn btn-accent'> Search</button>
//       </div>

//       <div className="lg:grid grid-cols-3 gap-6 px-44">
//         {updatedProduct.map((view) => (
//           <div key={view._id}>
//             <div className="w-96">
//               <div className="card card-compact w-80 bg-base-100 shadow-xl">
//                 <figure>
//                   <img src={view.image} alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//              <div className='lg: flex'>
//              <AiFillLike className='text-3xl text-red-600'/>
//              <h1 className='ml-2 py-2 text-red-500'>0</h1>
//              <FaShareAlt className='ml-6 mt-2 text-xl'/>

//              </div>
                
//                   <h2 className="card-title">{view.title}</h2>
//                   <p>{view.description}</p>
//                   <p>{view.category}</p>
//                   <div className="card-actions justify-center">
//                     <Link to={`/details/${view._id}`}>
//                       <button className="btn btn-sm btn-primary">Details</button>
//                     </Link>
//                     <button
//                       onClick={() => handleAddToWishlist(view)}
//                       className="btn btn-sm btn-secondary"
//                     >
//                       Wishlist
//                     </button>
//                     {userEmail === view.userEmail && (
//                       <>
//                         <button
//                           type="submit"
//                           className="btn btn-neutral"
//                           onClick={() => handleDelete(view._id)}
//                         >
//                           Delete
//                         </button>
//                         <Link to={`/update/${view._id}`}>
//                           <button type="submit" className="btn btn-accent">
//                             Update
//                           </button>
//                         </Link>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default AllBlogs;


import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Home/Header';
import useAuth from '../../Hooks/useAuth';
import { FaShareAlt, FaThumbsUp } from 'react-icons/fa';

const AllBlogs = () => {
  const blogView = useLoaderData();
  const [updatedProduct, setUpdateProduct] = useState(blogView);
  const { user } = useAuth();
  const userEmail = user.email;

  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filteredData = blogView.map((item) => {
      const matchesCategory = !categoryFilter || item.category === categoryFilter;
      const matchesSearchQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());

      return {
        ...item,
        matchesCategory,
        matchesSearchQuery,
      };
    });

    setUpdateProduct(filteredData);
  }, [categoryFilter, searchQuery, blogView]);

  const handleDelete = (_id) => {
    const URL = `https://assesment-11-tourblog-server.vercel.app/blog/${_id}`;
    fetch(URL, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('Data deleted successfully');
        }
        const filteredData = updatedProduct?.filter((item) => item._id !== _id);
        setUpdateProduct(filteredData);
      });
  };

  const handleAddToWishlist = (cartItem) => {
    const { title, image, description, longdescription, category } = cartItem;
    fetch('https://assesment-11-tourblog-server.vercel.app/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        image,
        description,
        longdescription,
        category,
        userEmail,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('Your Blog added to Wishlist');
      })
      .catch(() => {
        toast.error('Failed to add to Wishlist');
      });
  };

  const handleShare = async (title, description) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: description,
        });
        toast.success('Content shared!');
      } else {
        navigator.clipboard.writeText(`${title} - ${description}`);
        toast.success('Content copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing content:', error);
      toast.error('Failed to share content');
    }
  };

  return (
    <div>
      <Header />
      <div className='my-6 ml-20'>
        <label>Filter by Category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className='select border bg-red-500'
        >
          <option value=''>All</option>
          <option value='Historical'>Historical</option>
          <option value='Wildlife'>Wildlife</option>
          <option value='Adventure'>Adventure</option>
          <option value='Cultural'>Cultural</option>
          <option value='Nature'>Nature</option>
          <option value='Beach'>Beach</option>
        </select>
      </div>

      <div className='my-6 lg:ml-96'>
        <label>Search by Title:</label>
        <input
          className='input input-bordered input-primary w-full max-w-xs'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='btn btn-accent'> Search</button>
      </div>

      <div className='lg:grid grid-cols-3 gap-6 px-44'>
        {updatedProduct.map((view) => (
          <div key={view._id}>
            <div className='w-96'>
              <div className='card card-compact w-80 bg-base-100 shadow-xl'>
                <figure>
                  <img src={view.image} alt='Shoes' />
                </figure>
                <div className='card-body'>
                  <div className='lg: flex'>
                    <button
                      onClick={() => handleShare(view.title, view.description)}
                      className='ml-6 mt-2 text-xl'
                    >
                      <FaShareAlt />
                    </button>
                    {/* Remove the like button */}
                  </div>
                  <h2 className='card-title'>{view.title}</h2>
                  <p>{view.description}</p>
                  <p>{view.category}</p>
                  {/* Remove the display of Likes */}
                  <div className='card-actions justify-center'>
                    <Link to={`/details/${view._id}`}>
                      <button className='btn btn-sm btn-primary'>Details</button>
                    </Link>
                    <button
                      onClick={() => handleAddToWishlist(view)}
                      className='btn btn-sm btn-secondary'
                    >
                      Wishlist
                    </button>
                    {userEmail === view.userEmail && (
                      <>
                        <button
                          type='submit'
                          className='btn btn-neutral'
                          onClick={() => handleDelete(view._id)}
                        >
                          Delete
                        </button>
                        <Link to={`/update/${view._id}`}>
                          <button type='submit' className='btn btn-accent'>
                            Update
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
