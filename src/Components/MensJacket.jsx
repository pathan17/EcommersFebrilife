import { Link } from "react-router-dom";
import JacketImg from "../assets/MensJacketImg.jpg"

const MensJacket = () => {
  const FullSleev = [
    {
      IMG: JacketImg,
    },
  ];

  const FullSleevImg = [
    {
      IMG1: JacketImg,
    },
    {
      IMG1: JacketImg,
    },
    {
      IMG1: JacketImg,
    },
    {
      IMG1: JacketImg,
    },
    {
      IMG1: JacketImg,
    },
    {
      IMG1: JacketImg,
    },
  ];

  return (
    <div>
      <div className="container mx-auto  mt-[80px] lg:max-w-[1120px]">
        <div className="flex gap-5">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-[30%]">
              <div className="img">
                <img src={item.IMG} alt="img" className="rounded-md h-[378px]" />
              </div>
            </div>
          ))}

          <div className="w-[70%] flex flex-wrap gap-[15px] relative">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-[23.5%] relative ">
                <img src={item.IMG1} alt="image" className="" />
                <div className="absolute inset-0 h-full w-full bg-black  opacity-0 hover:opacity-40  transition-opacity duration-300 "></div>

              </div>
            ))}

            {/* Add View More text or button after the last image */}
            <div className=" mt-[50px] ml-[-140px] w-[10px] z-[999] ">
              <Link className=" text-white text-[30px]">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensJacket;
