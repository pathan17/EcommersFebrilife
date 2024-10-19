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
      <div className=" mb-5 mt-5 container mx-auto lg:max-w-[1120px]">
        <div className=" flex  gap-5 ">
          {FullSleev.map((item, i) => (
            <div key={i} className="item w-[30%] sm:mx-auto sm:hidden lg:block">
              <div className="img w-[100%] ">
                <img src={item.IMG} alt="img" className=" rounded-md h-[360px] sm:h-[255px] sm:w-[100%] md:h-[340px]  lg:h-[360px] " />
              </div>
            </div>
          ))}
          
            <div className="w-[70%] flex flex-wrap gap-[15px] sm:flex-wrap sm:mx-auto ">
                {
                    FullSleevImg.map((item,i)=>(
                        <div key={i} className="w-[22.4%] sm:w-[47%] lg:w-[22.4%]">
                        
                            <img src={item.IMG1} alt="" className="md:w-[100%] "/>
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
