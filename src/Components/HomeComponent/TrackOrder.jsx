import ClickFromButton from "./ClickFromButton";
import Footer from "./Footer";
import HadLine from "./HadLine";
import Navbar from "./Navbar";


const TrackOrder = () => {


    return (
        <div className="div ">
            <div> <HadLine /> </div>
            <div> <Navbar /> </div>
            <div className=" flex items-center min-h-screen justify-center ">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                    <h1 className="text-2xl font-bold mb-10 text-center text-gray-800">Track Your Order</h1>
                    <>
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Enter Order ID"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder=" Phone number on Invoice"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </>
                    <div className="flex justify-start">
                        <button
                            className="bg-green-600 text-white font-bold py-1 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Track Order
                        </button>
                    </div>
                </div>
            </div>
            <div className=" "> <Footer/> </div>
            <div className="  top-[40px] right-[50px] fixed"> <ClickFromButton/> </div>
        </div>
    );
};

export default TrackOrder;
