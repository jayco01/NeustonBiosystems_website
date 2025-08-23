import { Link } from "react-router-dom";
import Column1 from "./Column1.jsx";
import Column2 from "./Column2.jsx";
import Column3 from "./Column3.jsx";
import FooterBottom from "./FooterBottom.jsx";

export default function Footer() {
return (
    <div>
        <div>
            <Column1/>
            <Column2/>
            <Column3/>
        </div>
        <FooterBottom/>
    </div>
)
}