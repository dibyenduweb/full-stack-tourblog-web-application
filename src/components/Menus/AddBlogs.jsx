/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../Home/Header';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';

const AddBlogs = () => {
  const { user} = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    longdescription: '',
    category: '',
  });

  const handleAddBlog = async (e) => {
    e.preventDefault();

    const addData = {
      title: formData.title,
      image: formData.image,
      description: formData.description,
      longdescription: formData.longdescription,
      category: formData.category,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL
    };

    try {
      const response = await fetch('https://assesment-11-tourblog-server.vercel.app/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addData),
      });

      const data = await response.json();
      console.log(data);

      if (data.acknowledged) {
        toast.success("Blog added successfully");
        
        // Reset the form fields
        setFormData({
          title: '',
          image: '',
          description: '',
          longdescription: '',
          category: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleAddBlog} className="flex flex-col items-center">
        <h1 className="text-center mt-4 text-4xl">Add Blogs</h1>
        <div className="mt-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type your title"
              className="input input-bordered w-full max-w-xs"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Type your image URL"
              className="input input-bordered w-full max-w-xs"
              value={formData.image}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Type your description"
              className="input input-bordered w-full max-w-xs"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Long Description</span>
            </label>
            <input
              type="text"
              name="longdescription"
              placeholder="Type your description"
              className="input input-bordered w-full max-w-xs"
              value={formData.longdescription}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full max-w-xs"
              value={formData.category}
              onChange={handleInputChange}
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
              Add a New Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;


  
  
  
  
  
  