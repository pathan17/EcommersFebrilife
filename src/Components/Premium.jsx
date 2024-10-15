import { FaChevronRight } from "react-icons/fa";

const Premium = () => {
    return (
        <div>
       <div className="new bg-green-200 h-[100px] container mx-auto lg:max-w-[1120px] mt-10">
          <div className=" text-center">
           <p className=" text-green-500">THE BEST QUALITY SOCKS YOU CAN FIND IN BANGLADESH</p>
            <h2 className="py-1 text-green-900 text-[30px] font-bold">
              Premium Antibackterial Socks
            </h2>
            <div className="div flex justify-center items-center">
            <span className="flex gap-2 text-green-700">Visit Store <FaChevronRight className=" text-green-700 mt-1" /></span>
            </div>
          </div> 
        </div>
        </div>
    );
};

export default Premium;