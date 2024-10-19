import { FaChevronRight } from "react-icons/fa";
import FabrilifeImg from "../assets/FabrilifeImg.png";

const FabriLife = () => {
    return (
        <div>
            <div className="Fabrilife p-6 container mx-auto lg:max-w-[1120px] mt-[80px]">
                <div className="main flex flex-col lg:flex-row justify-between items-center gap-4 ">
                    <div className="text w-full lg:w-[70%]">
                        <span className="flex gap-2">
                            <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] text-black opacity-80">Fabrilife</h2>
                            <FaChevronRight className="mt-2 sm:mt-5 text-green-700 text-[24px] sm:text-[30px]" />
                        </span>
                        <h1 className="text-black text-[20px] sm:text-[24px] lg:text-[28px] opacity-80">Because comfort and confidence go hand in hand.</h1>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-black">
                            We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident. Apart from the fabric, design, and fit, we go through strict quality control parameters to give you what you truly deserve. The power of a good outfit is how it can influence your perception of yourself.
                        </p>
                    </div>
                    <div className="img w-full lg:w-[30%]">
                        <img src={FabrilifeImg} alt="" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FabriLife;
