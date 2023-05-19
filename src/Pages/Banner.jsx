import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[500px] bg-base-200 bg-gradient-to-r from-[#151515] to-sky-400">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'><img src="https://i.ibb.co/FYTsvVd/7692888-42698.jpg" className="max-w-lg h-80 hover:h-full shadow-2xl rounded-r-lg" /></div>
                <div className='w-1/3'>
                    <h1 className="text-5xl font-bold text-slate-200">Welcome to Froxen Lego</h1>
                    <p className="py-6 text-sky-400 text-5xl">20% Discount on all toy in trends!.</p>
                    <button className="btn btn-outline btn-info ">View More!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;