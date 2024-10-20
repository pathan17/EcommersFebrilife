import designerImage from "../assets/img4.jpg";

const DesignerEdition = () => {
    const designerImg = [
        { IMAGE: designerImage },
        { IMAGE: designerImage },
        { IMAGE: designerImage },
    ];
    
    return (
        <div>
            <div className="container p-3 mx-auto lg:mt-[] lg:max-w-[1120px]">
                <div className="flex flex-wrap gap-[55px] mt-2 justify-center">
                    {
                        designerImg.map((item, i) => (
                            <div 
                                key={i} 
                                className="item bg-white mt-[20px] rounded-md 
                                 sm:w-[30%] md:w-[30%] lg:w-[29%] w-full"
                            >
                                <div className="img mx-auto">
                                    <img src={item.IMAGE} alt="img" className="rounded-md" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DesignerEdition;
