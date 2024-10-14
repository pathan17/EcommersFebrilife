import FullSleevIMG from "../assets/IMG5.jpg";
import FullSleevIMG1 from "../assets/img6.jpg"

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
  );
};

export default HomeFullSleev;
