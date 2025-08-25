import { Link } from "react-router-dom";
import neustonLogo from "../../assets/NeustonBiosystemsLOGO.png"

export default function Navbar() {
    return (
        <header className="bg-neuston-Amber-Lighter sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[72px]">
                <div>
                    <Link to="/" className="">
                        <img src={neustonLogo} className="max-w-21 max-h-10" alt="Neuston Biosystems logo" />
                    </Link>
                </div>
                <div className="md:flex items-center space-x-5 h-full">
                    <Link to="/" className="nav-btn">
                            Home
                    </Link>
                    <Link to="/for-cheese-producers" className="nav-btn">
                        For Cheese Producers
                    </Link>
                    <Link to="/for-investors" className="nav-btn">
                        For Investors
                    </Link>
                    <Link to="/sustainability" className="nav-btn">
                        Sustainability
                    </Link>
                    <Link to="/about" className="nav-btn">
                        About Us
                    </Link>
                    <Link to="/careers" className="nav-btn">
                        Careers
                    </Link>
                    <Link to="/contact" className="nav-btn">
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}