import linkedinIcon from "../../../assets/LinkedIn_Icon.svg"

export default function Column3() {
    return (
        <div>
            <h4> Stay Connected</h4>
            <ul>
                <li>Contact Us</li>
                <li>
                    <img src={linkedinIcon}/>
                    <span>LinkedIn</span>
                </li>
            </ul>
        </div>
    )
}