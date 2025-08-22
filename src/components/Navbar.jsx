import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Neuston Biosystems</Link>
                <div className="space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-green-800">Home</Link>
                    <Link to="/for-cheese-producers" className="text-gray-600 hover:text-green-800">For Cheese Producers</Link>
                    <Link to="/for-investors" className="text-gray-600 hover:text-green-700">For Investors</Link>
                    <Link to="/sustainability" className="text-gray-600 hover:text-green-700">Sustainability</Link>
                    <Link to="/about" className="text-gray-600 hover:text-green-700">About Us</Link>
                    <Link to="/careers" className="text-gray-600 hover:text-green-700">Careers</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-green-700">Contact</Link>
                </div>
            </div>
        </nav>
    );
}