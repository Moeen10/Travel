import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageServices = () => {
    const [services,setServices] =useState([])
    useEffect(()=>{
        fetch('https://blooming-mesa-36031.herokuapp.com/services')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])

    const handleDelete = id =>{
        const url =`https://blooming-mesa-36031.herokuapp.com/services/${id}`;
        fetch(url,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            window.confirm("Do you really want to delete?")
            if (data.deletedCount){
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining)
            }
           
        })
    }
    return (
        <div>
            <h1>All Services</h1>
            {
                services.map(service=> <div>
                    <Card>
                    <Card.Img variant="top" src={service.img}  height="400px"/>
  <Card.Header>{service.name}</Card.Header>
  <Card.Body>
    <Card.Title>{service.name}</Card.Title>
    <Card.Text>
     {service.description}
    </Card.Text>
    <Card.Text>
     <b>Price :{service.price} taka</b>
    </Card.Text>
    <Button className="btn btn-warning" onClick={()=>handleDelete(service._id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>

                </div>)
            }

        </div>
    );
};

export default ManageServices;