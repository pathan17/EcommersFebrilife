import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ShopMenWomenKids = () => {
    return (
        <div>
            <div className="main-shop md:px-[40px] sm:mt-2 bg-slate-100 h-[75px] lg:h-[60px] md:h-[100px] sm:mb-[100px] lg:mb-5 lg:mt-[-28px]">
                <div className="container mx-auto">
                    <div className="Shop flex flex-col sm:flex-col lg:flex-row gap-4 lg:gap-[50px] ">
                        <div className="shopNow w-full lg:w-[50%] sm:w-full md:w-full sm:mx-auto ">
                            <div className="flex justify-between items-center sm:mt-[20px] uppercase font-sans">
                                    <h1 className=" ">Shop Now</h1>
                                    <h1 className="">MEN</h1>
                                    <h1 className="">WOMEN</h1>
                                    <h1 className="">KIDS</h1>
                              
                            </div>
                        </div>
                        <div className="shopNow w-full lg:w-[50%] sm:mx-auto bg-slate-100 p-3 md:p-0 lg:p-0 lg:bg-inherit lg:mt-[12px] md:w-full hover:text-red-600">
                            <div className="Icon flex flex-col sm:flex-row gap-2 sm:gap-1 lg:gap-5  justify-center items-center">
                                <div className="text">
                                    <h1 className=" font-sans ">GET 5% OFF ON APP</h1>
                                </div>
                                <div className="text flex justify-center items-center px-4 md:px-2 bg-black rounded-md  ">
                                    <FaGooglePlay className="text-red-400" />
                                    <span className="inline-block ml-1 text-white">
                                        <p className="text-[10px]">GET IT ON</p> Google Play
                                    </span>
                                </div>
                                <div className="text">
                                    <div className="flex justify-center items-center px-4 md:px-2 bg-black rounded-md  ">
                                        <FaApple className="text-white" />
                                        <span className="inline-block text-white lg:ml-4">
                                            <p className="text-[10px]">GET IT ON</p> App Store
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
