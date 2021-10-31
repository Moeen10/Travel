import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://blooming-mesa-36031.herokuapp.com/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert("Added Successfully")
                reset();
            }
        })
        // data.target.reset();
    };

    return (
        <div className="add-Service">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name..." /> <br />
      <textarea {...register("description")} placeholder="Description..." /> <br />
      <input type="number" {...register("price")} placeholder="Price..." /> <br />
      <input {...register("img")} placeholder="imgURL..." /> <br />
        
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;