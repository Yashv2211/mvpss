import { useState } from "react";
import { HidePassword, ShowPassword } from "../../assets/svg/EyePatch";
import HaloBackground from "../../components/Halo";
import Logo from "../../components/Logo";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  async function handleSubmit(e) {
    e.preventDefault();
    if (window.innerWidth < 640) {
      navigate('/content/ai'); // Redirect for mobile
    } else {
      navigate('/subjects2.0'); // Redirect for larger screens
    }
  }

  return (
    <div className="flex h-full relative">
      {/* Left Section (Black Background) */}
      <div className="hidden sm:block bg-black text-white lg:w-[50%] h-full relative">
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
      <div className="bg-white w-full absolute inset-0 sm:fixed sm:w-[50%] sm:left-auto sm:inset-y-0 flex justify-center items-center">
        <div className="w-full mb-24 sm:mx-[12%] sm:mb-16">
          <div className="p-8">
            <h3 className="font-semibold text-2xl mb-4">Welcome Back!</h3>
            <form onSubmit={handleSubmit}>
              <div className="sm:mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="relative sm:mb-4">
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
                />
              </div>
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
