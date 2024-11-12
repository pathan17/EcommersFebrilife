import { useState } from "react";
import { FaPlus, FaMinus, FaSearch, FaCartPlus } from "react-icons/fa";
import HadLine from "../Components/HomeComponent/HadLine";
import Navbar from "../Components/HomeComponent/Navbar";

import img from '../assets/img3.jpg';
import ClickFromButton from "../Components/HomeComponent/ClickFromButton";
import AdCart from "../Components/HomeComponent/AdCart";
import PriceDetels from "../Components/Mens Premium/PriceDetels";
import { Link } from "react-router-dom";
import Footer from "../Components/HomeComponent/Footer";


const ScrollPages = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItemOpen, setSubItemOpen] = useState(null);


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
    const [adCart, setAdCart] = useState(false)

    return (
        <div>
            <div className="relative">
                <div className="bg-slate-50">

                    <HadLine />
                    <Navbar />
                    <div className="container mx-auto flex flex-col md:flex-row gap-5 lg:gap-[80px] p-5">
                        <div className="scrollbar w-full md:w-[30%] max-h-[500px] overflow-y-auto">
                            <div className="flex justify-between items-center mt-5 hidden md:block md:flex md:justify-between lg:flex" onClick={toggleItems}>
                                <h1 className="text-[25px] text-black font-bold capitalize ">New Arrival</h1>
                                {isOpen ? <FaMinus /> : <FaPlus />}
                            </div>
                            {isOpen && (
                                <div className="ml-5 hidden md:block">
                                    {items.map((item) => (
                                        <div key={item} className="text-[16px] text-black font-bold opacity-80 capitalize">
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
                            <div className="input-field top-16  md:static   fixed z-50">
                                <div className="relative bg-slate-100 w-full flex">
                                    <input
                                        type="text"
                                        className="py-1 px-4 text-blue-600 border border-gray-300 focus:outline-none focus:border-blue-500 md:w-[600px] lg:w-[800px] w-[300px]"
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

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4 lg:mt-10">
                                {ImgItems.map((item, i) => (
                                    <div key={i} className="item text-center relative">
                                        <Link to="/Price" className="">
                                            <img src={item.Image} alt="" className="w-[180px] h-[180px] mx-auto" />
                                        </Link>
                                        <p className="absolute bg-red-600 text-white p-[1px] w-[70px] top-0 right-[36px]">Sale</p>
                                        <h2 className="mt-1">{item.Name}</h2>
                                        <button className="bg-slate-700 text-white p-0 w-[100px] mx-auto mt-1 hover:bg-yellow-400 hover:text-black transition-all">{item.Save}</button>
                                        <p className="mx-auto mt-1">{item.Price}</p>
                                        <div className="cart mt-1">


                                            <button onClick={() => setAdCart(!adCart)} className="icon flex items-center justify-center gap-4 bg-black p-1 w-full hover:bg-green-500 hover:text-white transition-all">
                                                <FaCartPlus className="text-white " />
                                                <h1 className="capitalize text-[15px] text-white">Buy Now</h1>
                                            </button>

                                        </div>
                                    </div>

                                ))}
                                {
                                    adCart && (
                                        <div onClick={() => setAdCart(adCart)} className="div z-[999] absolute top-[60px] ">
                                            <PriceDetels />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                   {/* Foote---start---- */}
                    <div className="div mt-[80px]">
                        <Footer />
                    </div>
                     {/* Foote---End---- */}
                </div>

                {/* Click---from--button---start */}
                <div className=" fixed top-[40px] right-[20px] z-50 hidden md:block">
                    <ClickFromButton />
                </div>
                {/* Click---from--button---End */}

                {/* add---cart---start */}
                     <div className="  top-0 fixed  right-0 z-50 h-screen">
                        <AdCart/>
                     </div>
                {/* add---cart---end */}
                

               



            </div>
        </div>
    );
};

export default ScrollPages;
