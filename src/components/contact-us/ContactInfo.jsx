import emailIcon from "../../assets/mail_icon.svg"
import phoneIcon from "../../assets/call_icon.svg"
import locationIcon from "../../assets/location-on_icon.svg"

export default function ContactInfo() {
    return (
        <section>
            <div>
                <div>
                    <img src={emailIcon} alt="Email icon" />
                    <h4>Email</h4>
                    <p>For inquiries, please reach out to us at the email below.</p>
                    <p>info@neustonbiosystems.com</p>
                </div>
                <div>
                    <img src={phoneIcon} alt="Phone icon" />
                    <h4>Phone</h4>
                    <p>Feel free to call us for more information.</p>
                    <p>+1 (647) 953-2393</p>
                </div>
                <div>
                    <img src={locationIcon} alt="location icon" />
                    <h4>Office</h4>
                    <p>Visit us at our office location in Toronto.</p>
                    <p>Toronto, ON</p>
                </div>
            </div>
        </section>
    );
}