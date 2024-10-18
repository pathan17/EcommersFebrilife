import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ShopMenWomenKids = () => {
    return (
        <div>
            <div className="main-shop mt-5  bg-slate-300 h-[60px] lg:h-[100px] md:h-[80px] sm:mb-[100px] lg:mb-5">
        <div className=" container mx-auto ">
          <div className="Shop flex gap-20  lg:flex-row lg:gap-10  sm:flex-col sm:flex sm:gap-6">
            <div className="shopNow w-[60%] md:w-[60%] lg:w-[60%] sm:w[100%] sm:mt-[5px] lg:mt-[20px]  sm:mx-auto">
              <div className="div flex justify-between">
                <h1 className=" mt-4">Shop Now</h1>
                <h1 className=" mt-4">MEN</h1>
                <h1 className=" mt-4">WOMEN</h1>
                <h1 className=" mt-4">KIDS</h1>
              </div>
            </div>
            <div className="shopNow w-[40%] sm:mx-auto sm:w-full sm:p-4 sm:bg-slate-600 md:bg-inherit md:w-[40%] lg:w-[40%]">
              <div className="Icon flex gap-8 md:gap-1  sm:flex-row  sm:w-full sm:justify-center sm:items-center">
                <div className="text sm:flex-row ">
                  <h1 className="mt-4">GET 5% OFF ON APP</h1>
                </div>
                <div className="text flex justify-center items-center px-4  bg-black rounded-md mt-3 ">
                  <FaGooglePlay className=" text-red-400" />
                  <span className=" inline-block ml-1 text-white">
                    <p className="text-[10px]">GET IT ON</p> Google Play
                  </span>
                </div>
                <div className="text">
                  <div className="text flex justify-center items-center px-4 bg-black rounded-md mt-3">
                  <FaApple className="text-white" />
                    <span className=" inline-block  text-white">
                      <p className="text-[10px]">GET IT ON</p> Google Play
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ShopMenWomenKids;