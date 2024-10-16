import banner from "../assets/img1.jpg";


const Banner = () => {
    return (
        <div>
             <div className="banner-main mt-5">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </div>
        </div>
    );
};

export default Banner;