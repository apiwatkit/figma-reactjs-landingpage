"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.png"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  function updateToggle() {
    setToggle(!toggle);
  }

  return (
    <nav className="bg-[#F5F7FA]">
      <div className="container mx-auto h-auto relative p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[85px]">
        <div>
          <a href='#'>
            <Image 
              src={Logo}
              alt=""
              width={155}
              height={24}
            />
            </a>
        </div>

        <ul className={`${!toggle ? 'hidden' : 'show'} md:flex flex-col my-5 md:flex-row md:gap-10`}>
          <li className="menu"><a href="#">Service</a></li>
          <li className="menu"><a href="#">Feature</a></li>
          <li className="menu"><a href="#">Home</a></li>
          <li className="menu"><a href="#">Product</a></li>
          <li className="menu"><a href="#">Testimonial</a></li>
          <li className="menu"><a href="#">FAQ</a></li>
        </ul>

        <ul className={`${!toggle ? 'hidden' : 'show'} md:flex flex-col my-5 md:flex-row md:gap-10`}>
          <li className="login-btn md:justify-center"><a href="#">Login</a></li>
          <li className="green-btn w-[90px] h-[40px]"><a href="#">Sign up</a></li>
        </ul>

        <GiHamburgerMenu onClick={updateToggle} className="absolute right-5 pt-[5px] cursor-pointer text-xl md:hidden" />
      </div>
    </nav>
  );
}