import {Routes,  Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import ForCheeseProducersPage from "./pages/ForCheeseProducersPage.jsx";
import ForInvestorsPage from "./pages/ForInvestorsPage.jsx";
import SustainabilityPage from "./pages/SustainabilityPage.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/for-cheese-producers" element={<ForCheeseProducersPage />} />
                    <Route path="/for-investors" element={<ForInvestorsPage />} />
                    <Route path="/sustainability" element={<SustainabilityPage />} />
                    <Route path="/about" element={<AboutUsPage/>} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
