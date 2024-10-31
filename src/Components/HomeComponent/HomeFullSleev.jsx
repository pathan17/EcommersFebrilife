import FullSleevIMG from "../../assets/IMG5.jpg";
import FullSleevIMG1 from "../../assets/img6.jpg";

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
      <div className="mb-5 p-5 mt-5  container mx-auto lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-full lg:w-1/3 sm:hidden lg:block">
              <div className="img w-full ">
                <img
                  src={item.IMG}
                  alt="img"
                  className="rounded-md h-[360px] sm:h-[255px] sm:w-full md:h-[340px] lg:h-[300px] mx-auto"
                />
              </div>
            </div>
          ))}

          <div className="w-full lg:w-2/3 flex flex-wrap gap-3 sm:flex-wrap sm:mx-auto">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-1/2 sm:w-[47%] lg:w-[20%] mx-auto relative">
                <img src={item.IMG1} alt="" className="w-full " />
                <div className=" absolute price bottom-[-6px] ">
                       <h1 className="text-black bg-white px-[30px] py-[1px] ml-4 rounded-md">৳1000</h1>
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
