/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div className="lg:h-[500px] text-white  relative  lg:bg-cover text-center lg:py-44" style={{backgroundImage: 'url(https://dynamic.tourtravelworld.com/package-images/photo-big/dir_12/332226/185627.jpg)'}}>
        <h2 className="lg:text-6xl font-bold bg-red-800 lg:w-[700px] p-2 rounded-xl mx-auto">Travel without limits</h2>
        <p className="text-xl bg-red-800 lg:w-[300px] rounded-md mx-auto mt-6">Book your Fevrite places</p>
        <button className="btn btn-primary mt-6">Visit Now</button>
     
  </div>
    );
};

export default Banner;