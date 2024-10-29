import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ScrollPages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItemOpen, setSubItemOpen] = useState(null); // State for which sub-item is open

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
        "men",
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
        " Trouser",
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
        <div className="container mx-auto">
            <div className="flex justify-center items-center">
                <div className="main flex gap-[80px] w-full">
                    <div className="scrollbar w-[30%]">
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
                                                        <p className=" text-[13px] text-gray-800"  onClick={() => handleItemClick(subItem)}>{subItem}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="scrollbar w-[70%]">
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
                                <h2>Details for :   {selectedItem}</h2>
                               
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollPages;
