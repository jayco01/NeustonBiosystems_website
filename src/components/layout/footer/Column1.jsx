import neustonLogo from "../../../assets/NeustonBiosystemsLOGO.png"
import {Link} from "react-router-dom";
export default function Column1() {
    return (
        <div>
            <div>
                <Link to="/">
                    <img src={neustonLogo} alt="Neuston Biosystems Logo" />
                </Link>
            </div>
            <div>
                <p>Subscribe to our newsletter for the latest updates on features and innovations.</p>
            </div>
        </div>
    )
}