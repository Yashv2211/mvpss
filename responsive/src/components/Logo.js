import { Link } from "react-router-dom";
import lines from '../assets/lines.png';
import birla from '../assets/Birla_Vidya_Mandir_Logo_clean.png';

export default function Logo() {
    return (
        <div className="relative w-full px-2 py-2 flex items-center">
            {/* Left Side - Main Logo */}
            <Link to={'/'} className="flex items-center space-x-3">
                <img
                    src={lines}
                    alt="Logo"
                    className="h-12 w-auto" // Increased size of the main logo
                />
                <span className="text-4xl font-bold">Talkative.<span className="text-orange-500">ai</span></span>
            </Link>
        </div>
    );
}

//            {/* Right Side - Birla Logo */}
//            <img
//                src={birla}
//                alt="Birla Logo"
//                className="h-20 w-auto absolute right-0"
//            />