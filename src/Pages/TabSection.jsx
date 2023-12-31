import React, { useEffect, useState } from 'react';

const TabSection = () => {
    const [index, setIndex] = useState(0);
    const [toys, setToys] =useState([]);
    useEffect(() =>{
        fetch('https://dolls-toy-server.vercel.app/allToys')
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className='text-center mt-8'>
            <h2 className='text-4xl font-semibold text-sky-500'>Shop By Category</h2>
            <div className='flex flex-col items-center justify-center w-20 ml-96 pl-28 mt-20'>
                <div className='tabsList flex items-center justify-center'>
                    
                    <div className="ml-20 font-medium text-white bg-sky-500 px-6 py-3 rounded-full" onClick={() => (setIndex(0))}>
                        Doll
                    </div>
                    <div className="ml-20 font-medium text-white bg-sky-500 px-6 py-3 rounded-full" onClick={() => (setIndex(1))}>
                        PlaySets
                    </div>
                    <div className="ml-20 font-medium text-white bg-sky-500 px-6 py-3 rounded-full" onClick={() => (setIndex(2))}>
                        Books
                    </div>
                </div>
                <div className="tabContent" hidden={index != 0}>
                   <ul className='w-full'>
                    <li>Elsa</li>
                    <li>Ana</li>
                    <li>Cristofer</li>
                   </ul>
                </div>
                <div className="tabContent" hidden={index != 1}>
                <ul className='w-full'>
                    <li>Castle</li>
                    <li>Adventure</li>
                    <li>Cristofer</li>
                   </ul>
                </div>
                <div className="tabContent" hidden={index != 2}>
                <ul className='w-full'>
                    <li>Story</li>
                    <li>Anime</li>
                    <li>Cristofer</li>
                   </ul>
                </div>
            </div>
        </div>
    );
};

export default TabSection;