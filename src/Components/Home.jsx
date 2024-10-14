import { BsLightningChargeFill } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TfiCar } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Img from "../assets/fairlifeImg.svg";
import banner from "../assets/img1.jpg";

function App() {
  return (
    <>
      {/* febrilifeHedline Start */}
      <div className="main h-8 bg-black bg-opacity-10 w-full">
        <div className="febrilifeHedline flex justify-center items-center">
          <div className="T-shart w-[40%]">
            <span className=" bg-black h-8 w-[450px] text-white text-center py-2 font-bold flex items-center justify-center">
              <BsLightningChargeFill className="mr-2 text-xl text-yellow-500" />
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
              <MdOutlineArrowCircleRight className="ml-2 text-xl bg-white rounded-full text-black" />
            </span>
          </div>
          <div className="btn w-[60%]">
            <div className="main-btn">
              <div className="btn flex gap-8 justify-center items-center">
                {/* Order Bulk Button */}
                <p className="bg-green-600 hover:bg-green-700 text-white h-8 w-[200px] text-center rounded-sm flex items-center justify-center gap-1">
                  <TfiCar className="text-lg" />
                  Order Bulk
                </p>
                {/* Bangladesh Dropdown Button */}
                <p className="bg-black bg-opacity-15  hover:bg-green-700 text-white h-8 w-[200px] flex items-center justify-center gap-1  rounded-sm transition-all">
                  <span className=" text-lg ">Bangladesh</span>
                  <IoIosArrowDown className="text-lg" />
                </p>
                <span className="flex items-center justify-center text-center gap-10 ml-5">
                  {/* Help Link */}
                  <p className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300">
                    Help
                  </p>

                  {/* Login Button */}
                  <h4 className="flex justify-center items-center  gap-1 text-lg text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300">
                    <CgLogIn />
                    Login
                  </h4>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* febrilifeHedline End */}

      {/* Navbar start */}

      <nav className="container mt-10">
        <div className="main flex justify-center items-center">
          <div className="logo w-[30%]">
            <div className="log  w-[200px] flex gap-16">
              <img src={Img} alt="Logo" className="w-full" />
              <div className="relative group">
                <h2 className="flex justify-center items-center gap-2 text-black text-lg">
                  Shop <IoIosArrowDown />
                </h2>
                <div className="menu bg-white  p-6 absolute hidden group-hover:block ">
                  <ul className="flex flex-col">
                    <li className="text-black py-2">Home</li>
                    <li className="text-black py-2">Products</li>
                    <li className="text-black py-2">Services</li>
                    <li className="text-black py-2">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="input w-[60%]">
            <div className="input-field flex justify-center items-center">
              <div className="relative w-[600px]">
                <input
                  type="text"
                  className="py-1 px-4 text-blue-600  border border-gray-300 focus:outline-none focus:border-blue-500 text-left w-full rounded-md"
                  placeholder="Search by product"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="icon flex gap-1">
            <FaCartShopping className=" text-[23px]" />
            <h3 className=" bg-blue-600 rounded-md h-4 w-4  flex items-center justify-center mt-2 text-white text-[10px] font-bold">
              0
            </h3>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* banner start */}
      <div className="banner-main mt-5">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
