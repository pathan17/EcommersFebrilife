import { Link } from "react-router-dom";
import JacketImg from "../../assets/MensJacketImg.jpg";

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
      <div className="container p-1 px-3  mx-auto mt-[80px] lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <Link to="/Price" key={i} className="item w-full lg:w-1/3">
              <div className="img">
                <img src={item.IMG} alt="img" className=" h-[378px] lg:h-[350px] sm:h-[255px] sm:w-full md:h-[340px] " />
              </div>
            </Link>
          ))}

          <div className="w-full lg:w-2/3 flex flex-wrap gap-2 mx-auto md:flex-wrap ">
            {FullSleevImg.map((item, i) => (
              <Link to="/Price" key={i} className="w-1/2 sm:w-[48%] md:w-[49%] lg:w-[23%] relative mx-auto">


                <div>
                  <img src={item.IMG1} alt="image" className="w-full " />
                  {i === FullSleevImg.length - 1 && (
                    <div className="absolute inset-0 h-full w-full bg-black opacity-40"></div>
                  )}
                </div>


                <div className="absolute inset-0 h-full w-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
                <div className=" absolute price bottom-[-6px] ">
                  <Link to="/Price">
                    <h1 className="text-black bg-white px-[30px] py-[1px] lg:ml-[30px] ml-[45px] rounded-md shadow-lg">
                      ৳1000
                    </h1>

                  </Link>
                </div>
                
                {i === FullSleevImg.length - 1 && (
                  
                  <h1 className="absolute top-[30px] left-1/2 transform -translate-x-1/2 text-white text-[25px]  px-4 py-2 rounded-md z-10 uppercase font-semibold">
                  
                   View More
                 
                  </h1>
                 
                )}
              </Link>
            ))}

            {/* Add View More text or button after the last image */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MensJacket;
