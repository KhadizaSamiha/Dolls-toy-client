import React, { useEffect, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
const SectionOne = () => {
    const [latests, setLatests] = useState([]);
    useEffect(() => {
        fetch('latestToy.json')
            .then(res => res.json())
            .then(data => setLatests(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-sky-500 text-center mt-24 mb-10'>Out Latest Arrival</h2>
            <div className='grid lg:grid-cols-4 mx-auto'>
                {
                    latests?.map(latest => <div className="card w-56 bg-base-100 shadow-xl bg-slate-700 ">
                        <figure className="px-10 pt-10">
                            <img src={latest.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-sky-500">{latest.name}</h2>
                            <div className='flex '>
                                <FaDollarSign className='mt-1'></FaDollarSign>
                            <p>Price :<span className='text-sky-500 font-bold'>{latest.price}</span> </p>
                            </div>
                            <p>Available Quantity : <span className='text-sky-500 font-bold'>{latest.quantity}</span>
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SectionOne;