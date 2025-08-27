import { Link } from "react-router-dom";
import neustonLogo from "../../assets/NeustonBiosystemsLOGO.png"
import {useState} from "react";

export default function Navbar() {


    const MenuIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );

    const XIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/for-cheese-producers", label: "For Cheese Producers" },
        { href: "for-investors", label: "For Investors" },
        { href: "/sustainability", label: "Sustainability" },
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <header className="bg-neuston-Amber-Lighter sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[72px]">
                <div>
                    <Link to="/" className="">
                        <img src={neustonLogo} className="max-w-21 max-h-10" alt="Neuston Biosystems logo" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-expanded="false"
                        type="button"
                    >
                        <span className="sr-only">Main Menu</span>
                        {isOpen ? <XIcon/> : <MenuIcon/>}
                    </button>
                </div>

                <div className={`${isOpen ? '"block"' : 'hidden'} 
                    md:hidden
                    absolute w-full left-0 top-[72px] 
                  bg-neuston-Amber-Lighter 
                    border-t border-gray-300`}
                    >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-5 h-full">
                    <Link to="/" className="md:nav-btn">
                            Home
                    </Link>
                    <Link to="/for-cheese-producers" className="md:nav-btn">
                        For Cheese Producers
                    </Link>
                    <Link to="/for-investors" className="md:nav-btn">
                        For Investors
                    </Link>
                    <Link to="/sustainability" className="md:nav-btn">
                        Sustainability
                    </Link>
                    <Link to="/about" className="md:nav-btn">
                        About Us
                    </Link>
                    <Link to="/careers" className="md:nav-btn">
                        Careers
                    </Link>
                    <Link to="/contact" className="md:nav-btn">
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}