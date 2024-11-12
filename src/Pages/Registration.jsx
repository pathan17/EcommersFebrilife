import { useState } from "react";
import { Link } from "react-router-dom";
import HadLine from "../Components/HomeComponent/HadLine";
import Navbar from "../Components/HomeComponent/Navbar";
import Footer from "../Components/HomeComponent/Footer";

const Registration = () => {
  // Form state to handle user inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to manage error/success messages
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    // Simulate a successful registration (you can replace this with an actual API call)
    setMessage({ type: "success", text: "Registration successful!" });

    // Reset form after successful registration (optional)
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      <HadLine />
      <div className="  lg:top-0 lg:left-0 lg:w-full lg:sticky z-[999] ">
        <Navbar />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

          {/* Display Feedback Messages */}
          {message.text && (
            <div
              className={`mb-4 text-center p-3 rounded-md ${message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
                }`}
            >
              {message.text}
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>

          {/* Already have an account? */}
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/path" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <div className=""><Footer/></div>
    </div>
  );
};

export default Registration;
