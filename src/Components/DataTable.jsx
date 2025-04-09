import React, { useState } from 'react';
import { Heart } from 'react-feather';
import {  toast } from 'react-toastify';
const DataTable = ({ datas, setFavirites, setTotalPrice }) => {

  const [click, setclick] = useState([])
  console.log(click);
  const handelClick = (id, data) => {
    setclick((pre) => [...pre, id])
    setFavirites((pre) => [...pre, data])

    setTotalPrice(prevTotalPrice => prevTotalPrice + parseFloat(data.currentBidPrice));
    toast.success('Item Add Your Favorite List')
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {

              datas.map(data => (


                <tr>


                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={data.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.title}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    ${data.currentBidPrice}

                  </td>
                  <td>{data.timeLeft}</td>
                  <th>
                    <button disabled={click.includes(data.id)} onClick={() => handelClick(data.id, data)} className={`${click.includes(data.id) && 'cursor-no-drop'}`}>



                      <Heart
                        size={24}
                        color={click.includes(data.id) ? 'red' : 'gray'} // Change color based on state
                        fill={click.includes(data.id) ? 'red' : 'none'} // Make it filled when active
                      />


                    </button>
                  </th>
                </tr>
              ))
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;