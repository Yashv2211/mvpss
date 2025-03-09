import { Link } from "react-router-dom";
import HaloBackground from "../../components/Halo";

export default function UpdatedHome() {
  return (
    <div className="sm:h-full">
      <HaloBackground />
      <div className="relative text-white p-2 sm:p-4 h-full flex flex-col">
        <main className="grow flex flex-col justify-center px-8 pt-12 sm:pt-24 mb-12 2xl:mb-24 2xl:px-16">
          <p className="text-left">
            <span className="block font-semibold text-4xl mb-8 sm:text-6xl">
              AI-Powered Teaching Companion!
            </span>
            <span className="block text-gray-300 text-xl/relaxed 2xl:text-3xl/relaxed sm:text-2xl/relaxed">
              Empower your classroom with interactive lessons, <br />
              immersive storytelling, and engaging debates. <br />
              Transform education into an inspiring, dynamic experience.
            </span>
          </p>
          <Link to={'/login'}>
            <button className="text-lg sm:text-xl mt-8 px-8 py-[10px] bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
