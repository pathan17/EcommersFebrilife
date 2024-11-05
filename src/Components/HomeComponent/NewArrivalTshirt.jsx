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
    <div className=" ">
      <div className="container mx-auto lg:max-w-[1120px]">
        <div className="">
          <div className="items flex flex-wrap gap-[17px] mt-[40px] justify-center items-center ">
            {LinkImag.map((item, i) => (
              <div
                key={i}
                className="item bg-white rounded-md w-[45%] xs:w-[30%] sm:w-[30%] md:w-[23%] lg:w-[15%] mb-5"
              >
                <div className=" relative ">


                  <Link to="/newPage">
                    <div className="img mx-auto">
                      <img
                        src={item.img}
                        alt="img"
                        className="mt-[-20px] rounded-md"
                      />
                    </div>
                  </Link>
                  <h1 className=" absolute top-0 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-center bg-white w-[100px] px-1 py-2 text-black rounded-lg shadow-lg text-[13px]  font-sans">
                    <Link to="/newPage">Sports T-shirt</Link>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalTshirt;