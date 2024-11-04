import { Link } from "react-router-dom";
import designerImage from "../../assets/img4.jpg";

const DesignerEdition = () => {
    const designerImg = [
        { IMAGE: designerImage },
        { IMAGE: designerImage },
        { IMAGE: designerImage },
    ];

    return (
        <div>
            <div className="container p-1 px-3 mx-auto lg:mt-[] lg:max-w-[1120px]">
                <div className="flex flex-wrap gap-[18px] mt-2 justify-center">
                    {
                        designerImg.map((item, i) => (
                            <div
                                key={i}
                                className="item bg-white mt-[20px] rounded-md 
                                 sm:w-[30%] md:w-[30%] lg:w-[353px] w-full"
                            >
                              <Link to="/newPage">
                              <div className="img mx-auto relative">
                                    <img src={item.IMAGE} alt="img" className="" />
                                    <div className=" absolute price bottom-1">
                                        <Link to="/newPage" className="text-white text-[20px] font-semibold lg:ml-[100px]   ml-[115px] rounded-md uppercase hover:text-red-500 transition-all">Design Edition</Link>
                                    </div>
                                </div>
                              </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DesignerEdition;
