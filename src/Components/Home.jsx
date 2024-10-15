import { BsLightningChargeFill } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TfiCar } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Img from "../assets/fairlifeImg.svg";
import banner from "../assets/img1.jpg";
import { Link } from "react-router-dom";
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

function App() {


 
 

  return (
    <>
      {/* febrilifeHedline Start */}
      <div className="main h-8 bg-black bg-opacity-10 w-full">
        <div className="febrilifeHedline flex justify-center items-center">
          <div className="T-shart w-[40%]">
            <span className=" bg-black h-8 w-[450px] sm:w-[240px] text-white text-center py-2 font-bold flex items-center justify-center">
              <BsLightningChargeFill className="mr-2 text-xl  text-yellow-500" />
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
              <MdOutlineArrowCircleRight className="ml-2 text-xl bg-white rounded-full text-black" />
            </span>
          </div>
          <div className="btn w-[60%]">
            <div className="main-btn">
              <div className="btn flex gap-8 justify-center items-center">
                {/* Order Bulk Button */}
                <p className="bg-green-600 hover:bg-green-700 text-white h-8 w-[200px] sm:w-[100px] text-center rounded-sm flex items-center justify-center gap-1">
                  <TfiCar className="text-lg" />
                  Order Bulk
                </p>
                {/* Bangladesh Dropdown Button */}
                <p className="bg-black bg-opacity-15  hover:bg-green-700 text-white h-8 w-[200px] sm:w-[100px] flex items-center justify-center gap-1  rounded-sm transition-all">
                  <span className=" text-lg  ">Bangladesh</span>
                  <IoIosArrowDown className="text-lg" />
                </p>
                <span className="flex items-center justify-center text-center gap-10 ml-5 sm:gap-5">
                  {/* Help Link */}
                  <p className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300">
                    Help
                  </p>

                  {/* Login Button */}
                  <h4 className="flex justify-center items-center  gap-1 sm:mr-4 text-lg text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300">
                    <CgLogIn />
                    Login
                  </h4>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* febrilifeHedline End */}

      {/* Navbar start */}

      <nav className="container mt-10">
        <div className="main flex justify-center items-center">
          <div className="logo w-[30%]">
            <div className="log  w-[200px] flex gap-16 sm:gap-2">
              <img src={Img} alt="Logo" className="w-full" />
              <div className="relative group">
                <h2 className="flex justify-center items-center gap-2  text-black text-lg">
                  Shop <IoIosArrowDown />
                </h2>
                <div className="menu bg-white  p-6 absolute hidden group-hover:block w-[890px]">
                  <div className="div flex flex-row h-[310px] gap-10">
                    <ul className="flex flex-col">
                      <li className="text-black font-bold">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens">
                          Mens
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Printed">
                          T-shart
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%☻20Panjabi">
                          T-sart(Raglan)
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Cut%20%26%20Stitch%20%28Designer%20Edition%29&refinementList%5Bcats%5D%5B1%5D=Mens%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Cut%20%26%20Stitch">
                          T-sart(Cut & Stitch)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Sports">
                          T-sart(sports&Edition)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Blank">
                          T-shirt(Blanks)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Full%20Sleeve%20T-shirt">
                          Full Sleev T-shirt
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Full%20Sleeve%20T-shirt%20%3E%20Raglan&refinementList%5Bcats%5D%5B1%5D=Mens%20%3E%20Full%20Sleeve%20T-shirt%20%3E%20Raglan%20%28Designer%20Edition%29">
                          Full Sleev (RagLan)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Full%20Sleeve%20T-shirt%20%3E%20Cut%20%26%20Stitch%20%28Designer%20Edition%29&refinementList%5Bcats%5D%5B1%5D=Mens%20%3E%20Full%20Sleeve%20T-shirt%20%3E%20Cut%20%26%20Stitch">
                          Full Sleeve (Cut&Stitch)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Full%20Sleeve%20T-shirt%20%3E%20Blank">
                          Full Sleeve (Blanks)
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Accesorries%20%3E%20Wallet">
                          Wallet
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Accesorries%20%3E%20Belt">
                          Belt
                        </Link>
                      </li>
                    </ul>
                    <ul className="">
                      <li className="text-black  font-bold text-lg">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Womens">
                          Womens
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Womens%20%3E%20Kurti%20Tunic%20And%20Tops">
                          Kurti, Tunic&Tops
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Womens%20%3E%20T-Shirt">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Womens%20%3E%20Comfy%20Trouser">
                          Comfy Trouser
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="text-black font-bold text-lg">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids">
                          Kids
                        </Link>{" "}
                      </li>
                      <li className="text-black ">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Printed">
                          T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Maggie">
                          Maggie
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Blank">
                          Plain T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Full%20Sleeve%20T-shirt">
                          Full Sleeve T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Polo%20T-shirt">
                          Polo T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Shorts">
                          Shorts
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Kids%20%3E%20Trouser">
                          Trouser
                        </Link>{" "}
                      </li>
                    </ul>
                    <ul>
                      <li className="text-black font-bold text-lg">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Face%20Mask">
                          Face Mask
                        </Link>{" "}
                      </li>
                      <li className="text-black ">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Face%20Mask%20%3E%20Professional%207%20Layer%20Mask">
                          Professional 7 Layer Mask
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Face%20Mask%20%3E%20Sports%20Edition">
                          Sports Edition
                        </Link>{" "}
                      </li>
                      <li className="text-black ">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Face%20Mask%20%3E%20Womens%20Designer%20Edition">
                          Womens Designer Edition
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Face%20Mask%20%3E%20Womens%20Embroidery%20Edition">
                          Womens Embroidery Edition
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Face%20Mask%20%3E%20Kids%20Mask">
                          Kids Face Mask
                        </Link>{" "}
                      </li>
                    </ul>
                    <ul>
                      <li className="text-black font-bold text-lg">
                        {" "}
                        <Link to="">Sports</Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Sports%20%3E%20Football%20Jersey">
                          Football Jersey
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Sports%20%3E%20Sports%20T-shirt&refinementList%5Bcats%5D%5B1%5D=Mens%20%3E%20Half%20Sleeve%20T-shirt%20%3E%20Sports">
                          Sports T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Maggie">
                          Maggie (Single Jersey)
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Shorts">
                          Shorts
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Underwear">
                          Underware
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="https://fabrilife.com/shop?refinementList%5Bcats%5D%5B0%5D=Mens%20%3E%20Socks">
                          Socks
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input w-[60%]">
            <div className="input-field flex justify-center items-center">
              <div className="relative w-[600px] sm:w-[200px] lg:w-[600px]">
                <input
                  type="text"
                  className="py-1 px-4 text-blue-600  border border-gray-300 focus:outline-none focus:border-blue-500 text-left w-full rounded-md"
                  placeholder="Search by product"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="icon flex gap-1">
            <FaCartShopping className=" text-[23px]" />
            <h3 className=" bg-blue-600 rounded-md h-4 w-4  flex items-center justify-center mt-2 text-white text-[10px] font-bold">
              0
            </h3>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* banner start */}
      <div className="banner-main mt-5">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </div>
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

      
    
    </>
  );
}

export default App;
