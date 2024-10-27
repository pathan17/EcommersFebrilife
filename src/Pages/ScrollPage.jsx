import { useState } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import bag from "../assets/bag.png"
import { IoIosArrowForward } from "react-icons/io";

const ScrollPage = () => {
    // State to keep track of selected options
    const [selectedOptions, setSelectedOptions] = useState(Array(10).fill("select"));
    // State to track the currently selected item for the right pane
    const [selectedItem, setSelectedItem] = useState(null);
    const [cart, setCart] = useState(true);

    const handleSelectChange = (index, event) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = event.target.value;
        setSelectedOptions(newSelectedOptions);
    };

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };


    return (
        <div className="relative mb-10">
            <div className="main flex gap-8 container mx-auto p-10">
                <div className="ListScroll w-[30%]" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    <ul>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-blue-400 text-[20px] cursor-pointer"
                                onClick={() => handleItemClick(index)}
                            >
                                <select
                                    value={selectedOptions[index]}
                                    onChange={(event) => handleSelectChange(index, event)}
                                    className="border rounded-sm bg-blue-600 h-5 w-5 text-white text-[1px]"
                                >
                                </select>

                                <span>New Arrival</span>
                                <BsLightningCharge className="text-yellow-400 mt-[5px]" />
                            </li>

                        ))}
                    </ul>
                </div>
                <div className="MainListScroll w-[70%] ml-4 p-4 border border-gray-300" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {selectedItem !== null ? (
                        <div>
                            <h2 className="text-xl font-bold">Details for Item {selectedItem + 1}</h2>
                            <p>Selected Option: {selectedOptions[selectedItem]}</p>
                            {/* You can add more details here as needed */}
                            <p>Lorem Aut voluptatibus,ui, ligula nec massa hendrerit, in vulputate ipsum dapibus.</p>
                        </div>
                    ) : (
                        <p>Select an item to see details.</p>
                    )}
                </div>




            </div>


           <div className=" ml-[1100px] absolute top-0 z-[999]">
           {
               
               cart ?
                  
                    

                   <div  className=" ml-[-50px] opacity-[100%]">
                       <div className=" absolute  bg-gray-400 h-full w-[300px] z-[999] ">
                           <div className="div bg-slate-500 h-[40px] w-full top-0 flex gap-x-[100px] text-white z-[999]">
                               <div onClick={() => setCart(!cart)} className="cros text-[30px] text-red-600 text-center mt-1 font-bold"><IoMdClose /></div>
                               <div className="text">
                                   <h1 className="text-center mt-2">CART</h1>
                               </div>

                           </div>
                           <div className="cartImg z-[999]">
                               <div className="img mt-6">
                                   <img src={bag} alt="img" className=" h-[70px] w-[70px] mx-auto" />
                               </div>
                               <div className="text mt-4">
                                   <h1 className=" text-center text-gray-300">your Cart is Empty</h1>
                               </div>
                               <div className="icon-btn flex justify-center items-center mt-5">

                                   <p className=" bg-slate-500 text-white flex py-2 px-4">start shoping <IoIosArrowForward className="mt-1.5" /></p>

                               </div>
                           </div>
                       </div>
                   </div>
                   :
                   <div  className="icon bg-blue-600 w-[40px] h-[40px] rounded-md absolute ml-[200px] mt-28">
                       <span onClick={() => setCart(!cart)}className=" absolute  text-[15px] text-white content[''] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><FaShoppingCart  /></span>
                   </div>
           }
           </div>

        </div>
    );
};

export default ScrollPage;