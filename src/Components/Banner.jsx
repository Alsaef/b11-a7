import React from 'react';
import BannerImage from '../assets/Banner-min.jpg';
const Banner = () => {
    return (
        <div>
              <div className="overflow-hidden">
            <div
                className="h-[540px] bg-fixed bg-cover bg-center flex flex-col items-start justify-center"
                style={{ backgroundImage: `url('${BannerImage}')` }}
            >
                <div className="p-8 ">
                    <h1 className="text-5xl text-white font-bold my-4">
                    Bid on Unique Items from <br /> Around the World
                    </h1>
                    <p className="text-lg text-white mb-6">Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                    <div className='flex items-center space-x-2'>
                        <button className="btn rounded-full">
                        Explore Auctions
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Banner;