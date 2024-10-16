import Img1 from '../assets/MenShort.jpg';
import { FaChevronRight } from "react-icons/fa";


const blukOrderImage=[
    {
        img:Img1,
    },
    {
        img:Img1,
    },
    {
        img:Img1,
    },
    {
        img:Img1,
    },
    {
        img:Img1,
    },
    {
        img:Img1,
    },
]
const BlukOrderImg = () => {
    return (
        <div>
            <div className="main container mx-auto lg:max-w-[1120px] mb-10 mt-[40px] bg-slate-300 p-5 ">
                <div className="main flex justify-center items-center gap-[500px]">
                <div className="text w-[70%]">
                    <h1 className=' flex text-[30px] text-blue-400 gap-1'>Bulk Order / Wholesale <FaChevronRight  className=' mt-4 text-[20px]'/> </h1>
                    <p className=' w-[]'>We provide plain t-shirts and apparel fo all your custom branding needs from the top brands worldwide at unbeatable wholesale prices. With no minimum orders, everyone can enjoy the benefits of buying bulk t-shirts without ordering bulk quantities.</p>
                </div>
                <div className="img w-[30%] ">
                <div className=" flex flex-wrap gap-[5px] justify-center items-center">
                {
                    blukOrderImage.map((item,i)=>(
                        <div key={i} className="w-[30%]">
                            <img src={item.img} alt="img" className='h-[]' />
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