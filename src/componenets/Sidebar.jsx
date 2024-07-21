import React, { useState } from "react";
import verticalLogo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_1.png";
import logo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_2.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full z-50 ${
          isExpanded ? "w-[345px]" : "w-[150px] border-r-8 border-[#D29A5A]"
        } bg-[#130F0CCC] text-white transition-all duration-100`}
      >
        <div className="flex items-center justify-between p-4 pl-14">
          {isExpanded ? (
            <div>
              <IoClose
                size={35}
                className="cursor-pointer top-10 left-[5px]"
                onClick={toggleSidebar}
              />
            </div>
          ) : (
            <div>
              <FaBars
                size={28}
                className="cursor-pointer top-10 left-[5px]"
                onClick={toggleSidebar}
              />
            </div>
          )}
        </div>

        {isExpanded ? (
          <nav className="ml-3">
            <img
              className="w-[330px] h-[221px] top-[10px] left-[8px]"
              src={logo}
              alt="logo"
            />
            <ul className="text-[22px]">
              <li className="p-4 cursor-pointer hover:text-[#D29A5A]">HOME</li>
              <li className="p-4 cursor-pointer hover:text-[#D29A5A]">
                PRODUCTS
              </li>
              <li className="p-4 cursor-pointer hover:text-[#D29A5A]">
                MEET CHEF MATT
              </li>
              <li className="p-4 cursor-pointer hover:text-[#D29A5A]">FAQ</li>
              <li className="p-4 cursor-pointer hover:text-[#D29A5A]">
                CONNECT WITH US
              </li>
            </ul>
          </nav>
        ) : (
          <div className="mt-36 top-[673px] -left-72 w-[447px] h-[299px]">
            <img className=" " src={verticalLogo} alt="logo" />
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
