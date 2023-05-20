import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div className=''>
            <div className='w-3/4 mx-auto '>
                <div className="hero min-h-[400px] rounded-xl  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={toys.image} className="w-3/4 rounded-lg shadow-2xl" />
                        <div className='text-base-800 space-y-3'>
                            <h1 className="text-2xl ">Name : {toys?.name}</h1>
                           <p>Price : {toys?.price}</p>
                           <p>SellerName : {toys?.seller}</p>
                           <p>Quantity : {toys?.quantity}</p>
                           <p>Description : {toys?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;