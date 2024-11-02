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
      <div className="container  mx-auto lg:max-w-[1120px]">
        <div className="">
          <div className="items flex flex-wrap gap-[22px]  mt-[40px]  justify-center  ">
            {
              deginerImg.map((item, i) => (
                <Link to="/Price" key={i} className="item bg-white mt-[50px]  rounded-md w-[15%]">

                  <div className="img mx-auto relative">
                    <img src={item.IMAGE} alt="img" className=" mt-[-20px] rounded-md" />
                    <div className=" absolute price bottom-[-6px] ">
                      <Link to="/Price"><h1 className="text-black bg-white px-[15px] py-[1px] ml-12 rounded-md">৳1000</h1></Link>
                    </div>
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