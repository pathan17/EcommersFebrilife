import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import HadLine from "../Components/HadLine";
import Navbar from "../Components/Navbar";
import bag from "../assets/bag.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ScrollPages = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItemOpen, setSubItemOpen] = useState(null); // State for which sub-item is open
    const [cart, setCart] = useState( false);
    // Example items array
    const items = [
        "Half Sleeve T-shirt",
        "Full Sleeve T-shirt",
        "Maggie Shirt",
        "Polo T-shirt",
        "Graphic Tee",
        "V-Neck T-shirt",
        "Tank Top",
        "Womens",
        "Men",
        "Kids",
        "Face Mask",
        "Boys",
        "Girls",
    ];
    const subItems = [
        "Blank T-shirt37",
        "Design Shorts2",
        "Design T-shirt13",
        "Full Sleeve T-shirt9",
        "Maggie18",
        "Panjabi3",
        "Polo T-shirt8",
        "Shorts45",
        "Trouser",
    ];

    const toggleItems = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const toggleSubItems = (item) => {
        setSubItemOpen(subItemOpen === item ? null : item); // Toggle sub-items
    };

    return (
        <div className="div bg-slate-50">
            <div className="container mx-auto">
                <div className="fixed top-0 left-0 right-0 z-[999]">
                    <HadLine />
                    <Navbar />
                </div>
                <div className="pt-[100px] "> {/* Adjust padding to avoid overlap with fixed navbar */}
                    <div className="flex justify-center items-center">
                        <div className="main flex gap-[50px] w-full">
                            <div className="scrollbar w-[30%] max-h-[550px] overflow-y-auto gap-5">
                                <div className="items flex gap-[200px] items-center mt-5" onClick={toggleItems}>
                                    <h1 className="text-[25px] text-black font-bold capitalize">newArrival</h1>
                                    {isOpen ? <FaMinus /> : <FaPlus />}
                                </div>
                                {isOpen && (
                                    <div className="item-list ml-[30px]">
                                        {items.map((item) => (
                                            <div key={item} className="text-[18px] text-black font-bold opacity-80 capitalize">
                                                <div onClick={() => { handleItemClick(item); toggleSubItems(item); }} className="flex justify-between cursor-pointer">
                                                    <p>{item}</p>
                                                    {subItemOpen === item ? <FaMinus /> : <FaPlus />}
                                                </div>
                                                {subItemOpen === item && (
                                                    <div className="sub-items ml-5">
                                                        {subItems.map((subItem) => (
                                                            <div key={subItem} className="text-[15px] text-black opacity-60 capitalize cursor-pointer">
                                                                <p className="text-[13px] text-gray-800" onClick={() => handleItemClick(subItem)}>{subItem}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="scrollbar w-[70%] max-h-[500px] overflow-y-auto">
                                <div className="input">
                                    <div className="input-field mt-5">
                                        <div className="bg-slate-100 w-full">
                                            <input
                                                type="text"
                                                className="py-1 px-4 text-blue-600 border border-gray-300 focus:outline-none focus:border-blue-500 text-left w-full"
                                                placeholder="Search by product"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {selectedItem && (
                                    <div className="item-details flex justify-center items-center mt-4">
                                        <h2>Details for: {selectedItem}</h2>
                                    </div>
                                )}

                                {/* ----cart--click--sidevabr--open--start- */}

                                <div className="   z-[999]">
                                    {

                                        cart ?



                                            <div className=" ml-[-50px] opacity-[100%]">
                                                <div className=" absolute  bg-gray-400 h-full w-[300px] z-[999] right-0 top-0 transition-all">
                                                    <div className="div bg-black h-[45px] w-full top-0 flex gap-x-[100px] text-white z-[999]">
                                                        <div onClick={() => setCart(!cart)} className="cros text-[30px] text-red-600 text-center mt-2 font-bold"><IoMdClose /></div>
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
                                            <div onClick={() => setCart(!cart)} className="icon bg-blue-600 w-[50px] h-[50px] rounded-md absolute ml-[200px] mt-28 right-0 top-[40%]">
                                                <span  className=" absolute  text-[15px] text-white content[''] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><FaShoppingCart /></span>
                                                <h1 className=" mt-[55px] bg-blue-600 text-center rounded-md h-6 w-6 text-white ml-2">0</h1>
                                            </div>
                                    }
                                </div>
                                {/* ----cart--click--sidevabr--open--end- */}
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollPages;
