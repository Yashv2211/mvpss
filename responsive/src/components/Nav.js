import Logo from "../components/Logo";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center relative z-10 text-white px-8 pt-4">
            <Logo />
            {/* <div className="flex items-center pt-2">
                <img
                    src={'/Customer.jpg'}
                    alt="Corner Logo"
                    className="w-16 h-16 rounded-xl"
                />
            </div> */}
        </nav>
    );
}