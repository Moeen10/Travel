import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
const [service,setService] =useState({})
    useEffect(()=>{
        fetch(`https://blooming-mesa-36031.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h1> {service.name}</h1>
            <Card className="bg-dark text-white">
  <Card.Img src={service.img} alt={service.name} />
  <Card.ImgOverlay>
    <Card.Title>{service.name}</Card.Title>
    <Card.Text>
    {service.description}
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
<Button className="btn btn-danger ">Add-Wish</Button>
        </div>
    );
};

export default Booking;