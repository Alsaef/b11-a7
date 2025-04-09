import React from 'react';
import { X } from 'react-feather';
import {  toast } from 'react-toastify';
const Favorite = ({favorites,totalPrice,setFavirites,setTotalPrice}) => {
    const handelRemove=(id,price)=>{
    const removeitem=favorites.filter(removeId=>removeId.id!==id)
    setFavirites(removeitem)
    setTotalPrice(prevTotalPrice => prevTotalPrice - parseFloat(price));
    toast.warn('Item Remove Your Favorite List')
    }
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3  justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
 Favorite Items</h2>
            <div className="">
                <div className="card bg-base-100 shadow-sm h-full">
                    <div className="card-body">
                       {
                        favorites.length===0 && <> <h2 className="text-xl text-center">No favorites yet</h2>
                        <p className="text-gray-600 mb-4 text-center">Click the heart icon on any item <br /> to add it to your favorites</p></>
                       }

                       {
                        favorites.length>0&&
                         <div>
                          {
                            favorites.map(favorite=>(
                                <div className="max-w-sm w-full my-1 flex items-start border rounded-md p-3 shadow-sm hover:shadow-md transition-shadow">
                                <img
                                  src={favorite.image}
                                  alt="Guitar"
                                  className="w-16 h-16 object-cover rounded mr-3"
                                />
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-medium text-gray-800 leading-tight">
                                      {favorite.title}
                                    </h3>
                                    <button onClick={()=>handelRemove(favorite.id,favorite.currentBidPrice)}  className="text-gray-600 hover:text-black">
                                    <X size={16} />
                                    </button>
                                  </div>
                                  <div className="text-sm mt-2 text-gray-700">
                                    <span className="font-semibold mr-3">$ {favorite.currentBidPrice}</span>
                                    <span className="text-gray-500">Bids: {favorite.bidsCount}</span>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                       }



                    </div>
                </div>

                <div className='flex items-center justify-between mt-3 px-3'>
                    <h2 className='text-2xl'>Total bids Amount</h2>
                    <h2 className='text-2xl'>$ <span>{totalPrice.toFixed(2)}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Favorite;