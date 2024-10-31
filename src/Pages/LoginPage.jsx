import { useState } from "react";



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
    <div>
      <div className="flex items-center justify-center h-screen ">
        <div className=" p-8  w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className=" block text-gray-700 text-sm font-bold mb-2" >
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className=" block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





