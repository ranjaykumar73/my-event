import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className="fixed h-20 w-full z-50 bg-[#151317]">
        <div className="flex px-10 py-4 ">
          <div className="">
            <Link to="/">
              <img
                className="h-12 w-34 rounded"
                src="Images/Logo1.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="px-10 py-4 mx-10 md:flex justify-end w-full gap-10 hidden text-white ">
            <Link to="/">Home</Link>
            <Link to="/solution">Solution</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/customer">Customers</Link>

            <div
              className="relative  group inline-block cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Company
            
              {isHovered && (
               
                <div className="absolute z-10 -ml-3 text-center  bg-white border border-gray-300 rounded-md shadow-md ">
                  <Link
                    to="/ourStory"
                    className="block px-4 py-2 text-black no-underline hover:bg-gray-200"
                  >
                    OurStory
                  </Link>
                  <Link
                    to="/career"
                    className="block px-4 py-2 text-black no-underline hover:bg-gray-200"
                  >
                    Career
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <GiHamburgerMenu
          className="md:hidden cursor-pointer flex -mt-12  mr-5 bg-slate-50"
          onClick={() => {
            setToggle(!toggle);
          }}
          style={{ marginLeft: "auto" }}
        />

        {toggle && <Sidebar setToggle={setToggle} toggle={toggle} />}
      </div>
    </>
  );
};
