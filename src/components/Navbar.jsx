import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    
    setNav(!nav);
  };

//   const handleResize = () => {
//     if(window.innerWidth >= 600) {
//         setNav(!nav)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("resize", handleResize)
//   },[])

  return (
    <div className=" text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-3">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-3">Home</li>
        <li className="p-3">Company</li>
        <li className="p-3">Resources</li>
        <li className="p-3">About</li>
        <li className="p-3">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav? 'fixed left-0 top-0 w-[60%] border-r h-full  border-r-gray-900 bg-[#000300] p-3 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-3">React.</h1>

        <ul className="">
          <li className="p-3 border-b border-gray-600">Home</li>
          <li className="p-3 border-b border-gray-600">Company</li>
          <li className="p-3 border-b border-gray-600">Resources</li>
          <li className="p-3 border-b border-gray-600">About</li>
          <li className="p-3 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
