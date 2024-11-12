
import { Link } from "react-router-dom";


const LoginAllPages = () => {
    return (
        <div>
            <div className="  LoginSaidbar absolute p-2 bg-gray-400  mt-[48px] z-[999] cursor-pointer">
                <div className="   w-[145px] h-[140px] z-[999]  ">
                    <div className="login flex   z-[999] lg:p-2">
                        <div className="text cursor-pointer">
                            <Link to="/path" className=" text-lg text-white font-bold cursor-pointer" >Login</Link>

                        </div>

                    </div>
                    <div className="line h-[1px] w-full bg-white  mb-2"></div>

                    <div className="login flex mb-2  z-[999]  cursor-pointer">
                        <Link to="/registration" className="text cursor-pointer">
                            <div className=" text-lg text-white font-bold" >Registration</div>
                        </Link>

                    </div>
                    <div className="line h-[1px] w-full bg-white  mb-2"></div>

                    <div className="login flex  z-[999] cursor-pointer">
                        <Link to="/Order" className="text cursor-pointer">
                            <div className=" text-lg text-white font-bold cursor-pointer" >order Tracking</div>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginAllPages;