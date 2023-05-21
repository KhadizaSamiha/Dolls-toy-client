import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const UpdateToy = () => {
    const data = useLoaderData();
    console.log(data);


    const {user} =useContext(AuthContext);
    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value
        const seller = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
       
        // console.log(name, sellerName, email, subcategory, price, quantity, photoUrl);

        const UpdatedToy = {
            name,
            seller,
            email,
            subCategory,
            price,
            quantity
        }
        console.log(UpdatedToy);
        fetch(`https://dolls-toy-server.vercel.app/allToys/${data?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                //     Swal.fire({
                //         position: 'center',
                //         icon: 'success',
                //         title: 'Toy has been added',
                //         showConfirmButton: false,
                //         timer: 1500
                //     })
                // }
                form.reset()
            })
            .catch(error => console.log(error))

    }
  
    return (
        <div className="hero min-h-[500px] text-white" style={{ backgroundImage: `url("https://i.ibb.co/k4kTQ9M/two-santa-claus-with-sled-snow.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content ">
                <form onSubmit={handleUpdateToy}>
                    <div className="flex justify-between space-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name!!!!</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' placeholder="sellerName" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name='email' placeholder="selleremail" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">SubCategory</span>
                            </label>
                            <input type="text" name='subcategory' placeholder="subcategory" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="quantity" className="input input-bordered" />
                        </div>
                    </div>
                    <button className="btn btn-block btn-outline mt-5">Update Toy</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;