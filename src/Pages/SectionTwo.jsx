import React, { useEffect, useState } from 'react';

const SectionTwo = () => {
    return (
        <div className=''>
            <h2 className='text-5xl font-bold m-8 text-center pt-8'>This Week's Top Picks!</h2>
            <div className="carousel w-80 items-center text-center ml-96">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/4gcH58n/2875001-8144.jpg" className="w-full max-h-[500px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/frhsJZj/3188965-1028.jpg" className="w-full max-h-[500px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/RgNV6SM/7692888-42698.jpg" className="w-full max-h-[500px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default SectionTwo;