import banner from "../assets/img1.jpg";
import ClickFromButton from "./ClickFromButton";


const Banner = (props) => {
  return (
    <div>
      <div className="banner-main static mt-[45px] lg:mt-1 p-4">
        <div className="banner sm:mt-[100px]">
          <img src={banner} alt="banner" className="w-full sm:h-[300px]" />
        </div>
      </div>
      <div className="div top-0 right-0 fixed z-[999] hidden lg:block">
        <ClickFromButton  />
      </div>
    </div>
  );
};

export default Banner;