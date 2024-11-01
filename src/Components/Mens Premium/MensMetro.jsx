import MensMetroImg from "../../assets/mensMetro.jpg";
import { useState } from 'react';

const MensMetro = () => {
    const [activeSize, setActiveSize] = useState(null);

    const sizes = ['S', 'M', 'L', 'XL'];

    // incrise--and---decress--start
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        // Here you would add the item to the cart
        console.log(`Added ${quantity} item(s) to the cart`);
    };
    // incrise--and---decress--end

    return (
        <div>
            {/* Mens Metro Edition Premium Full Sleeve T-shirt --stasrt */}
            <div className="main mt-5">
                <div className="container mx-auto flex justify-between items-center gap-[200px]  lg:max-w-[1120px]">
                    <div className="leftImg w-[30%] ">
                        <div className="img flex justify-center items-center h-[200px] w-[520px]">
                            <img src={MensMetroImg} alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="rightText w-[70%]">
                        <div className="text">
                            <h1 className=" text-black text-[30px] font-semibold ">Mens Metro Edition Premium Full Sleeve T-shirt - Endless</h1>
                            <p className="text-[30px]"> ৳ 640</p>
                            {/* Select---size--start */}
                            <p className="mt-4">Select Size:</p>
                            <div className="size mt-4">
                                <div className="size flex gap-2">
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
                            {/* Select---size--End */}

                           {/* increase--and-----decresae---start */}
                            <div className="addCart flex gap-5 mt-5">
                                <div className="bg px-5 py-0 bg-white text-black flex items-center gap-5">
                                    <h1 className="cursor-pointer text-[30px]" onClick={increaseQuantity}>+</h1>
                                    <h2>{quantity}</h2>
                                    <h1 className="cursor-pointer  text-[30px]" onClick={decreaseQuantity}>-</h1>
                                </div>
                                <div
                                    className="bg px-5 w-[140px] py-1 bg-gray-500 text-white flex items-center justify-center cursor-pointer"
                                    onClick={handleAddToCart}
                                >
                                    <span>+ Add To Cart</span>
                                </div>
                            </div>
                           {/* increase--and-----decresae---end */}

                           {/* PREMIUM--and---FABRIC---start */}
                            <div className="line mt-5 h-[1px] bg-black w-[500px]"></div>
                            <div className="PREMIUM mt-5">
                                <h1 className="text-black font-bold text-[18px]">PREMIUM FULL SLEEVE FOR MEN</h1>
                                <ul className=" mt-2 mb-2">
                                    <li>Regular fit, Crew Neck</li>
                                     <li>Mid-weight, 5.16 oz/yd2 (~175 GSM)</li>
                                </ul>
                            </div>
                            <div className="FABRIC mt-5">
                                <h1 className="text-black font-bold text-[18px]">FABRIC :</h1>
                                <ul className=" mt-2 mb-2">
                                    <li>Ringspun Combed Compact 100% Cotton, Organic</li>
                                     <li>Fabric Color: Reactive Dye, Enzyme, and silicon-washed</li>
                                     <li>Preshrunk to minimize shrinkage</li>
                                </ul>
                            </div>
                           {/* PREMIUM--and---FABRIC---End */}
                          
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Mens Metro Edition Premium Full Sleeve T-shirt --end */}
        </div>
    );
};

export default MensMetro;