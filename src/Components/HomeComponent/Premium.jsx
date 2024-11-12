import { FaChevronRight } from "react-icons/fa";

const Premium = () => {
  return (
    <div className="px-3 md:px-[120px] ">
      <div className="new  bg-green-200  h-[100px] lg:h-[100px] container mx-auto lg:max-w-[1120px] mt-[60px]">
        <div className="text-center p-4 lg:p-0">
          <p className="text-green-500 text-[12px] sm:text-sm md:text-base lg:mt-3">
            THE BEST QUALITY SOCKS YOU CAN FIND IN BANGLADESH
          </p>
          <h2 className=" text-green-900 lg:text-[35px] text-[24px] sm:text-[30px] font-bold">
            Premium Antibacterial Socks
          </h2>
          <div className="flex justify-center items-center ">
            <span className="flex gap-1 text-green-700 text-sm sm:text-base md:text-md lg:text-[15px] ">
              Visit Store <FaChevronRight className="text-green-700 lg:mt-2 lg:text-[10px] mt-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
