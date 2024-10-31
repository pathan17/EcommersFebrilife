import AntibacktriyaImg from "../../assets/AntibacktriyaImg1.jpg";
import AntibackImg1 from "../../assets/AntibacktryaImag.jpg";
import { Link } from "react-router-dom";

const Antibacktriya = () => {
  const FullSleev = [
    {
      IMG: AntibacktriyaImg,
    },
  ];
  
  const FullSleevImg = [
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
    {
      IMG1: AntibackImg1,
    },
  ];

  return (
    <div>
      <div className="container p-6 mx-auto mt-[20px] lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-full lg:w-1/3">
              <div className="img">
                <img
                  src={item.IMG}
                  alt="img"
                  className="rounded-md h-[378px] lg:h-[290px] w-full"
                />
              </div>
            </div>
          ))}

          <div className="w-full lg:w-2/3 flex flex-wrap gap-3">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-1/2 sm:w-1/3 md:w-[49%] lg:w-1/5 relative mx-auto">
                <img src={item.IMG1} alt="image" className="rounded-md w-full" />
                <div className="absolute inset-0 h-full w-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}

            {/* Add View More text or button after the last image */}
            <div className="mt-5 text-center w-full">
              <Link className="text-white text-[20px]">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antibacktriya;
