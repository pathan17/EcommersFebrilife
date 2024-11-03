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
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
    { IMG1: AntibackImg1 },
  ];

  return (
    <div>
      <div className="container p-1 mx-auto mt-[20px] lg:max-w-[1120px]">
      <Link to="/newPage">  
        <div className="flex flex-col lg:flex-row gap-5">
        
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-full lg:w-1/3">
              <div className="img">
                <img
                  src={item.IMG}
                  alt="img"
                  className="rounded-md h-[378px] lg:h-[350px] w-full"
                />
              </div>
            </div>
          ))}
         
          <div className="w-full lg:w-2/3 flex flex-wrap gap-4">
          
            {FullSleevImg.map((item, i) => (
              <div key={i} className="relative w-1/2 sm:w-1/3 md:w-[49%] lg:w-[23%] mx-auto">
                <Link to="/Price">
                  <img src={item.IMG1} alt="image" className="rounded-md w-full" />
                  {i === FullSleevImg.length - 1 && (
                    <div className="absolute inset-0 h-full w-full bg-black opacity-40"></div>
                  )}
                  </Link>
                  <div className="absolute price bottom-[-6px]">
                    <h1 className="text-black bg-white px-[30px] py-[1px] lg:ml-[30px] ml-[45px] rounded-md shadow-lg">
                      ৳1000
                    </h1>
                  </div>
               
                
                {i === FullSleevImg.length - 1 && (
                  
                  <h1 className="absolute top-[30px] left-1/2 transform -translate-x-1/2 text-white text-[25px]  px-4 py-2 rounded-md z-10 uppercase font-semibold">
                  
                   View More
                 
                  </h1>
                 
                )}
                
              </div>
            ))}
          </div>
        
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Antibacktriya;
