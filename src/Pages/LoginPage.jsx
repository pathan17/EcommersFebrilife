import { useState } from "react";
import HadLine from "../Components/HomeComponent/HadLine";
import Navbar from "../Components/HomeComponent/Navbar";
import Footer from "../Components/HomeComponent/Footer";
import ClickFromButton from "../Components/HomeComponent/ClickFromButton";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className=" ">
       <HadLine/>
       <div className="  lg:top-0 lg:left-0 lg:w-full lg:sticky z-[999] ">
       <Navbar />
       </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-white to-gray-900">
        <div className="p-8 w-full max-w-lg bg-gray-700 rounded-lg shadow-lg shadow-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center text-white font-sans capitalize">
            Sign In to Your Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-md font-bold mb-2 font-sans">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-600 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-md font-bold mb-2 font-sans">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-600 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=""><Footer/></div>
       <div className=" right-[50px] top-[40px] fixed"> <ClickFromButton/> </div>
    </div>
  );
};

export default LoginPage;
