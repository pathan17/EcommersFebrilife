import { BsLightningChargeFill } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TfiCar } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import HomeFullSleev from "./HomeFullSleev";
import NewArriVal from "./NewArriVal";
import DesignerEdition from "./DesignerEdition";
import ShopMenWomenKids from "./ShopMenWomenKids";
import FabriLife from "./FabriLife";
import MensJacket from "./MensJacket";
import SingleJersey from "./SingleJersey";
import MenShort from "./MensShort"
import SportsTrousers from "./SportsTrousers";
import SportsTshirt from "./SportsTshirt";
import FaceMask from "./FaceMask";
import Premium from "./Premium";
import Antibacktriya from "./Antibacktriya";
import BlukOrderImg from "./BlukOrderImg";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {


 
 

  return (
    <>
      {/* febrilifeHedline Start */}
      <div className="main h-8 bg-black bg-opacity-10 w-full">
        <div className="febrilifeHedline flex justify-center items-center lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center sm:items-center sm:gap-[60px]">
          <div className="T-shart w-[40%] sm:w-[60%] lg:w-[40%]">
            <span className=" bg-black h-8 w-[450px] lg:w-[500px] lg:h-8 sm:w-[300px] sm:text-[10px] lg:text-lg   text-white text-center py-2 font-bold flex items-center justify-center">
              <BsLightningChargeFill className="mr-2 text-xl lg:text-xl sm:text-[20px]  text-yellow-500" />
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
              <MdOutlineArrowCircleRight className="ml-2 text-xl lg:text-lg sm:text-[15px] bg-white rounded-full text-black" />
            </span>
          </div>
          <div className="btn w-[60%] sm:w-[40%] lg:w-full">
            <div className="main-btn"> 
              <div className="btn flex gap-8  sm:flex sm:gap-2 lg:flex lg:gap-4 justify-center items-center ">
                {/* Order Bulk Button */}
                <p className="bg-green-600 hover:bg-green-700 sm:text-[8px] lg:text-[18px] text-white h-8 lg:h-8 sm:h-6 sm:p-4 w-[200px] text-center rounded-sm flex items-center justify-center gap-1">
                  <TfiCar className="text-lg sm:text-[10px] lg:text-lg" />
                  Order Bulk
                </p>
                {/* Bangladesh Dropdown Button */}
                <p className="bg-black bg-opacity-15  hover:bg-green-700 text-white h-8 lg:gap-1 sm:h-6 sm:p-4 sm:gap-0 w-[200px] sm:flex  sm:text-[8px] flex items-center justify-center gap-1  rounded-sm transition-all">
                  <span className=" text-lg lg:text-lg sm:text-[8px] ">Bangladesh</span>
                  <IoIosArrowDown className="text-lg lg:text-lg sm:text-[8px]" />
                </p>
                <div className="div lg:ml-[90px]">
                <span className="flex items-center gap-[80px] lg:gap-[50px] sm:mr-1 sm:flex sm:gap-[10px] text-center sm:ml-2 ml-5 lg:mr-3  ">
                  {/* Help Link */}
                  <p className="text-gray-600 lg:text-lg  sm:text-[10px] hover:text-blue-500 cursor-pointer transition duration-300">
                    Help
                  </p>

                  {/* Login Button */}
                  <h4 className="flex justify-center items-center sm:text-[10px] lg:text-lg lg:gap-1   gap-1  text-lg text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300">
                    <CgLogIn  />
                    Login
                  </h4>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* febrilifeHedline End */}

      {/* Navbar start */}
        <Navbar/> 
      {/* Navbar End */}

      {/* banner start */}
         <Banner/> 
      {/* banner End */}

      {/* Shop Now Men Women Kids  Start*/}
        <ShopMenWomenKids/>  
      {/* Shop Now Men Women Kids  End*/}

      {/* NEEW----ARRIVAL----START*/}
        <NewArriVal/> 
      {/* NEEW----ARRIVAL----END*/}

      {/* Img----Designer Edition----START*/}
       <DesignerEdition/> 
      {/* Img----Designer Edition----END*/}

      {/* Img----HomeFullSleev--T-Shart---start*/}
      <HomeFullSleev/>
      {/* Img----HomeFullSleev--T-Shart--End-*/}

      {/* ---FabriLife--text--Img----start*/}
      <FabriLife/>
      {/* ---FabriLife--text--Img----End*/}

      {/* ---Mens---jacket--Img----start*/}
      <MensJacket/>
      {/* ---Mens---jacket--Img----End*/}

      {/* ---Single---jersey--Img----Start*/}
        <SingleJersey/>
      {/* ---Single---jersey--Img----End*/}

      {/* ---Mens---Short--Img----Start*/}
         <MenShort/>
      {/* ---Mens---Short--Img----End*/}

      {/* -Shorts----Trousers---Img----START*/}
      <SportsTrousers/>
      {/* -Shorts----Trousers---Img----End*/}

      {/* -Shorts----T--Shirt---Img----Start*/}
      <SportsTshirt/>
      {/* -Shorts----T--Shirt---Img----End*/}

      {/* -Face----Mask---image---start*/}
      <FaceMask/>
      {/* -Face----Mask---image---End*/}
       
       {/* -----Premium -----start-*/}
       <Premium/>
       {/* -----Premium -----End-*/}

       {/* -----Antibacktiriya-----start-*/}
       <Antibacktriya/> 
       {/* -----Antibacktiriya-----End*/}

        {/* -----Bluk-- Order---start*/}
        <BlukOrderImg/>
        {/* -----Bluk-- Order---End*/}



      
    
    </>
  );
}

export default App;
