import { useState } from "react";
import MensMetroImg from "../../assets/mensMetro.jpg"; // Assuming this is your image path

const PriceDetels = () => {
  const [activeSize, setActiveSize] = useState(null); // Track selected size
  const sizes = ['S', 'M', 'L', 'XL']; // Available sizes

  // Handle Add to Cart action
  const handleAddToCart = () => {
    if (!activeSize) {
      // If no size is selected, notify user to select a size
      alert('Please select a size');
    }
  };

  // Handle size button click to prevent default behavior like form submission or link navigation
  const handleSizeClick = (event, size) => {
    event.preventDefault(); // Prevents default anchor behavior or form submission
    setActiveSize(size); // Set the active size
  };

  return (
    <div className="bg-gray-200 w-full max-w-[500px] mx-auto p-5">
      <div className="container mx-auto flex flex-col sm:flex-row gap-5 lg:max-w-[1120px]">
        
        {/* Left Section: Product Image */}
        <div className="leftImg w-full flex flex-col items-center sm:items-start">
          <h1 className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold w-full text-center sm:text-left">
            Mens Metro Edition Premium Full Sleeve T-shirt - Endless
          </h1>
          <div className="img h-[200px] mt-4">
            <img src={MensMetroImg} alt="Mens Metro T-shirt" className="h-full object-cover" />
          </div>
          <div className="mt-5">
            <span className="bg-red-700 px-5 py-1 hover:bg-green-500 hover:text-white transition-all text-white cursor-pointer">
              Cancel
            </span>
          </div>
        </div>

        {/* Right Section: Size and Quantity Selection */}
        <div className="rightText w-full flex flex-col justify-between">
          <div className="text text-center sm:text-left">
            
            {/* Choose Size Section */}
            <div className="mt-4">
              <p className="mt-4">Choose Size:</p>
              <div className="size mt-4 flex justify-center sm:justify-start">
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <div key={size} className="size1">
                      <button
                        className={`border px-2 py-1 rounded-lg w-[50px] text-center cursor-pointer 
                          ${activeSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={(e) => handleSizeClick(e, size)} // Prevent default action and set size
                      >
                        {size}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity Selection */}
          

            {/* Add to Cart Button */}
            <div className="mt-4">
              <div
                className="bg-black px-5 py-2 hover:bg-green-500 hover:text-white transition-all text-white flex items-center justify-center cursor-pointer"
                onClick={handleAddToCart} // Handle add to cart click
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
