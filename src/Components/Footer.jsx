import React from 'react';

const Footer = () => {
  return (
<div className='mt-5'>
<footer className="bg-white py-6 ">
      <div className="container mx-auto text-center">
      <a className="text-2xl text-[#003EA4]"> Auction <span className='font-bold text-[#FFD337]'>Gallery</span></a>
        <p className="text-lg text-gray-700">Bid. Win. Own.</p>
        <div className="mt-4">
          <a href="/" className="mx-2 text-gray-600 hover:text-blue-500">Home</a>
          <a href="/auctions" className="mx-2 text-gray-600 hover:text-blue-500">Auctions</a>
          <a href="/categories" className="mx-2 text-gray-600 hover:text-blue-500">Categories</a>
          <a href="/how-it-works" className="mx-2 text-gray-600 hover:text-blue-500">How it works</a>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          © 2025 AuctionGallery. All rights reserved.
        </p>
      </div>
    </footer>
</div>
  );
};

export default Footer;