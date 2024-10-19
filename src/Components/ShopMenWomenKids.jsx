import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ShopMenWomenKids = () => {
    return (
        <div>
            <div className="main-shop  p-6 sm:mt-2 bg-slate-100 h-[75px] lg:h-[100px] md:h-[100px] sm:mb-[100px] lg:mb-5">
                <div className="container mx-auto">
                    <div className="Shop flex flex-col sm:flex-col lg:flex-row gap-4 lg:gap-10">
                        <div className="shopNow w-full lg:w-2/3 sm:w-full sm:mx-auto">
                            <div className="flex justify-between items-center sm:mt-[20px]">
                                <h1 className="mt-4">Shop Now</h1>
                                
                                    <h1 className="mt-4">MEN</h1>
                                    <h1 className="mt-4">WOMEN</h1>
                                    <h1 className="mt-4">KIDS</h1>
                              
                            </div>
                        </div>
                        <div className="shopNow w-full lg:w-1/3 sm:mx-auto bg-slate-100 lg:bg-inherit lg:mt-0 md:w-full">
                            <div className="Icon flex flex-col sm:flex-row gap-4 sm:gap-1 p-4 justify-center items-center">
                                <div className="text">
                                    <h1 className="mt-4">GET 5% OFF ON APP</h1>
                                </div>
                                <div className="text flex justify-center items-center px-4 bg-black rounded-md mt-3">
                                    <FaGooglePlay className="text-red-400" />
                                    <span className="inline-block ml-1 text-white">
                                        <p className="text-[10px]">GET IT ON</p> Google Play
                                    </span>
                                </div>
                                <div className="text">
                                    <div className="flex justify-center items-center px-4 bg-black rounded-md mt-3">
                                        <FaApple className="text-white" />
                                        <span className="inline-block text-white">
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
