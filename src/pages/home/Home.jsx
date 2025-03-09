import { Link } from "react-router-dom";
import HaloBackground from "../../components/Halo";

export default function UpdatedHome() {
  return (
    <div className="h-full">
      <HaloBackground />
      <div className="relative text-white p-4 h-full flex flex-col">
        <main className="grow flex flex-col justify-center px-8 pt-24 mb-12 2xl:mb-24 2xl:px-16">
          <p className="text-left">
            <span className="block font-semibold text-6xl mb-8">
              AI-Powered Teaching Companion!
            </span>
            <span className="block text-gray-300 text-2xl/relaxed 2xl:text-3xl/relaxed">
              Empower your classroom with interactive lessons, <br />
              Empower students to master subjects  <br />
              and communicate confidently through  <br />
              real-time discussions and debates.<br />
              Transform education into an dynamic experience.
            </span>
          </p>
          <Link to={'/login'}>
            <button className="text-xl mt-8 px-8 py-[10px] bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
