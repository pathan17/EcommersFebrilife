import { Link } from "react-router-dom";
import MensMetroImg from "../../assets/mensMetro.jpg";
import { useState } from 'react';

const MensMetro = () => {
    const [activeSize, setActiveSize] = useState(null);
    const sizes = ['S', 'M', 'L', 'XL'];
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} item(s) to the cart`);
    };

    return (
        <div className="main mt-5 ">
            <div className="container mx-auto flex flex-col md:flex-row md:gap-0 md:justify-center  gap-1 lg:gap-[40px] lg:max-w-[1120px]">
                <div className="leftImg w-full md:w-[30%] lg:w-[30%] flex justify-center items-center">
                    <Link to="/newPage" className="img h-[500px] w-full lg:h-[520px] md:w-[600px] flex justify-center items-center lg:mt-3">
                        <img src={MensMetroImg} alt="" className="h-full object-cover" />
                    </Link>
                </div>

                <div className="rightText w-full md:w-[70%] lg:w-[70%] flex flex-col items-center md:items-start h-[500px]">
                    <div className="text text-center md:text-left h-full flex flex-col justify-between">
                        <div>
                            <h1 className="text-black text-[24px] md:text-[28px] lg:text-[30px] font-semibold">Mens Metro Edition Premium Full Sleeve T-shirt - Endless</h1>
                            <p className="text-[24px] md:text-[26px] lg:text-[30px]"> ৳ 640</p>

                            <p className="mt-4">Select Size:</p>
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

                        <div className="addCart flex gap-5 mt-5 justify-center md:justify-start">
                            <div className="bg px-5 py-0 bg-white text-black flex items-center gap-5">
                                <h1 className="cursor-pointer text-[30px]" onClick={increaseQuantity}>+</h1>
                                <h2>{quantity}</h2>
                                <h1 className="cursor-pointer text-[30px]" onClick={decreaseQuantity}>-</h1>
                            </div>
                            <div
                                className="bg px-5 w-[140px] py-1 bg-gray-500 hover:bg-green-500 hover:text-white transition-all text-white flex items-center justify-center cursor-pointer"
                                onClick={handleAddToCart}
                            >
                                <span className="">+ Add To Cart</span>
                            </div>
                        </div>

                        <div className="line mt-5 h-[1px] bg-black w-full"></div>
                        <div className="PREMIUM mt-5 text-center md:text-left">
                            <h1 className="text-black font-bold text-[18px]">PREMIUM FULL SLEEVE FOR MEN</h1>
                            <ul className="mt-2 mb-2">
                                <li>Regular fit, Crew Neck</li>
                                <li>Mid-weight, 5.16 oz/yd2 (~175 GSM)</li>
                            </ul>
                        </div>
                        <div className="FABRIC mt-5 text-center md:text-left">
                            <h1 className="text-black font-bold text-[18px]">FABRIC :</h1>
                            <ul className="mt-2 mb-2">
                                <li>Ringspun Combed Compact 100% Cotton, Organic</li>
                                <li>Fabric Color: Reactive Dye, Enzyme, and silicon-washed</li>
                                <li>Preshrunk to minimize shrinkage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MensMetro;
