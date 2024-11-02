import { Link } from "react-router-dom";
import MaskImg from "../../assets/MaskImg.jpg";
import MaskImg1 from "../../assets/mask1.jpg";

const FaceMask = () => {
  const FullSleev = [
    {
      IMG: MaskImg,
    },
  ];

  const FullSleevImg = [
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
    {
      IMG1: MaskImg1,
    },
  ];

  return (
    <div>
      <div className="container mx-auto  mb-5 mt-5 lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <Link to="/Price" key={i} className="item w-full lg:w-1/3">
              <div className="img">
                <img src={item.IMG} alt="img" className="rounded-md h-[378px] lg:h-[340px] w-full sm:h-[255px] md:h-[340px]" />
              </div>
            </Link>
          ))}
          
          <div className="w-full lg:w-2/3 flex flex-wrap  gap-3 ">
            {FullSleevImg.map((item, i) => (
              <Link to="/Price" key={i} className="w-1/2 sm:w-[48%] md:w-[49%] lg:w-[23%] mx-auto relative">
                <img src={item.IMG1} alt="" className="w-full" />
                <div className=" absolute price bottom-[-6px] ">
                       <Link to="/Price"><h1 className="text-black bg-white px-[30px] py-[1px] ml-8 rounded-md">৳1000</h1></Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceMask;
