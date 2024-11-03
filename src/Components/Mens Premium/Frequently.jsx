import FrequentlyImg from "../../assets/FreQUENTLY.jpg";

const Frequently = () => {
    return (
        <div>
            <div className="Frequently mt-5">
                <div className="main container mx-auto lg:max-w-[1120px] flex flex-col md:flex-row gap-5">
                    <div className="left w-full md:w-[30%] flex flex-col items-center md:items-start">
                        <div className="text">
                            <h1 className="text-black text-[20px] font-semibold">Frequently Bought Together</h1>
                            <div className="line mt-5 h-[1px] bg-black w-full"></div>
                        </div>
                        <div className="img-text flex flex-col md:flex-row gap-4 mt-5 w-full">
                            <div className="img w-full md:w-[50%]">
                                <img src={FrequentlyImg} alt="" className="w-full" />
                            </div>
                            <div className="text w-full md:w-[50%]">
                                <h1 className="text-black font-semibold text-[17px]">Mens Premium T-Shirt - Hope</h1>
                                <p className="text-black text-[30px] mt-2">৳ 630.00</p>
                                <div className="bg mt-4 px-5 w-[140px] py-1 hover:bg-green-600 hover:text-white bg-gray-500 text-white flex items-center justify-center cursor-pointer">
                                    <span>+ Add To Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right w-full md:w-[70%]">
                        <div className="div mb-1">
                            <div className="right_Main text flex gap-1 bg-white w-full">
                                <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">Size</h1>
                                <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">Chest(Round)</h1>
                                <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">Length</h1>
                                <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">Sleeve</h1>
                            </div>
                        </div>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <div className="div right_Main_1 mb-1 flex" key={size}>
                                <div className="text flex w-full bg-white">
                                    <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">{size}</h1>
                                    <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">23</h1>
                                    <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">23</h1>
                                    <h1 className="bg-gray-100 text-black font-semibold w-[25%] text-center py-1">23</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;
