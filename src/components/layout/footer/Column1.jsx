import neustonLogo from "../../../../public/images/NeustonBiosystemsLOGO.png"
import {Link} from "react-router-dom";
export default function Column1() {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <Link to="/">
                    <img src={neustonLogo} alt="Neuston Biosystems Logo" className="max-w-21 max-h-10"/>
                </Link>
            </div>
            <div>
                <p>info@neustonbiosystems.com</p>
                <p>+1 (647) 953-2393</p>
                <p>Toronto, ON</p>
            </div>
        </div>
    )
}