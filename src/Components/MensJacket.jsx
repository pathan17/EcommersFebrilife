import { Link } from "react-router-dom";
import JacketImg from "../assets/MensJacketImg.jpg";

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
    {
      IMG1: JacketImg,
    },
    {
      IMG1: JacketImg,
    },
  ];

  return (
    <div>
      <div className="container  p-6 mx-auto mt-[80px] lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-full lg:w-1/3">
              <div className="img">
                <img src={item.IMG} alt="img" className="rounded-md h-[378px] lg:h-[310px] sm:h-[255px] sm:w-full md:h-[340px] " />
              </div>
            </div>
          ))}

          <div className="w-full lg:w-2/3 flex flex-wrap gap-3 relative mx-auto md:flex-wrap ">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-1/2 sm:w-[48%] md:w-[49%] lg:w-[21%] relative mx-auto">
                <img src={item.IMG1} alt="image" className="w-full rounded-md " />
                <div className="absolute inset-0 h-full w-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}

            {/* Add View More text or button after the last image */}
            <div className="mt-[50px] text-center w-full">
              <Link className="text-white text-[20px]">
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
