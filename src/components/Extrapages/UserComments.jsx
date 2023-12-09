/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import useAuth from '../../Hooks/useAuth';  
// import Coments from './Coments';

// const UserComments = () => {
//   const { user } = useAuth();
//   const [comment, setComment] = useState('');


//   const handlePostComments = (e) => {
//     e.preventDefault();

//     const addComment = {
//       comment: comment,
//       userEmail: user.email,
//       userName: user.displayName,
//       userPhoto: user.photoURL,
//     };

//     fetch("https://assesment-11-tourblog-server.vercel.app/comment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(addComment),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   useEffect(() => {
//     fetch('https://assesment-11-tourblog-server.vercel.app/comment')
//       .then((res) => res.json())
//       .then((data) => {
//         const { _id, title, image } = data;
//         console.log(title);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
  


//   return (
//     <div>
//       <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
//         <div className="max-w-2xl mx-auto px-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Post your Comments</h2>
//           </div>
//           <form className="mb-6" onSubmit={handlePostComments}>
//             <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//               <label htmlFor="comment" className="sr-only">Your comment</label>
//               <textarea
//                 id="comment"
//                 rows="6"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
//                 placeholder="Write a comment..."
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="btn btn-accent btn-sm"
//             >
//               Post comment
//             </button>
//           </form>
//           <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
//             {/* Display comments here */}
//           <Coments></Coments>
//           </article>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UserComments;

import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';  
import Coments from './Coments';
import toast from 'react-hot-toast';

const UserComments = ({tourDetails}) => {
  console.log(tourDetails);

  const  {
    _id,
    image,
    title,
    description,
    longdescription,
    category,
    userEmail
  }
  = tourDetails

  console.log(tourDetails);
  
  
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [isCommentButtonDisabled, setCommentButtonDisabled] = useState(false);



  console.log(user);


  const handlePostComments = (e) => {
    e.preventDefault();

    const addComment = {
      comment: comment,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
        
    };
  
    
    fetch("https://assesment-11-tourblog-server.vercel.app/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged)
        {
          toast.success('comment post if not work reload ones');
          setComment('');
        }
       

      });
    
  };


  useEffect(() => {
    fetch('https://assesment-11-tourblog-server.vercel.app/comment')
      .then((res) => res.json())
      .then((data) => {
  console.log(data);
  
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //Check if the current user's email matches the blog post owner's email
  // useEffect(() => {
  //   if (user.userEmail == user.email ) {

      
  //     setCommentButtonDisabled(true);
  //   } else {
  //     setCommentButtonDisabled(false);
  //   }
  // }, []);
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Post your Comments</h2>
          </div>
          <form className="mb-6" onSubmit={handlePostComments}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark-border-gray-700">
              <label htmlFor="comment" className="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>

              
                {/* (userEmail.email != user.email){
                  <button
                  type="submit"
                  className="btn btn-accent btn-sm"
                  disabled={isCommentButtonDisabled}
                >
                  Post comment
                </button>
                } */}
                 {user.email !== tourDetails.userEmail && (
                      <>
                        <button
                  type="submit"
                  className="btn btn-accent btn-sm"
                  //disabled={isCommentButtonDisabled}
                >
                  Post comment
                </button>
                      </>
                    )}
               
            
    

          </form>
          <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            {/* Display comments here */}
            <Coments >

            </Coments>
          </article>
        </div>
      </section>
    </div>
  );
};

export default UserComments;
