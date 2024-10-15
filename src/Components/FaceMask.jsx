import MaskImg from "../assets/MaskImg.jpg";
import MaskImg1 from "../assets/mask1.jpg";

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
            <div>
      <div className="container mx-auto mb-5  mt-5 lg:max-w-[1120px]">
        <div className=" flex  gap-5 ">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-[30%]">
              <div className="img ">
                <img src={item.IMG} alt="img" className=" rounded-md h-[378px] " />
              </div>
            </div>
          ))}
          
            <div className="w-[70%] flex flex-wrap gap-[15px]">
                {
                    FullSleevImg.map((item,i)=>(
                        <div key={i} className="w-[23.5%]">
                            <img src={item.IMG1} alt="" />
                        </div>
                    ))
                }
            </div>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default FaceMask;