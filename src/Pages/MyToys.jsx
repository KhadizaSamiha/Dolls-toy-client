import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaTrash } from 'react-icons/fa';



const MyToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [myToys, setMyToys] = useState([]);
    console.log(myToys);
    const uri = `http://localhost:5000/myToys?email=${user.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    return (
        <div>
            <h1>My Toyyyyyyy{myToys.length}</h1>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <tr key={toys._id}>
                                <td className='w-16'><img className='h-16 w-16 rounded-full' src={toys?.image} alt="" /></td>
                                <td className='w-10  text-lg'>{toys.name}</td>
                                <td className='w-10  text-lg'>{toys?.seller}</td>
                                <td className='w-10  text-lg'>{toys?.subCategory}</td>
                                <td className='w-10  text-lg'>{toys?.price}</td>
                                <td className='w-10  text-lg'>{toys?.quantity}</td>
                                <td className='w-10  text-lg'><button className="text-sky-500"><FaEdit /></button></td>
                                <td className='w-10  text-lg'><button className="text-red-400"><FaTrash /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;