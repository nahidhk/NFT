import { useState } from "react";
import logo from "../../public/logo.png";
import { IoCloseCircle } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
export default function Navbar() {
  const [close, setcClose] = useState(false);
  return (
    <div className=" container relative">
      <nav className=" flex items-center justify-between">
        <div className=" select-none">
          <img src={logo} alt="" />
        </div>

        <ul className="  cursor-pointer  hidden md:flex space-x-6 text-color font-">
          <li>About</li>
          <li>Projects</li>
          <li>MarketPlace</li>
          <li>Art</li>
        </ul>

        <button className="px-6 py-3 rounded-ss-2xl rounded-ee-2xl font-medium text-[18px] gradient-background hidden md:block text-neutral-900">
          {" "}
          Connect Us
        </button>
        <div
          className=" rounded-md block md:hidden gradient-background ease-in-out duration-700 delay-300"
          onClick={() => setcClose(!close)}
        >
          {close ? <IoCloseCircle size={35} /> : <IoMenu size={35} />}
        </div>
      </nav>

      <ul
        onClick={() => setcClose(!close)}
        className={`text-color ease-in-out duration-300  space-y-4 md:hidden  absolute right-0 bg-black/5 rounded-2xl  px-10 py-5 mr-5 ${
          !close && " hidden"
        }`}
      >
        <li className=" cursor-pointer">About</li>
        <li className=" cursor-pointer">Projects</li>
        <li className=" cursor-pointer">MarketPlace</li>
        <li className=" cursor-pointer">Art</li>
      </ul>
    </div>
  );
}
