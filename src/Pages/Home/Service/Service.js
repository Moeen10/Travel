import React, { useState } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
// import TotalServices from './TotalServices/TotalServices';
// import Wish from '../../Wish/Wish';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    const [ids,setIds]=useState([])
    const handlePack= () =>{
        setIds(service)
    }
    console.log(ids);
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
            <br /><br />
            <Link to={`/wish/${_id}`}>
                <button onClick={handlePack} className="btn btn-warning">Wish {name.toLowerCase()}</button>
            </Link>

        {/* {
             ids.map(pack => <Wish
                key={service._id}
                pack={pack}
            />

            )
        } */}


        </div>
    );
};

export default Service;