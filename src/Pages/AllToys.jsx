import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import { Link } from 'react-router-dom';

const AllToys = () => {
    useTitle('AllToy')
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h1 className='text-5xl m-12 text-center text-white'>All toys</h1>
            <div className='text-white'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-xl'>Name</th>
                                <th className='text-xl'>Seller</th>
                                <th className='text-xl'>SubCategory</th>
                                <th className='text-xl'>Price</th>
                                <th className='text-xl'>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            allToys?.map(toys => <tr key={toys?._id}> 
                                <td className='w-16'><img className='h-16 w-16 rounded-full' src={toys?.image} alt="" /></td> 
                                <td className='w-10  text-lg'>{toys?.name}</td> 
                                <td className='w-10  text-lg'>{toys?.seller}</td> 
                                <td className='w-10  text-lg'>{toys?.subCategory}</td> 
                                <td className='w-10  text-lg'>{toys?.price}</td> 
                                <td className='w-10  text-lg pl-10'>{toys?.quantity}</td> 
                                <td className='w-10  text-lg'><Link to={`/allToys/${toys._id}`}><button className='btn btn-outline btn-info'>View Details</button></Link></td> 
                              </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;