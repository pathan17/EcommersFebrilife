import { FaChevronRight } from "react-icons/fa";

const Premium = () => {
  return (
    <div>
      <div className="new  sm:p-6 bg-green-200 h-[100px] container mx-auto lg:max-w-[1120px] mt-[60px]">
        <div className="text-center">
          <p className="text-green-500 lg:mb-[-17px] text-xs sm:text-sm md:text-base">
            THE BEST QUALITY SOCKS YOU CAN FIND IN BANGLADESH
          </p>
          <h2 className="py-1 text-green-900 text-[24px] sm:text-[30px] font-bold">
            Premium Antibacterial Socks
          </h2>
          <div className="flex justify-center items-center ">
            <span className="flex gap-1 text-green-700 text-sm sm:text-base md:text-lg lg:mt-[-10px]">
              Visit Store <FaChevronRight className="text-green-700 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
