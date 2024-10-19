import banner from "../assets/img1.jpg";


const Banner = () => {
    return (
        <div>
             <div className="banner-main mt-5 p-6">
        <div className="banner sm:mt-[100px]">
          <img src={banner} alt="banner" className="w-full sm:h-[300px]"/>
        </div>
      </div>
        </div>
    );
};

export default Banner;