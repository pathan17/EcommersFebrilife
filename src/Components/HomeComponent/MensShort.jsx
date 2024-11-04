import { Link } from "react-router-dom";
import MensShort from "../../assets/MenShort.jpg";

const DesignerEdition = () => {
  const deginerImg = [
    {
      IMAGE: MensShort,
    },
    {
      IMAGE: MensShort,
    },
    {
      IMAGE: MensShort,
    },
    {
      IMAGE: MensShort,
    },
    {
      IMAGE: MensShort,

    },

    {
      IMAGE: MensShort,

    },
  ]
  return (
    <div>
      <div className="container px-3  mx-auto lg:max-w-[1120px]">
        <div className="">
          <div className="items flex flex-wrap gap-[20px]  mt-[40px]  justify-center  ">
            {
              deginerImg.map((item, i) => (
                <Link to="/Price" key={i} className="item bg-white mt-[50px]  rounded-md w-[15%]">

                  <div className="img mx-auto relative">
                    <img src={item.IMAGE} alt="img" className=" mt-[-20px] " />
                    {i === deginerImg.length - 1 && (
                      <div className="absolute inset-0 h-full w-full bg-black opacity-40"></div>
                    )}
                    <div className="absolute inset-0 h-full w-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
                    <div className=" absolute price bottom-[-6px] ">
                      <Link to="/Price">
                        <h1 className="text-black bg-white px-[15px] py-[2px] lg:ml-[50px] ml-[-8px] rounded-md shadow-lg">
                          ৳1000
                        </h1>
                      </Link>
                    </div>

                    {i === deginerImg.length - 1 && (

                      <h1 className="absolute top-[30px] left-1/2 transform -translate-x-1/2 text-white text-[25px]  px-4 py-2 rounded-md z-10 uppercase font-semibold">

                        View More

                      </h1>

                    )}
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerEdition;