import { Link } from "react-router-dom";
import Column1 from "./Column1.jsx";
import Column2 from "./Column2.jsx";
import Column3 from "./Column3.jsx";
import FooterBottom from "./FooterBottom.jsx";

export default function Footer() {
return (
    <footer className="fluid-layout-padding text-neuston-Amber-Lightest bg-neuston-Amber-Dark flex flex-col gap-6">
        <div className="flex sm:flex-row flex-col gap-6 justify-between">
            <div className="flex-1">
                <Column1/>
            </div>
            <div className="flex flex-1 sm:flex-row flex-col gap-6 justify-around">
                <Column2/>
                <Column3/>
            </div>
        </div>
        <FooterBottom/>
    </footer>
)
}