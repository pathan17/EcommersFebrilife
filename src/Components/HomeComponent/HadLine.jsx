import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TfiCar } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { Link } from "react-router-dom";
import LoginAllPages from "../../Pages/LoginAllPages";

const HadLine = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isBangladeshDropdownOpen, setIsBangladeshDropdownOpen] = useState(false);

  // Toggle the login dropdown visibility
  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  // Toggle the Bangladesh dropdown visibility
  const toggleBangladeshDropdown = () => {
    setIsBangladeshDropdownOpen(!isBangladeshDropdownOpen);
  };

  return (
    <div>
      <div className="main h-8 bg-black bg-opacity-10 w-full hidden lg:block">
        <div className="febrilifeHedline flex justify-center items-center">
          <div className="T-shart w-[40%]">
            <span className="bg-black h-8 w-[450px] text-white text-center py-2 font-bold flex items-center justify-center">
              <BsLightningChargeFill className="mr-2 text-xl text-yellow-500" />
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
              <MdOutlineArrowCircleRight className="ml-2 text-xl bg-white rounded-full text-black" />
            </span>
          </div>
          <div className="btn w-[60%]">
            <div className="main-btn">
              <div className="btn flex gap-8 justify-center items-center">
                {/* Order Bulk Button */}
                <p
                  className="bg-green-600 hover:bg-green-700 text-white h-8 w-[200px] text-center rounded-sm flex items-center justify-center gap-1 cursor-pointer transition-all"
                  aria-label="Order Bulk"
                >
                  <TfiCar className="text-lg" />
                  Order Bulk
                </p>

                {/* Bangladesh Dropdown Button */}
                <p
                  className="bg-black bg-opacity-15 hover:bg-green-700 text-white h-8 w-[200px] flex items-center justify-center gap-1 rounded-sm cursor-pointer transition-all"
                  onClick={toggleBangladeshDropdown}
                  aria-haspopup="true"
                  aria-expanded={isBangladeshDropdownOpen ? "true" : "false"}
                >
                  <span className="text-lg">Bangladesh</span>
                  <IoIosArrowDown className="text-lg" />
                </p>

                {/* Bangladesh Dropdown Menu */}
                {isBangladeshDropdownOpen && (
                  <div className="absolute bg-white w-[200px] mt-2 rounded-lg shadow-lg">
                    <p className="p-2 text-black">Option 1</p>
                    <p className="p-2 text-black">Option 2</p>
                    <p className="p-2 text-black">Option 3</p>
                  </div>
                )}

                {/* Help and Login Button Group */}
                <div className="relative group">
                  <span className="flex items-center gap-8 text-center ml-5">
                    {/* Help Link */}
                    <p
                      className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300"
                      aria-label="Help"
                    >
                      Help
                    </p>

                    {/* Login Button */}
                    <div className="relative">
                      <span
                        className="flex justify-center items-center gap-1 text-lg text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300"
                        onClick={toggleLoginDropdown}
                        aria-label="Login"
                      >
                        <CgLogIn />
                        <Link to="#">Login</Link>
                      </span>

                      {/* Login Dropdown */}
                      {isLoginDropdownOpen && (
                        <div
                          className="  absolute z-[999] left-0 top-[60px] mt-2  transition-all duration-300"
                          role="menu"
                          aria-hidden={!isLoginDropdownOpen}
                        >
                          <LoginAllPages/>
                        </div>
                      )}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadLine;
