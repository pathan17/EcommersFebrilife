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
      <div className="mb-5  mt-5  container mx-auto lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <Link to="/Price" key={i} className="item w-full lg:w-1/3 sm:hidden lg:block">
              <div className="img w-full ">
                <img
                  src={item.IMG}
                  alt="img"
                  className="rounded-md h-[360px] sm:h-[255px] sm:w-full md:h-[340px] lg:h-[350px] mx-auto"
                />
              </div>
            </Link>
          ))}

          <div className="w-full lg:w-2/3 flex flex-wrap gap-1 sm:flex-wrap sm:mx-auto">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-1/2 sm:w-[47%] lg:w-[23%] mx-auto relative">
                <Link to="/Price">
                <img src={item.IMG1} alt="" className="w-full " />
                </Link>
                <div className=" absolute price bottom-[-6px] ">
                       <Link to="/Price"><h1 className="text-black bg-white px-[30px] py-[1px] lg:ml-[37px] ml-[47px] rounded-md">৳1000</h1></Link>
                </div>
              </div>

            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFullSleev;
