import { useState } from "react";
import { HidePassword, ShowPassword } from "../../assets/svg/EyePatch";
import HaloBackground from "../../components/Halo";
import Logo from "../../components/Logo";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize navigate function

  async function handleSubmit(e) {
    e.preventDefault();

    // Retrieve expected email and password from environment variables
    const expectedEmail = process.env.REACT_APP_EMAIL; // Ensure environment variable is prefixed with REACT_APP_
    const expectedPassword = process.env.REACT_APP_PASSWORD; // Ensure environment variable is prefixed with REACT_APP_

    // Validate email and password
    if (email === expectedEmail && password === expectedPassword) {
      // Navigate to the subjects2.0 page if credentials are valid
      navigate('/subjects2.0');
    } else {
      // Display an error message if credentials are invalid
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Section (Black Background) */}
      <div className="bg-black text-white lg:w-[50%] h-full relative">
        <HaloBackground xOffset={0} yOffset={0.1} position="absolute" login={true} />
        <div className="flex flex-col h-full justify-end relative pb-12">
          <p className="px-8 mb-12 text-left">
            <span className="block font-semibold text-5xl mb-4">
              AI-Powered Teaching Companion!
            </span>
            <span className="block text-gray-300 text-2xl 2xl:text-3xl leading-relaxed">
              Transform your classroom with interactive lessons, storytelling, and debates.
            </span>
          </p>
        </div>
      </div>

      {/* Right Section (White Background) */}
      <div className="bg-white lg:w-[50%] flex justify-center items-center">
        <div className="w-full mx-[12%] mb-16">
          <div className="p-8">
            <h3 className="font-semibold text-2xl mb-4">Welcome Back!</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  required
                />
              </div>
              <div className="relative mb-4">
                <button
                  type="button"
                  className="absolute right-3 top-2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <HidePassword /> : <ShowPassword />}
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Display error message */}
              <button
                type="submit"
                className="text-xl w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Sign In
              </button>
              <div className="flex justify-between text-sm mt-2">
                <span className="cursor-pointer hover:underline">Forgot Password?</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}