import React from "react";

const Navbar = () => {
    const moveTo = () => {
        window.open("https://github.com/yashwanthmk11/", "_blank");
    }
  return (
    <nav className="bg-transparent flex justify-between items-center p-4">
      <div className="logo text-2xl font-bold text-white ">
        <span className="text-violet-500 font-bold">&lt;</span>
        Pass
        <span className="text-violet-500 font-bold">Op/&gt;</span>
      </div>
{/* 
      <ul className="flex space-x-4 text-white">
        <li className="cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer">
          <a href="/">About</a>
        </li>
        <li className="cursor-pointer">
          <a href="/">Contact</a>
        </li>
      </ul> */}

      <button onClick={moveTo} className="flex items-center space-x-2 cursor-pointer">
        <h1 className="text-white font-bold">Github</h1>
        <lord-icon
          src="https://cdn.lordicon.com/jjxzcivr.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#ffffff"
        ></lord-icon>
      </button>
    </nav>
  );
};

export default Navbar;
