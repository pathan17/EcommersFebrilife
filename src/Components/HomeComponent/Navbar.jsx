import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Img from "../../assets/fairlifeImg.svg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false)




  const navLinks = [
    { path: "/", name: <h1>Categories</h1> },
    { path: "/", name: <h1>Mens</h1> },
    { path: "/latest-news", name: <h1>Womens</h1> },
    { path: "/national", name: <h1>Kids</h1> },
    { path: "/country", name: <h1>Face Mask</h1> },
    { path: "/politics", name: <h1>Football Jersey</h1> },


  ];

  return (
    <div>
      <nav className=" bg-white  w-full sm:top-0 md:top-0  z-[999] ">
        <div className="main flex container mx-auto ">
          <Link to="/" className="logo w-[30%]">
            <div className="log  w-[180px]  flex gap-[10px]  lg:gap-16">
              <div className="icon lg:hidden">
                {sidebarOpen ? (

                  <VscChromeClose
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-4xl text-black font-bold cursor-pointer w-6 h-6"
                  />

                ) : (
                  <FaBars
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className=" text-[30px] mt-6 ml-2"
                  />
                )}
              </div>
              <img src={Img} alt="Logo" className="w-full h-[80px] ml-3" />
             {/* Shop--hover--option--start */}
              <div className="relative group">
                <h2 className=" justify-center items-center gap-2 hidden  lg:flex lg:mt-7 text-black font-bold text-[18px] mt-0 hover:text-blue-600 ">
                  Shop <IoIosArrowDown className=" lg:mt-1 " />
                </h2>
                <div className="menu bg-white  p-6 absolute hidden group-hover:block w-[800px] z-[999] overflow-hidden">
                  <div className="div flex flex-row h-[310px] gap-10 ] ">
                    <ul className="flex flex-col">
                      <li className="text-black font-bold z-[999]  text-lg">
                        <Link to="/newPage">
                          Mens
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="/newPage">
                          T-shart
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="/newPage">
                          T-sart(Raglan)
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="/newPage">
                          T-sart(Cut & Stitch)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          T-sart(sports&Edition)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          T-shirt(Blanks)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          Full Sleev T-shirt
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          Full Sleev (RagLan)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          Full Sleeve (Cut&Stitch)
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          Full Sleeve (Blanks)
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="/newPage">
                          Wallet
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          Belt
                        </Link>
                      </li>
                    </ul>
                    <ul className="">
                      <li className="text-black  font-bold text-lg">
                        <Link to="/newPage">
                          Womens
                        </Link>
                      </li>
                      <li className="text-black ">
                        <Link to="/newPage">
                          Kurti, Tunic&Tops
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link to="/newPage">
                          Comfy Trouser
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="text-black font-bold text-lg">
                        {" "}
                        <Link to="/newPage">
                          Kids
                        </Link>{" "}
                      </li>
                      <li className="text-black ">
                        {" "}
                        <Link to="/newPage">
                          T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Maggie
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Plain T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Full Sleeve T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Polo T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Shorts
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Trouser
                        </Link>{" "}
                      </li>
                    </ul>
                    <ul>
                      <li className="text-black font-bold text-lg">
                        {" "}
                        <Link to="/newPage">
                          Face Mask
                        </Link>{" "}
                      </li>
                      <li className="text-black ">
                        {" "}
                        <Link to="/newPage">
                          Professional 7 Layer Mask
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Sports Edition
                        </Link>{" "}
                      </li>
                      <li className="text-black ">
                        {" "}
                        <Link to="/newPage">
                          Womens Designer Edition
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Womens Embroidery Edition
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Kids Face Mask
                        </Link>{" "}
                      </li>
                    </ul>
                    <ul>
                      <li className="text-black font-bold text-lg">
                        {" "}
                        <Link to="/newPage">Sports</Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Football Jersey
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Sports T-shirt
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Maggie (Single Jersey)
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Shorts
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage">
                          Underware
                        </Link>{" "}
                      </li>
                      <li className="text-black">
                        {" "}
                        <Link to="/newPage" >
                          Socks
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             {/* Shop--hover--option--End */}

            </div>
          </Link>
          {/* search for searchOption input fild--Start */}
          {
            searchOpen ?
              <div className="relative ml-[130px]  flex justify-center items-center sm:flex sm:justify-center  sm:items-center  lg:hidden md:flex md:justify-center md:items-center z-[999]">
                <FaSearch
                  onClick={() => setSearchOpen(!searchOpen)}
                  className=" absolute top-[50%]  left-[50%]  transform -translate-x-1/2 -translate-y-1/2 text-lg cursor-pointer lg:mt-4 text-blue-400"
                />
              </div>
              :
              <div className="input w-[60%] flex justify-center items-center lg:hidden">
                <div className="input-field ">
                  <div className=" relative mt-5  w-full mx-auto bg-slate-100 p-1 mb-10 ml-[-240px] md:ml-[-20px] lg:ml-[-80px]  md:w-[380px]  lg:w-[600px]  lg:block lg:bg-inherit z-[999]">
                    <input
                      type="text"
                      className="py-1 px-4 text-blue-600   border border-gray-300 focus:outline-none focus:border-blue-500 text-left w-full"
                      placeholder="Search by product"
                    />
                    <FaSearch onClick={() => setSearchOpen(!searchOpen)} className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
          }
           {/* search for searchOption input fild--END */}
           {/* INPUT FILD START */}
           <div className="input w-[60%] md:ml-8 lg:p-4 justify-center items-center hidden  lg:block">
                <div className="input-field ">
                  <div className=" relative  p-3  w-[380px]  lg:w-[600px]   z-[999]">
                    <input
                      type="text"
                      className="py-1 px-4 text-blue-600  border border-gray-600 focus:outline-none focus:border-blue-500 text-left w-full"
                      placeholder="Search by product"
                    />
                    <FaSearch  className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-600" />
                  </div>
                </div>
              </div>
           {/* INPUT FILD END */}

             {/* Navbar--AdCart--Icon--start */}
          <div className="icon  gap-[2px] ml-[20px] mt-6 static flex lg:ml-[-60px]  lg:flex lg:mt-7  ">
            <FaCartShopping className=" text-[23px] mt-1 " />
            <h3 className=" bg-blue-600 rounded-md h-4 w-4  flex items-center justify-center text-white text-[10px] mt-2 font-bold mr-[10px]">
              0
            </h3>
            <div className="icon mr-[30px]">
              {
                loginVisible?
                <FaAngleDown onClick={() => setLoginVisible(!loginVisible)} className="text-2xl text-blue-500 lg:hidden" />
                :
                <FaAngleUp  onClick={() => setLoginVisible(!loginVisible)} className="text-2xl text-blue-500  lg:hidden" />

              }

            </div>
             {/* Navbar--AdCart--Icon--End */}

            {/* FaAngleDown click stape */}
              {
                loginVisible?
                <div className="LoginSaidbar absolute p-2 bg-gray-400 ml-[-145px] mt-[48px] lg:hidden z-50">
                <div className="   w-[50%] h-[50%] z-[999] place-content-center ">
                  <div className="login flex gap-5 mb-2">
                    <div className="text">
                      <Link to="/" className=" text-lg text-white font-bold" >Login</Link>
                      <p className=" w-[200px] text-gray-300">Enter your account</p>
                    </div>
                    <div className="icon mt-3 text-lg text-white"><FaAngleRight /></div>
                  </div>
                    <div className="line h-[1px] w-[260px] bg-white  mb-2"></div>
                  <div className="login flex gap-5">
                    <div className="text">
                      <Link to="/" className=" text-lg text-blue-500 font-bold" >Track Order</Link>
                      <p className=" w-[200px] text-gray-300">Know your order status</p>
                    </div>
                    <div className="icon mt-3 text-lg text-blue-500"><FaAngleRight /></div>
                  </div>
                </div>
              </div>
              :
              ``
              }
               
            {/* FaAngleDown click stape */}
          </div>
        </div>
        {/* Sidebar */}
        {sidebarOpen && (
          <div
            className={` z-auto fixed top-0 left-0 h-full w-64 bg-white text-red-600 p-4 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* Close Button with Background */}
            <div className="flex justify-end">
              <VscChromeClose
                onClick={() => setSidebarOpen(false)}
                className="bg-white text-black text-3xl cursor-pointer p-1 rounded-full"
              />
            </div>

            {/* Sidebar Content */}

            <ul className=" mt-4">
              {navLinks.map((link, index) => (
                <li key={index} className="py-2 w-full">
                  <NavLink
                    to={"/newPage"}
                    className=" p-2 w-full block text-black transition-colors duration-300 rounded-md"
                    activeClassName=""
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>


          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
