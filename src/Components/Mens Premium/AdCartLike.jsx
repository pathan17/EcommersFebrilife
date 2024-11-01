import NewArrivalTshirt from "../HomeComponent/NewArrivalTshirt";


const AdCartLike = () => {
    return (
        <div>
            <div className="AdCartLinke container mx-auto lg:max-w-[1120px] mt-8">
                <div className="main">
                    <div className="tex">
                        <h1 className=" text-[25px] font-semibold text-black">You may also like</h1>
                        <div className="line mt-5 h-[1px] bg-black w-full mb-5"></div>
                    </div>
                    <NewArrivalTshirt/>
                </div>
            </div>
        </div>
    );
};

export default AdCartLike;