import { useState } from "react";
import MensMetroImg from "../../assets/mensMetro.jpg";

const PriceDetels = () => {
    const [activeSize, setActiveSize] = useState(null);
    const sizes = ['S', 'M', 'L', 'XL'];
    const [quantity, setQuantity] = useState(''); // Added quantity state

    const handleAddToCart = () => {
        setQuantity(`Added ${quantity} item(s) to the cart`);
    };

    return (
        <div className="bg-gray-200 w-[500px] mx-auto p-5">
            <div className="container mx-auto flex   flex-col md:flex-row gap-[100px] lg:max-w-[1120px]">
                <div className="leftImg w-full md:w-[30%] flex flex-col items-center md:items-start">
                    <h1 className="text-black text-[18px] md:text-[28px] lg:text-[20px] font-semibold w-[200px]">Mens Metro Edition Premium Full Sleeve T-shirt - Endless</h1>
                    <div className="img h-[200px] mt-4">
                        <img src={MensMetroImg} alt="Mens Metro T-shirt" className="h-full object-cover" />
                    </div>
                    <div className="mt-5">
                        <span className="bg-red-700 px-[40px] py-2 hover:bg-green-500 hover:text-white transition-all text-white cursor-pointer">
                            Cancel
                        </span>
                    </div>
                </div>

                <div className="rightText w-full md:w-[70%] ">
                    <div className="text text-center md:text-left h-full flex flex-col justify-between">
                        <div className="mt-10">
                            <p className="mt-4">Choose Size:</p>
                            <div className="size mt-4 flex justify-center md:justify-start">
                                <div className="flex gap-2 flex-wrap">
                                    {sizes.map((size) => (
                                        <div key={size} className="size1">
                                            <h2
                                                className={`border px-1 rounded-lg w-[50px] text-center cursor-pointer 
                                                  ${activeSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                                                onClick={() => setActiveSize(size)}
                                            >
                                                {size}
                                            </h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div
                                className="bg-black px-5 w-[140px]  py-1 hover:bg-green-500 hover:text-white transition-all text-white flex items-center justify-center cursor-pointer"
                                onClick={handleAddToCart}
                            >
                                <span>Add To Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceDetels;
