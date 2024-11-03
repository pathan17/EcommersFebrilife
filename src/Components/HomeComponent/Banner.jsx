import banner from "../../assets/img1.jpg";
import ClickFromButton from "./ClickFromButton";


const Banner = (props) => {
  return (
    <div>
      <div className="banner-main  lg:py-10 static mt-[-20px] lg:mt-[-150px]">
        <div className="banner sm:mt-[100px]">
          <img src={banner} alt="banner" className="w-full lg:h-[380px] sm:h-[300px]" />
        </div>
      </div>
      <div className="div top-[60px] right-[60px] fixed z-[999] hidden lg:block">
        <ClickFromButton  />
      </div>
    </div>
  );
};

export default Banner;