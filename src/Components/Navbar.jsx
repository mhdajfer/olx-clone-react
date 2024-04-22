import olxLogo from "../assets/olx-logo.svg";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-12 bg-gray-200">
        <img src={olxLogo} alt="olx-logo" className="w-16" />
        <div className="flex space-x-8">
          <div className="relative flex items-center">
            <IoSearch className="absolute ms-2 " size={20} />
            <input
              type="text"
              className="border border-black rounded-sm w-64 h-10 p-2 ps-12"
            />
          </div>
          <div className="flex items-center border border-2 rounded-sm border-black ">
            <input type="text" className="rounded-sm  w-64 h-10 p-2" />
            <button className="flex items-center justify-center bg-black h-full w-12 rounded-sm">
              <IoSearch
                className="absolute ms-2 bg-black text-white"
                size={25}
              />
            </button>
          </div>
        </div>
        <div>
          <button className="font-semibold mx-8 hover:border-none border-b  border-black">
            Login
          </button>

          <button className="relative overflow-hidden p-2  rounded-full text-white ">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-300 via-cyan-500 to-blue-600" />
            <span className="bg-white text-black px-8 py-1 relative z-10 rounded-full">
              Sell
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;