import React, { useState } from "react";
import verticalLogo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_1.png";
import logo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_2.png";
// import { FaBars } from "react-icons/fa";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className={`absolute fixed top-0 left-0 h-full z-50 ${
          isExpanded ? "w-[345px]" : "w-[150px]"
        } bg-[#130F0CCC] text-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          {/* <div className="text-2xl font-bold">Logo</div> */}
          {/* <FaBars className="cursor-pointer" onClick={toggleSidebar} /> */}
          <h1 className="cursor-pointer" onClick={toggleSidebar}>
            Menu
          </h1>
        </div>

        {isExpanded ? (
          <nav className="">
            <img className="w-[330px] h-[221px]" src={logo} alt="logo" />
            <ul>
              <li className="p-4 hover:bg-gray-700">Home</li>
              <li className="p-4 hover:bg-gray-700">Products</li>
              <li className="p-4 hover:bg-gray-700">Meet Chef Matt</li>
              <li className="p-4 hover:bg-gray-700">FAQ</li>
              <li className="p-4 hover:bg-gray-700">Connect with us</li>
            </ul>
          </nav>
        ) : (
          <img
            className="mt-36 w-[447px] h-[] flex items-center justify-center"
            src={verticalLogo}
            alt="logo"
          />
        )}
      </div>
    </>
  );
}

export default Sidebar;
