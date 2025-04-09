import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import DataTable from './Components/DataTable';
import Favorite from './Components/Favorite';
import axios from 'axios';
import Footer from './Components/Footer';
const App = () => {

  const [datas,setData]=useState([])
   const [favorites,setFavirites]=useState([])
   const [totalPrice,setTotalPrice]=useState(0)



   useEffect(()=>{
    axios.get('data.json').then(data=>setData(data.data))
   },[])
  console.log(favorites);




  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>


      <div className=' bg-[#EBF0F5] h-full px-10 py-10'>
        <h2 className='text-xl font-semibold'>Active Auctions</h2>
        <p>Discover and bid on extraordinary items</p>


        <div className='flex items-start justify-around gap-6 bg-gray-100 mt-10'>
          <div className=' bg-white w-[70%] p-4 shadow-md rounded-2xl'>
            <DataTable datas={datas}  setFavirites={setFavirites} setTotalPrice={setTotalPrice}></DataTable>
          </div>

          <div className=' bg-white rounded-2xl w-[30%] p-4 shadow-md flex flex-col '>
            <Favorite favorites={favorites} totalPrice={totalPrice}  setFavirites={setFavirites} setTotalPrice={setTotalPrice} ></Favorite>
          </div>
        </div>

      </div>



      <Footer></Footer>
    </div>
  );
};

export default App;