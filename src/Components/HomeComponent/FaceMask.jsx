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
      <div className="container mx-auto p-6 mb-5 mt-5 lg:max-w-[1120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-full lg:w-1/3">
              <div className="img">
                <img src={item.IMG} alt="img" className="rounded-md h-[378px] lg:h-[340px] w-full sm:h-[255px] md:h-[340px]" />
              </div>
            </div>
          ))}
          
          <div className="w-full lg:w-2/3 flex flex-wrap  gap-3 ">
            {FullSleevImg.map((item, i) => (
              <div key={i} className="w-1/2 sm:w-[48%] md:w-[49%] lg:w-[23%] mx-auto">
                <img src={item.IMG1} alt="" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceMask;
