import Img1 from '../../assets/MenShort.jpg';
import { FaChevronRight } from "react-icons/fa";

const bulkOrderImage = [
    { img: Img1 },
    { img: Img1 },
    { img: Img1 },
    { img: Img1 },
    { img: Img1 },
    { img: Img1 },
];

const BlukOrderImg = () => {
    return (
        <div>
            <div className="main  container mx-auto lg:max-w-[1120px] mb-10 mt-[40px] bg-slate-300 ">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[500px]">
                    <div className="text w-full lg:w-[70%]">
                        <h1 className='flex text-[24px] sm:text-[28px] md:text-[30px] text-blue-400 gap-1'>
                            Bulk Order / Wholesale <FaChevronRight className='mt-2 text-[16px] sm:text-[20px]' />
                        </h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]'>
                            We provide plain t-shirts and apparel for all your custom branding needs from the top brands worldwide at unbeatable wholesale prices. With no minimum orders, everyone can enjoy the benefits of buying bulk t-shirts without ordering bulk quantities.
                        </p>
                    </div>
                    <div className="img w-full lg:w-[30%]">
                        <div className="flex flex-wrap gap-2 justify-center items-center">
                            {
                                bulkOrderImage.map((item, i) => (
                                    <div key={i} className="w-[45%] sm:w-[30%] md:w-[20%] lg:w-[30%]">
                                        <img src={item.img} alt="img" className='w-full h-auto' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlukOrderImg;
