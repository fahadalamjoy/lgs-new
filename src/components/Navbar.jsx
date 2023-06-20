import React, { useState } from "react";
import Logo from '../assets/logo.png'
import {AiOutlineMenu} from 'react-icons/ai';
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let [open, setOpen] = useState(false);
  return (
    <>
      <section className="sticky top-0 lg:bg-bg-1 bg-white  w-full   z-50 font-font2">
      <div className="container mx-auto md:flex items-center justify-between  py-4 md:px-10 px-7 ">
          <div className="">
            <img className="" alt="hero" src={Logo} />
          </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden mt-6"
        >
          <AiOutlineMenu/>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static lg:bg-bg-1 bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li
            className="md:ml-8 text-xl md:my-0 my-7"
            onClick={() => setOpen(false)}
          >
            {/* <HashLink to={link.link}> */}
            
              HOME

            {/* </HashLink> */}
          </li>
          {/* <li
            className="md:ml-8 text-xl md:my-0 my-7"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >

            <div className="flex">
              <p>SERVICES</p>
              <img className="h-2 mt-3 ml-1" src={drop} alt="drop" />
            </div>

            {dropdown && <Dropdown setOpen={setOpen} />}

          </li> */}
          <li
            className="md:ml-8 text-xl md:my-0 my-7"
            onClick={() => setOpen(false)}
          >
            {/* <HashLink to={link.link}> */}
            
              ABOUT US

            {/* </HashLink> */}
          </li>
          <li
            className="md:ml-8 text-xl md:my-0 my-7"
            onClick={() => setOpen(false)}
          >
            {/* <HashLink to={link.link}> */}
            
              SERVICES

            {/* </HashLink> */}
          </li>
          <li
            className="md:ml-8 text-xl md:my-0 my-7"
            onClick={() => setOpen(false)}
          >
            {/* <HashLink to={link.link}> */}
            
              <div className="bg-pink p-2 inline-block border-2 border-black rounded">
                CONTACT US
              </div>

            {/* </HashLink> */}
          </li>

          {/* <Link to="/contact-us">
            <Button onClick={() => setOpen(false)}>GET A QUOTE</Button>
          </Link> */}
        </ul>
      </div>
    </section>
    </>
  );
}