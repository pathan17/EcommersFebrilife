import designerImage from "../assets/img4.jpg";

const DesignerEdition = () => {
    const designerImg = [
        {
            IMAGE: designerImage,
        },
        {
            IMAGE: designerImage,
        },
        {
            IMAGE: designerImage,
        },
    ];
    
    return (
        <div>
            <div className="container mx-auto lg:max-w-[1120px]">
                <div className="">
                    <div className="items flex flex-wrap gap-[20px] mt-2 justify-center">
                        {
                            designerImg.map((item, i) => (
                                <div 
                                    key={i} 
                                    className="item bg-white mt-[50px] rounded-md 
                                    w-full sm:w-[100%] md:w-[32%] lg:w-[32%]"
                                >
                                    <div className="img mx-auto">
                                        <img src={item.IMAGE} alt="img" className="mt-[-20px] rounded-md" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignerEdition;
