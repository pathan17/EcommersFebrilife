import FullSleevIMG from "../../assets/IMG5.jpg";
import FullSleevIMG1 from "../../assets/img6.jpg";
import { Link } from "react-router-dom";

const HomeFullSleev = () => {
  const FullSleev = [
    {
      IMG: FullSleevIMG,
    },
  ];

  const FullSleevImg = [
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
    {
      IMG1: FullSleevIMG1,
    },
  ];

  return (
    <div>
      <div className="mb-5 md:px-[40px] lg:px-[10px] mt-5  container mx-auto lg:max-w-[1120px]">
        <Link to="/Price">  
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-full lg:w-1/3 sm:hidden lg:block">
              <div className="img w-full ">
                <img
                  src={item.IMG}
                  alt="img"
                  className=" h-[360px] sm:h-[255px] sm:w-full md:h-[340px] lg:h-[350px] mx-auto"
                />
              </div>
            </div>
          ))}

          <div className="w-full lg:w-2/3 flex flex-wrap gap-1 sm:flex-wrap sm:mx-auto">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-1/2 sm:w-[47%] lg:w-[23%] mx-auto relative">
                <div>
                  <img src={item.IMG1} alt="" className="w-full " />
                  {i === FullSleevImg.length - 1 && (
                    <div className="absolute inset-0 h-full w-full bg-black opacity-40"></div>
                  )}
                </div>
                <div className="absolute inset-0 h-full w-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>

                <div className=" absolute price bottom-[-6px] ">
                  <Link to="/Price">
                    <h1 className="text-black bg-white px-[30px] py-[2px] lg:ml-[37px] ml-[47px] rounded-md shadow-lg">
                      ৳1000
                    </h1>
                  </Link>
                </div>
                <Link to="/newPage">  
                {i === FullSleevImg.length - 1 && (
                  
                  <h1 className="absolute top-[30px] left-1/2 transform -translate-x-1/2 text-white text-[25px]  px-4 py-2 rounded-md z-10 uppercase font-semibold">
                  
                   View More
                 
                  </h1>
                 
                )}
                </Link>
              </div>

            ))}

          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeFullSleev;
