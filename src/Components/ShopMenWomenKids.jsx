import { FaGooglePlay } from "react-icons/fa";

const ShopMenWomenKids = () => {
    return (
        <div>
            <div className="main-shop mt-5 bg-slate-300 h-[60px]">
        <div className=" container mx-auto">
          <div className="Shop flex gap-20">
            <div className="shopNow w-[60%]">
              <div className="div flex justify-between">
                <h1 className=" mt-4">Shop Now</h1>
                <h1 className=" mt-4">MEN</h1>
                <h1 className=" mt-4">WOMEN</h1>
                <h1 className=" mt-4">KIDS</h1>
              </div>
            </div>
            <div className="shopNow w-[40%]">
              <div className="Icon flex gap-8">
                <div className="text">
                  <h1 className="mt-4">GET 5% OFF ON APP</h1>
                </div>
                <div className="text flex justify-center items-center px-4 bg-black rounded-md mt-3">
                  <FaGooglePlay className=" text-red-400" />
                  <span className=" inline-block ml-1 text-white">
                    <p className="text-[10px]">GET IT ON</p> Google Play
                  </span>
                </div>
                <div className="text">
                  <div className="text flex justify-center items-center px-4 bg-black rounded-md mt-3">
                    <FaGooglePlay className=" text-red-400" />
                    <span className=" inline-block  text-white">
                      <p className="text-[10px]">GET IT ON</p> Google Play
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ShopMenWomenKids;