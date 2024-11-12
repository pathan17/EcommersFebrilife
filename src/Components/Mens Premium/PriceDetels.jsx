import { useState } from "react";
import MetroImg from "../../assets/mensMetro.jpg"; // Assuming this is your image path
import { Link } from "react-router-dom";


const PriceDetels = () => {
  const [activeSize, setActiveSize] = useState(null);
  const sizes = ['S', 'M', 'L', 'XL']; // Available sizes
 

  // Handle Add to Cart action (without redirecting)
  const handleAddToCart = () => {
    if (!activeSize) {
      alert('Please select a size');
    } else {
      alert(`Added size ${activeSize} to cart!`);
    
    }
  };



  return (
    <div className="bg-gray-200 w-full max-w-[500px] mx-auto p-5">
      <div className="container mx-auto flex flex-col sm:flex-row gap-5 lg:max-w-[1120px]">

        {/* Left Section: Product Image */}
        <div className="leftImg w-full flex flex-col items-center sm:items-start">
          <h1 className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold w-full text-center sm:text-left">
            Mens Metro Edition Premium Full Sleeve T-shirt - Endless
          </h1>
          {/* Image section (removed Link to prevent navigation) */}
          <Link to="/Price" className="img h-[200px] mt-4 cursor-pointer">
            <img src={MetroImg} alt="Mens Metro T-shirt" className="h-full object-cover" />
          </Link>

          <div className="mt-5">
            <Link to="/newPage"  className="bg-red-700 px-5 py-1 hover:bg-green-500 hover:text-white transition-all text-white cursor-pointer">
              Cancel
            </Link>
          </div>
        </div>

        {/* Right Section: Size and Quantity Selection */}
        <div className="rightText w-full flex flex-col justify-between">
          <div className="text text-center sm:text-left">

            {/* Choose Size Section */}
            <div className="mt-4">
              <p className="mt-4">Choose Size:</p>
              <div className="size mt-4 flex justify-center md:justify-start">
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <div key={size} className="size1">
                      <h2
                        className={`border px-1 rounded-lg w-[50px] text-center cursor-pointer 
                        ${activeSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={() => setActiveSize(size)} // Handle size selection
                      >
                        {size}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4">
              <div
                className="bg-black px-5 py-2 hover:bg-green-500 hover:text-white transition-all text-white flex items-center justify-center cursor-pointer"
                onClick={handleAddToCart} // Handle Add to Cart click
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
