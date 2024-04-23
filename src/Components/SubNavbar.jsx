import { SlArrowDown } from "react-icons/sl";

function SubNavbar() {
  return (
    <>
      <div className="flex bg-gray-100 my-3 h-10 items-center justify-center">
        <div className="flex items-center space-x-2 me-16 text-lg font-semibold cursor-pointer">
          <h1>All Categories</h1>
          <SlArrowDown className="transition-all ease-in-out delay-100 duration-300 hover:rotate-180" />
        </div>
        <div>
          <ul className="flex space-x-3">
            <li className="hover:text-blue-400 cursor-pointer">Cars</li>
            <li className="hover:text-blue-400 cursor-pointer">Motorcycles</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Mobile Phones
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              For Sale: Houses & Apartments
            </li>
            <li className="hover:text-blue-400 cursor-pointer">Scooters</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Commercial & Other Vehicles
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              For Rent: Houses & Apartments
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default SubNavbar;
