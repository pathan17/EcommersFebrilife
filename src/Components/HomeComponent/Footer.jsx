import { MdForwardToInbox } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="Main bg-gray-800  lg:p-20">
        <div className="flex flex-col lg:flex-row  gap-10">
          <div className="item w-full lg:w-[100%] ">
            <span className="text-white flex gap-2 mb-4 lg:flex lg:justify-center lg:items-center lg:mr-[300px]">
              <MdForwardToInbox className="text-yellow-500 text-[25px]" />
              GET SPECIAL DISCOUNTS IN YOUR INBOX
            </span>

            <div className="input_contact">
              <div className="flex gap-4 justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter email to get offers, discounts and more."
                  className="w-full sm:w-[400px] lg:w-[500px] p-1 px-3 border-b-2 bg-gray-800 text-white border-gray-200 text-lg focus:outline-none focus:ring-0 transition-all"
                />
                <button className="p-2 bg-yellow-400">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="btn w-full lg:w-[40%]">
            <span className="text-white flex gap-1">
              <FaPhoneAlt className="text-[13px] text-yellow-700" />
              FOR ANY HELP YOU MAY CALL US AT
            </span>
            <span className="text-white ml-5">8809677666888</span>
            <p className="text-white ml-5">Open 24 Hours a Day, 7 Days a week</p>
          </div>
        </div>
      </div>

      <div className="main-footer bg-slate-500 p-5 lg:p-10">
        <div className="container mx-auto lg:max-w-[1120px]">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-5">
            <div className="item w-full sm:w-[48%] lg:w-[20%]">
              <h1 className="text-[20px] text-yellow-500 mb-5">FABRILIFE</h1>
              <ul>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">ABOUT US</li>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">CONTACT</li>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">PRIVACY POLICY</li>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">TERMS OF SERVICE</li>
              </ul>
              <div className="icon flex gap-1 mt-5">
                <div className="round h-6 w-6 flex justify-center items-center bg-black text-white rounded-full">
                  <FaFacebookF />
                </div>
                <div className="round h-6 w-6 flex justify-center items-center bg-black text-white rounded-full">
                  <FaFacebookF />
                </div>
                <div className="round h-6 w-6 flex justify-center items-center bg-black text-white rounded-full">
                  <FaFacebookF />
                </div>
                <div className="round h-6 w-6 flex justify-center items-center bg-black text-white rounded-full">
                  <FaFacebookF />
                </div>
                {/* Repeat as necessary for more icons */}
              </div>
            </div>
            <div className="item w-full sm:w-[48%] lg:w-[20%]">
              <h1 className="text-[20px] text-yellow-500 mb-5">MEN</h1>
              <ul>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">ABOUT US</li>
                {/* Repeat as necessary */}
              </ul>
            </div>
            <div className="item w-full sm:w-[48%] lg:w-[20%]">
              <h1 className="text-[20px] text-yellow-500 mb-5">WOMEN</h1>
              <ul>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">ABOUT US</li>
                {/* Repeat as necessary */}
              </ul>
            </div>
            <div className="item w-full sm:w-[48%] lg:w-[20%]">
              <h1 className="text-[20px] text-yellow-500 mb-5">KIDS</h1>
              <ul>
                <li className="text-[15px] text-white mb-2 hover:text-yellow-600 transition-all hover:ml-2">ABOUT US</li>
                {/* Repeat as necessary */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
