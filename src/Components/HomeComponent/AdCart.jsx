import { IoMdClose, IoIosArrowForward } from "react-icons/io";
import {  FaShoppingCart} from "react-icons/fa";
import bag from "../../assets/bag.png";
import { useState } from "react";


const AdCart = () => {
    const [cart, setCart] = useState(false);
    return (
        <div>
            <div className="   z-[999]">
                {

                    cart ?
                        <div className=" ml-[-50px] opacity-[100%]">
                            <div className=" absolute  bg-gray-400 h-full w-[350px]  z-[999] right-0 top-0 transition-all">
                                <div className="div bg-black h-[45px] px-3 w-full top-0 flex gap-x-[100px] text-white z-[999] cursor-pointer ">
                                    <div onClick={() => setCart(!cart)} className="cros text-[30px] text-red-600 text-center mt-2 font-bold transition-all"><IoMdClose /></div>
                                    <div className="text">
                                        <h1 className="text-center mt-3 uppercase">CART</h1>
                                    </div>

                                </div>
                                <div className="cartImg">
                                    <div className="img mt-[100px]">
                                        <img src={bag} alt="img" className=" h-[120px] w-[120px] mx-auto" />
                                    </div>
                                    <div className="text mt-10 mx-auto">
                                        <h1 className=" text-center text-gray-300 capitalize">your Cart is Empty</h1>
                                    </div>
                                    <div className="icon-btn flex gap-4 justify-center items-center mt-10">

                                        <p className=" bg-slate-500 text-white font-bold flex py-2 px-7 capitalize">start shoping <IoIosArrowForward className="mt-1.5" /></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div onClick={() => setCart(!cart)} className="icon bg-blue-600 w-[40px] h-[40px] rounded-md absolute ml-[200px] mt-15 right-0 top-[40%] cursor-pointer transition-all">
                            <span className=" absolute  text-[12px] text-white content[''] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all "><FaShoppingCart /></span>
                            <h1 className=" mt-[55px] bg-blue-600 text-center rounded-md h-6 w-6 text-white ml-2">0</h1>
                        </div>
                }
            </div> 
        </div>
    );
};

export default AdCart;