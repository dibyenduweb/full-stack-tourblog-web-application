/* eslint-disable no-unused-vars */
// // /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Coments = () => {
    const [comments, setComments] = useState([]);



    useEffect(() => {
        fetch('https://assesment-11-tourblog-server.vercel.app/comment')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setComments(data)         // Update the comments state
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      
    return (
        <div>
        {
        comments.map((commentData) => (
  <div key={commentData._id}>
    {/* Your comment rendering code here */}
    <div  className='flex items-center' >
        <div >
            <img className='w-14 rounded-full' src={commentData.userPhoto} alt="" />
        </div>
       <h1 className='text-xl text-white'>{commentData.userName}</h1>
    </div>
    <h1 className='ml-14 text-white'>{commentData.comment}</h1>

  </div>
))}

        </div>
    );
};

export default Coments;

