import React from 'react';

const AOS = () => {
    return (
        <div className=' mt-10 flex flex-col items-center justify-center'>
            <h3 className='text-4xl text-sky-500'>Our Famous Toy</h3>
           
            <div  data-aos="fade-left" className=' border-2 border-sky-500 w-44 mb-3'>
                <img className='w-full' src="https://i.ibb.co/tYvmz5S/download-2.jpg" alt="" />
            </div>
            <div  data-aos="fade-right" className=' border-2 border-sky-500 w-44 mb-3'>
                <img className='w-full' src="https://i.ibb.co/my1Cp31/download-1.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default AOS;