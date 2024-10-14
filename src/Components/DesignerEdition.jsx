import deginerImage from "../assets/img4.jpg";

const DesignerEdition = () => {
    const deginerImg=[
        {
          IMAGE :deginerImage,
        },
        {
          IMAGE :deginerImage,
        },
        {
          IMAGE :deginerImage,
        },
       ]
    return (
        <div>
            <div className="container mx-auto lg:max-w-[1120px]">
          <div className="">
            <div className="items flex flex-wrap gap-[5px]  mt-2  justify-center  ">
                   {
                    deginerImg.map((item,i)=>(
                          <div key={i} className="item bg-white mt-[50px]  rounded-md w-[33%]">
                                
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