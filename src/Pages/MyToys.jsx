import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";




const MyToys = () => {
    useTitle('MyToys')
    const { user } = useContext(AuthContext);
    console.log(user);
    const [myToys, setMyToys] = useState([]);
    console.log(myToys);
    const uri = `https://dolls-toy-server.vercel.app/myToys?email=${user.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = id => {
        const proceed = confirm('are u sure?')
        if (proceed) {
            fetch(`https://dolls-toy-server.vercel.app/myToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myToys.filter(myToy => myToy._id != id);
                        setMyToys(remaining)
                    }
                })
                .catch(error => console.log(error))
        }
    }
    return (
        <div>
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
                                <td className='w-10  text-lg'><Link to={`/updateToy/${toys._id}`}><button className="text-sky-500"><FaEdit /></button></Link></td>
                                <td className='w-10  text-lg'><button onClick={() => handleDelete(toys._id)} className="text-red-400"><FaTrash /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;