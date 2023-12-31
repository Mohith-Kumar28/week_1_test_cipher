import React from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const handleClick = (option) => {
    toast.success('Printed "'+option+'" in console!!!!!');
    console.log(option);
  };

  return (
<header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50 left-0 w-full">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-xl">Logo</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a onClick={()=>{handleClick('first')}} className="mr-5 cursor-pointer hover:text-white">First </a>
      <a onClick={()=>{handleClick('second')}} className="mr-5 cursor-pointer hover:text-white">Second </a>
      <a onClick={()=>{handleClick('tjird')}} className="mr-5 cursor-pointer hover:text-white">Third </a>
      <a onClick={()=>{handleClick('fourth')}} className="mr-5 cursor-pointer hover:text-white">Fourth </a>
    </nav>
    <button onClick={()=>{handleClick('Clicked button')}} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Click meeeeeee
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  );
};

export default Navbar;
