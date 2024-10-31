import { useState } from "react";
import { FaPlus, FaMinus, FaShoppingCart, FaSearch, FaCartPlus } from "react-icons/fa";
import { IoMdClose, IoIosArrowForward } from "react-icons/io";
import HadLine from "../Components/HadLine";
import Navbar from "../Components/Navbar";
import bag from "../assets/bag.png";
import img from '../assets/img3.jpg';
import ClickFromButton from "../Components/ClickFromButton";

const ScrollPages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItemOpen, setSubItemOpen] = useState(null);
    const [cart, setCart] = useState(false);

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

    const toggleItems = () => setIsOpen(!isOpen);
    const handleItemClick = (item) => setSelectedItem(item);
    const toggleSubItems = (item) => setSubItemOpen(subItemOpen === item ? null : item);

    const ImgItems = Array(9).fill({
        Image: img,
        Name: "PremiumFullSleeveRaglan",
        Save: " Save tk. 145",
        Price: "ট640",
    });

    return (
        <div className="relative">
            <div className="bg-slate-50">
                <HadLine />
                <Navbar />
                <div className="container mx-auto flex flex-col md:flex-row gap-5 p-5">
                    <div className="scrollbar w-full md:w-[30%] max-h-[500px] overflow-y-auto">
                        <div className="flex justify-between items-center mt-5" onClick={toggleItems}>
                            <h1 className="text-[25px] text-black font-bold capitalize">New Arrival</h1>
                            {isOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                        {isOpen && (
                            <div className="ml-5">
                                {items.map((item) => (
                                    <div key={item} className="text-[18px] text-black font-bold opacity-80 capitalize">
                                        <div onClick={() => { handleItemClick(item); toggleSubItems(item); }} className="flex justify-between cursor-pointer">
                                            <p>{item}</p>
                                            {subItemOpen === item ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {subItemOpen === item && (
                                            <div className="sub-items ml-5">
                                                {subItems.map((subItem) => (
                                                    <p key={subItem} className="text-[15px] text-black opacity-60 capitalize cursor-pointer">
                                                        {subItem}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="w-full md:w-[70%] max-h-[500px] overflow-y-auto">
                        <div className="input-field mt-5">
                            <div className="relative bg-slate-100 w-full flex">
                                <input
                                    type="text"
                                    className="py-1 px-4 text-blue-600 border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                                    placeholder="Search by product"
                                />
                                <div className="relative border border-gray-400 h-10 w-10 text-center ml-1">
                                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                                </div>
                            </div>
                        </div>

                        {selectedItem && (
                            <div className="item-details flex justify-center items-center mt-4">
                                <h2>Details for: {selectedItem}</h2>
                            </div>
                        )}



                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                            {ImgItems.map((item, i) => (
                                <div key={i} className="item text-center relative">
                                    <img src={item.Image} alt="" className="w-full h-auto" />
                                    <p className="absolute bg-red-600 text-white p-[2px] w-[90px] top-0 right-0">Sale</p>
                                    <h2 className="mt-1">{item.Name}</h2>
                                    <p className="bg-slate-700 text-white p-1 w-[100px] mx-auto mt-2">{item.Save}</p>
                                    <p className="mx-auto mt-1">{item.Price}</p>
                                    <div className="cart mt-2">
                                        <div className="icon flex items-center justify-center gap-4 bg-black p-2">
                                            <FaCartPlus className="text-white" />
                                            <h1 className="capitalize text-[15px] text-white">Buy Now</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-2 right-8 z-50 hidden md:block">
                            <ClickFromButton />
                        </div>



                    </div>
                </div>
            </div>
            {/* add---cart---start */}
            <div className="   z-[999]">
                {

                    cart ?
                        <div className=" ml-[-50px] opacity-[100%]">
                            <div className=" absolute  bg-gray-400 h-full w-[300px] z-[999] right-0 top-0">
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
                        <div onClick={() => setCart(!cart)} className="icon bg-blue-600 w-[50px] h-[50px] rounded-md absolute ml-[200px] mt-15 right-0 top-[40%]">
                            <span className=" absolute  text-[15px] text-white content[''] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><FaShoppingCart /></span>
                            <h1 className=" mt-[55px] bg-blue-600 text-center rounded-md h-6 w-6 text-white ml-2">0</h1>
                        </div>
                }
            </div>
            {/* add---cart---end */}

        </div>
    );
};

export default ScrollPages;
