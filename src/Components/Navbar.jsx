import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Img from "../assets/fairlifeImg.svg";
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
      <nav className=" bg-white  p-3  w-full top-0 sm:top-0 md:top-0  z-[999]">
        <div className="main flex container mx-auto lg:max-w-[1120px]">
          <div className="logo w-[30%]">
            <div className="log  w-[180px]  flex gap-[10px] lg:gap-16">
              <div className="icon lg:hidden">
                {sidebarOpen ? (

                  <VscChromeClose
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-4xl text-black font-bold cursor-pointer w-6 h-6"
                  />

                ) : (
                  <FaBars
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className=" text-[30px]"
                  />
                )}
              </div>
              <img src={Img} alt="Logo" className="w-full h-6 mt-1  lg:mt-6 " />

              <div className="relative group">
                <h2 className=" justify-center items-center gap-2 hidden  lg:flex lg:mt-5 text-black text-lg mt-0">
                  Shop <IoIosArrowDown className=" lg:mt-3" />
                </h2>
                <div className="menu bg-white  p-6 absolute hidden group-hover:block w-[800px]">
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
          {
            searchOpen ?
              <div className="relative ml-[130px]">
                <FaSearch
                  onClick={() => setSearchOpen(!searchOpen)}
                  className=" absolute top-[50%]  left-[50%]  transform -translate-x-1/2 -translate-y-1/2 text-lg cursor-pointer lg:mt-4 text-blue-400"
                />
              </div>
              :
              <div className="input w-[60%] flex justify-center items-center">
                <div className="input-field ">
                  <div className="relative bg-slate-100 p-3 mb-10 w-[380px] mr-16 lg:w-[600px] lg:mt-3 lg:bg-inherit z-[999]">
                    <input
                      type="text"
                      className="py-1 px-4 text-blue-600  border border-gray-300 focus:outline-none focus:border-blue-500 text-left w-full"
                      placeholder="Search by product"
                    />
                    <FaSearch onClick={() => setSearchOpen(!searchOpen)} className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
          }

          <div className="icon  gap-1 ml-[20px] static flex  lg:flex lg:mt-7 ">
            <FaCartShopping className=" text-[23px] mt-1" />
            <h3 className=" bg-blue-600 rounded-md h-4 w-4  flex items-center justify-center text-white text-[10px] mt-2 font-bold">
              0
            </h3>
            <div className="icon ml-4">
              {
                loginVisible?
                <FaAngleDown onClick={() => setLoginVisible(!loginVisible)} className="text-2xl text-blue-500 lg:hidden" />
                :
                <FaAngleUp  onClick={() => setLoginVisible(!loginVisible)} className="text-2xl text-blue-500  lg:hidden" />

              }
             

            </div>
            {/* FaAngleDown click stape */}
              {
                loginVisible?
                <div className="LoginSaidbar absolute p-2 bg-gray-400 ml-[-145px] mt-[48px] lg:hidden">
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
                    to={link.path}
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
