import MensShort from "../../assets/MenShort.jpg";

const DesignerEdition = () => {
    const deginerImg=[
        {
          IMAGE :MensShort,
        },
        {
          IMAGE :MensShort,
        },
        {
          IMAGE :MensShort,
        },
        {
            IMAGE :MensShort,
        },
        {
            IMAGE :MensShort,
          
        },
          
        {
            IMAGE :MensShort,
          
        },
       ]
    return (
        <div>
            <div className="container p-6 mx-auto lg:max-w-[1120px]">
          <div className="">
            <div className="items flex flex-wrap gap-[22px]  mt-[40px]  justify-center  ">
                   {
                    deginerImg.map((item,i)=>(
                          <div key={i} className="item bg-white mt-[50px]  rounded-md w-[15%]">
                                
                                <div className="img mx-auto">
                                <img src={item.IMAGE} alt="img" className=" mt-[-20px] rounded-md" />
                                </div>
                          </div>
                    ))
                   }
            </div>
          </div>
         </div>
        </div>
    );
};

export default DesignerEdition;