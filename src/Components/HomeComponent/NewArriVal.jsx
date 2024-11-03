import NewArrivalTshirt from "./NewArrivalTshirt";


const NewArriVal = () => {
  

  return (
    <div>
      <div className="main-newArrival  p-4  mt-[130px] lg:mt-[-30px] sm:mt-0">
        <div className="new bg-red-50 h-[100px] lg:h-[90px] container mx-auto lg:max-w-[1120px]">
          <div className="flex justify-center items-center">
            <h2 className="mt-6 text-yellow-700 text-[30px] font-bold">
              NEW ARRIVAL
            </h2>
          </div>
        </div>
          {/* NewArrival----Tshirt--start */}
             <NewArrivalTshirt/>
          {/* NewArrival----Tshirt--End */}

      </div>
    </div>
  );
};

export default NewArriVal;
