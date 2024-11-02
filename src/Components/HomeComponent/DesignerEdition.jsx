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
            <div className="container  mx-auto lg:mt-[] lg:max-w-[1120px]">
                <div className="flex flex-wrap gap-[37px] mt-2 justify-center">
                    {
                        designerImg.map((item, i) => (
                            <div
                                key={i}
                                className="item bg-white mt-[20px] rounded-md 
                                 sm:w-[30%] md:w-[30%] lg:w-[31%] w-full"
                            >
                              <Link to="/newPage">
                              <div className="img mx-auto relative">
                                    <img src={item.IMAGE} alt="img" className="rounded-md" />
                                    <div className=" absolute price bottom-1">
                                        <Link to="/newPage" className="text-white text-[20px] font-semibold    ml-[80px] rounded-md uppercase">Design Edition</Link>
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
