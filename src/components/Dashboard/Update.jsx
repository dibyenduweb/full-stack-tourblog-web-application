/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // /* eslint-disable no-unused-vars */
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Header from '../Home/Header';

const Update = () => {
    const updatedData = useLoaderData()
    console.log(updatedData);

    const handleUpdate =(e)=>{
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const longdescription = form.longdescription.value;
        const category = form.category.value;
  

        //console.log(image, title, description, longdescription, category );
        const updateData ={
            image, 
            title, 
            description, 
            longdescription, 
            category,
        };
        console.log(updateData);

        fetch(`https://assesment-11-tourblog-server.vercel.app/blog/${updatedData._id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(updateData),
        })
        .then((res) =>res.json())
        .then((data) =>{
        console.log(data);
        if(data.acknowledged){
          toast.success("data Updated succsesfully")
        }
        });

    }
    return (
        <div>
        <Header />
        <form onSubmit={handleUpdate} className="flex flex-col items-center">
          <h1 className="text-center mt-4 text-4xl">Update Blogs</h1>
          <div className="mt-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full max-w-xs"
                defaultValue={updatedData.title}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                className="input input-bordered w-full max-w-xs"
                defaultValue={updatedData.image}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="description"
                className="input input-bordered w-full max-w-xs"
                defaultValue={updatedData.description}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <input
                type="text"
                name="longdescription"
                className="input input-bordered w-full max-w-xs"
                defaultValue={updatedData.longdescription}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
              name="category"
              className="select select-bordered w-full max-w-xs"
              value={updatedData.category}
            >
              <option value="Historical">Historical</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Adventure">Adventure</option>
              <option value="Cultural">Cultural</option>
              <option value="Nature">Nature</option>
              <option value="Beach">Beach</option>
              {/* Add more categories as needed */}
            </select>
              <button type="submit" className="mt-4 btn btn-neutral">
               Updated Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Update;

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Update = () => {
//   const updateBlogData = useLoaderData();
//   console.log(updateBlogData);

//   return (
//     <div>
//       <h1>Update:</h1>
//     </div>
//   );
// };

// export default Update;