import image from "../assets/img3.jpg"

const NewArriVal = () => {

    const LinkImag=[
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
        {
          Link:"",
          img:image,
        },
       
       
       
      ]
    return (
        <div>
             <div className="main-newArrival mt-4">
        <div className="new bg-red-50 h-[100px] container mx-auto lg:max-w-[1120px]">
          <div className="flex justify-center items-center">
            <h2 className="mt-6 text-yellow-700 text-[30px] font-bold">
              NEW ARRIVAL
            </h2>
          </div>
        </div>

         <div className="container mx-auto lg:max-w-[1120px]">
          <div className="">
            <div className="items flex flex-wrap gap-[21px] mt-2  justify-center items-center  ">
                   {
                    LinkImag.map((item,i)=>(
                          <div key={i} className="item bg-white  rounded-md w-[15%]">
                                <div className="div flex justify-center items-center">
                                <h1 className="  text-center bg-white w-[100px] text-black rounded-lg z-20"> Link </h1>
                                </div>
                                <div className="img mx-auto">
                                <img src={item.img} alt="img" className=" mt-[-20px] rounded-md" />
                                </div>
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

export default NewArriVal;