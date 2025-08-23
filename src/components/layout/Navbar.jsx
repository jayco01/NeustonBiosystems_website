import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                <div>
                    <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
                        Neuston Biosystems
                    </Link>
                </div>
                <div className="md:flex items-center space-x-8">
                    <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </Link>
                    <Link to="/for-investors" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        For Investors
                    </Link>
                    <Link to="/for-cheese-producers" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        For Cheese Producers
                    </Link>
                    <Link to="/sustainability" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Sustainability
                    </Link>
                    <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About Us
                    </Link>
                    <Link to="/careers" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Careers
                    </Link>
                    <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}