import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';


const Wish = () => {
//     // const {_id,name,img,description,price} = params.pack
    const { serviceId } = useParams();
// //    const [wish,setWish] = useState({})
   const { user } = useAuth();
//     const [allPack,setAllpack]=useState([]);
//    const email =user.email
//    const Id=params.pack._id;
//    const name=params.pack.name;
//    const img =params.pack.img
//     const description =params.pack.description
//     const price = params.pack.price;


//    const pack ={email,Id,name,img,description,price}
//    const final = [...allPack,pack]

//    setAllpack(final);
//    console.log(pack)
//    const punch= () =>{
   
//    }
  

    return (
        <div className="add-wish">
          
           
              <h1>Wish List</h1> 

            <h4>  Id:{serviceId}</h4>
            <h4>  Email :{user.email}</h4>

           
        </div>
    );
};

export default Wish;


