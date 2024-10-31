import FrequentlyImg from "../../assets/FreQUENTLY.jpg"

const Frequently = () => {
    return (
        <div>
            <div className="Frequently mt-5">
                <div className="main container mx-auto  lg:max-w-[1120px] flex gap-[200px]">
                    <div className="left w-[30%]">
                        <div className="text">
                            <h1 className=" text-black text-[20px] font-semibold">Frequently Bought Together</h1>
                            <div className="line mt-5 h-[1px] bg-black w-[500px]"></div>
                        </div>
                        <div className="img-text flex gap-4 mt-5 ">
                            <div className="img w-[50%]">
                                <img src={FrequentlyImg} alt="" className="w-full" />
                            </div>
                            <div className="text w-[50%]">
                                <h1 className=" text-black  font-semibold text-[17px] w-[300px]">Mens Premium T-Shirt -Hope</h1>
                                <p className=" text-black text-[30px] mt-2">৳ 630.00</p>
                                <div
                                    className="bg mt-4 px-5 w-[140px] py-1 bg-gray-500 text-white flex items-center justify-center cursor-pointer">
                                    <span>+ Add To Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right w-[70%]">
                       <div className="div mb-2">
                       <div className="text flex gap-[60px] bg-gray-500 justify-center items-center">
                        <h1>Size</h1>
                        <h1>Chest</h1>
                        <h1>Round</h1>
                        <h1>Length</h1>
                        <h1>Sleeve</h1>
                       
                        </div>
                       </div>
                       <div className="div mb-2">
                       <div className="text flex gap-[60px] bg-gray-500 justify-center items-center">
                        <h1>M</h1>
                        <h1>39</h1>
                        <h1>27.5</h1>
                        <h1>8.5</h1>
                        <h1>8.5</h1>
                     
                        			
                        </div>
                        
                       </div>
                       <div className="div mb-2">
                       <div className="text flex gap-[60px] bg-gray-500 justify-center items-center">
                        <h1>M</h1>
                        <h1>39</h1>
                        <h1>27.5</h1>
                        <h1>8.5</h1>
                        <h1>8.5</h1>
                     
                        			
                        </div>
                        
                       </div>
                       <div className="div">
                       <div className="text flex gap-[60px] bg-gray-500 justify-center items-center">
                        <h1>M</h1>
                        <h1>39</h1>
                        <h1>27.5</h1>
                        <h1>8.5</h1>
                        <h1>8.5</h1>
                     
                        			
                        </div>
                        
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;