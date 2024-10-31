import { BsLightningChargeFill } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TfiCar } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { Link } from "react-router-dom";







const HadLine = () => {



  return (
    <div>
      <div className="main h-8 bg-black bg-opacity-10 w-full hidden lg:block">
        <div className="febrilifeHedline flex justify-center items-center">
          <div className="T-shart w-[40%]">
            <span className=" bg-black h-8 w-[450px] text-white text-center py-2 font-bold flex items-center justify-center">
              <BsLightningChargeFill className="mr-2 text-xltext-yellow-500" />
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
              <MdOutlineArrowCircleRight className="ml-2 text-xl bg-white rounded-full text-black" />
            </span>
          </div>
          <div className="btn w-[60%] ">
            <div className="main-btn">
              <div className="btn flex gap-8 justify-center items-center">
                {/* Order Bulk Button */}
                <p className="bg-green-600 hover:bg-green-700  text-white h-8   w-[200px] text-center rounded-sm flex items-center justify-center gap-1">
                  <TfiCar className="text-lg  " />
                  Order Bulk
                </p>
                {/* Bangladesh Dropdown Button */}
                <p className="bg-black bg-opacity-15  hover:bg-green-700 text-white h-8   w-[200px]    flex items-center justify-center gap-1  rounded-sm transition-all">
                  <span className=" text-lg  ">Bangladesh</span>
                  <IoIosArrowDown className="text-lg" />
                </p>
                <div className="div">
                  <span className="flex items-center gap-[80px] text-center ml-5">
                    {/* Help Link */}
                    <p className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300">
                      Help
                    </p>
                    {/* Login Button */}
                    
                    <span className="flex justify-center items-center gap-1 text-lg text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300">
                        <CgLogIn />
                        <Link to="/newPage">Login</Link>
                      </span>
                    
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