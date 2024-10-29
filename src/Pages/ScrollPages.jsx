import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


const ScrollPages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItemOpen, setSubItemOpen] = useState(null); // State for sub-items

    // Example items array
    const items = [
        "Half Sleeve T-shirt",
        "Full Sleeve T-shirt",
        "Maggie Shirt",
        "Polo T-shirt",
        "Graphic Tee",
        "V-Neck T-shirt",
        "Tank Top",
    ];
  
    const displayedItems = items.slice(0, Math.floor(items.length * 0.8)); // Get 80% of items

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
                            <h1 className=" text-[25px] text-black font-bold capitalize" >newArrival</h1>
                            {isOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                        {isOpen && (
                            <div className="item-list ml-[30px]">
                                {displayedItems.map((item) => (
                                    <div className=" text-[22px] text-black font-bold opacity-80 capitalize" key={item}>
                                        <div onClick={() => { handleItemClick(item); toggleSubItems(item); }} className="flex justify-between cursor-pointer">
                                            <p>{item}</p>
                                            {subItemOpen === item ? <FaMinus /> : <FaPlus />}
                                        </div>
                                        {subItemOpen === item && (
                                            <div className="ml-[20px] mt-2 text-[19px] text-gray-600 capitalize">
                                                <p>Sub-item 1 for {item}</p>
                                                <p>Sub-item 2 for {item}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="scrollbar w-[70%]">
                        {/* INPUT FIELD START */}
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
                        {/* INPUT FIELD END */}
                        {selectedItem && (
                            <div className="item-details">
                                <h2>Details for {selectedItem}</h2>
                                <p>This is where you can add more information about the selected item.</p>
                                {/* Add more details or actions here */}
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollPages;
