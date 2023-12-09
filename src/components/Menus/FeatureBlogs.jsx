
//backup code

/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import axios from "axios";
// import { useState } from 'react';
// import DataTable from 'react-data-table-component';
// import { useEffect } from 'react';


// const FeatureBlogs = () => {
//     const [featureData, setFeatureData]= useState([]);

//     const getFeatureData= async ()=>{
//         try{
//             const res =await  axios.get('https://assesment-11-tourblog-server.vercel.app/blog')
//             setFeatureData(res.data);
//         }catch(error){
//             console.log(error);
//         }
//     };
//    const columns = [
//     {
//         name: 'Serial Number',
//         selector: (row)=> row._id
//       },
//       {
//         name: 'Blog Title',
//         selector: (row)=> row.title
//       },
//       {
//         name: 'Blog Owner',
//         selector: (row)=> row.userName
//       },
//       {
//         name: 'Blog Owner Profile Picture',
//         selector: (row)=> <img width={50} height={50} src={row.userPhoto} alt="" />
//       },
      
//    ]


//     useEffect(() => {
//         getFeatureData();
//     },[])
//     return (
//         <div>
//             <h1>featute data</h1>
//             <DataTable 
//             title="Featured Blogs"
//             columns={columns}
//             data={featureData}
//             pagination
//             />
//         </div>
//     );
// };

// export default FeatureBlogs;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';

const FeatureBlogs = () => {
    const [featureData, setFeatureData] = useState([]);

    const getFeatureData = async () => {
        try {
            const res = await axios.get('https://assesment-11-tourblog-server.vercel.app/blog');
            setFeatureData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFeatureData();
    }, []);

    
    const sortedData = featureData.slice().sort((a, b) => {
    
        return b.longdescription.length - a.longdescription.length;
    });
    const top10Data = sortedData.slice(0, 10);
    const columns = [
        {
            name: 'Serial Number',
            selector: (row) => row._id,
        },
        {
            name: 'Blog Title',
            selector: (row) => row.title,
        },
        {
            name: 'Blog Owner',
            selector: (row) => row.userName,
        },
        {
            name: 'Blog Owner Profile Picture',
            selector: (row) => <img className='rounded-3xl w-14'src={row.userPhoto} alt="" />,
        },
        {
            name:'Action',
            cell:row => <Link to={`/details/${row._id}`}>
            <button className='btn btn-info btn-sm'>view</button>
            </Link>
        }
    ];
    return (
        <div>
            <Header/>
            <h1 className='text-center text-4xl'>Featured Blogs</h1>
            <DataTable
                title="Top 10 Featured Blogs"
                columns={columns}
                data={top10Data}
                pagination
            />
        </div>
    );
};

export default FeatureBlogs;
