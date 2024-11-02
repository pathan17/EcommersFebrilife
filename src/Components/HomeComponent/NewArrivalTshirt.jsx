import { Link } from "react-router-dom";
import image from "../../assets/img3.jpg";




const NewArrivalTshirt = () => {
    const LinkImag = [
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
        {
          Link: "",
          img: image,
        },
      ];
    return (
        <div>
              <div className="container mx-auto lg:max-w-[1120px]">
          <div className="">
            <div className="items flex flex-wrap gap-[21px] mt-2 justify-center items-center">
              {LinkImag.map((item, i) => (
                <div
                  key={i}
                  className="item bg-white rounded-md w-[45%] xs:w-[30%] sm:w-[30%] md:w-[23%] lg:w-[15%]"
                >
                  <div className="flex justify-center items-center">
                    <h1 className="text-center bg-white w-[100px] text-black rounded-lg z-20">
                      <Link to="/newPage">Sports T-shirt</Link>
                    </h1>
                  </div>
                 <Link to="/newPage">
                 <div className="img mx-auto">
                    <img
                      src={item.img}
                      alt="img"
                      className="mt-[-20px] rounded-md"
                    />
                  </div>
                 </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
};

export default NewArrivalTshirt;