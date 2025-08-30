import linkedinIcon from "../../../../public/images/LinkedIn_Icon.svg"
import {Link} from "react-router-dom";

export default function Column3() {
    return (
        <div>
            <h4> Stay Connected</h4>
            <ul>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="flex flex-row gap-1">
                    <img src={linkedinIcon}/>
                    <a
                        href="https://www.linkedin.com/company/neuston-biosystems/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    )
}