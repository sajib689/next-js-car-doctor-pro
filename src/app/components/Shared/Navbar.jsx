import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const links = 
    <>
      <li className="font-semibold hover:text-primary duration-300"> 
        <Link href={'/'}>Home</Link>
      </li>
      <li className="font-semibold hover:text-primary duration-300"> 
        <Link href={'/'}>About</Link>
      </li>
      <li className="font-semibold hover:text-primary duration-300"> 
        <Link href={'/'}>Services</Link>
      </li>
      <li className="font-semibold hover:text-primary duration-300"> 
        <Link href={'/'}>Blog</Link>
      </li>
      <li className="font-semibold hover:text-primary duration-300"> 
        <Link href={'/'}>Contact</Link>
      </li>
    </>
  return (
   <div className=" bg-base-100">
     <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
            
          </ul>
        </div>
        <Link href={'/'}>
        <Image src='/assets/logo.svg' height={60} width={100} alt=""/>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="flex space-x-3 items-center">
      <LuShoppingCart className="text-xl" />
      <IoIosSearch className="text-xl"/>
      <a className="btn btn-outline btn-primary px-8 hover:text-white">Appointment</a>
      </div>
        
      </div>
    </div>
   </div>
  );
};

export default Navbar;
