import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ShopMenWomenKids = () => {
    return (
        <div className="">
            <div className="main-shop md:px-[40px] px-4 sm:mt-2 bg-slate-100 h-[75px] lg:h-[60px] md:h-[100px] sm:mb-[100px]  lg:mt-[-28px] p-0 mt-3">
                <div className="container mx-auto">
                    <div className="Shop flex flex-col sm:flex-col lg:flex-row gap-3 ">
                        <div className="shopNow w-full lg:w-[50%] sm:w-full md:w-[30%] sm:mx-auto ">
                            <div className="flex justify-between items-center sm:mt-[20px] uppercase font-sans p-4 mt-2 lg:mt-0">
                                <h1 className=" ">Shop Now</h1>
                                <h1 className="">MEN</h1>
                                <h1 className="">WOMEN</h1>
                                <h1 className="">KIDS</h1>

                            </div>
                        </div>
                        <div className=" shopNow w-full  lg:w-[35%] md:w-[70%] sm:mx-auto bg-slate-100   lg:p-0 lg:bg-inherit hover:text-red-600  mt-3">
                            <div className="Icon flex flex-col sm:flex-row gap-2 md:gap-0  sm:gap-1 lg:gap-5   justify-center items-center  lg:mt-[-19px]  md:mt-[-10px] p-4">
                                <div className="text">
                                    <h1 className=" font-sans capitalize">GET 5% OFF ON APP</h1>
                                </div>
                                <div className="text flex justify-center items-center px-4 md:px-2 lg:px-3 lg:py-2 md:gap-[5px]  bg-black rounded-md  ">
                                    <FaGooglePlay className="text-red-400" />
                                    <span className=" ml-1 text-white md:text-[5px]">
                                        <p className="text-[10px]">GET IT ON</p> Google Play
                                    </span>
                                </div>
                                <div className="text">
                                    <div className="flex justify-center items-center px-4 md:px-2 lg:px-3 lg:py-2  bg-black rounded-md  ">
                                        <FaApple className="text-white " />
                                        <span className="inline-block text-white lg:ml-2 md:text-[5px]">
                                            <p className="text-[10px]  ">GET IT ON</p> App Store
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            {/* small--divice--for--button */}
            <div className=" lg:hidden shopNow w-full  lg:w-[50%] md:w-[70%] sm:mx-auto bg-slate-100   lg:p-0 lg:bg-inherit hover:text-red-600  mt-3">
                <div className="Icon flex flex-col sm:flex-row gap-2 md:gap-0  sm:gap-1 lg:gap-5   justify-center items-center  lg:mt-[12px]  md:mt-[-10px] p-4">
                    <div className="text">
                        <h1 className=" font-sans capitalize">GET 5% OFF ON APP</h1>
                    </div>
                    <div className="text flex justify-center items-center px-4 md:px-2 lg:px-3 lg:py-2 md:gap-[5px]  bg-black rounded-md  ">
                        <FaGooglePlay className="text-red-400" />
                        <span className=" ml-1 text-white md:text-[5px]">
                            <p className="text-[10px]">GET IT ON</p> Google Play
                        </span>
                    </div>
                    <div className="text">
                        <div className="flex justify-center items-center px-4 md:px-2 lg:px-3 lg:py-2  bg-black rounded-md  ">
                            <FaApple className="text-white " />
                            <span className="inline-block text-white lg:ml-2 md:text-[5px]">
                                <p className="text-[10px]  ">GET IT ON</p> App Store
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShopMenWomenKids;
