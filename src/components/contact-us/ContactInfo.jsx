import emailIcon from "../../assets/mail_icon.svg"
import phoneIcon from "../../assets/call_icon.svg"
import locationIcon from "../../assets/location-on_icon.svg"

export default function ContactInfo() {
    return (
        <section className="fluid-layout-padding text-neuston-Amber-Darkest bg-neuston-Amber-Lightest">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="flex flex-col gap-3">
                    <div >
                        <img src={emailIcon} alt="Email icon" className="icon-base-style"/>
                    </div>
                    <h4>Email</h4>
                    <p>For inquiries, please reach out to us at the email below.</p>
                    <p>info@neustonbiosystems.com</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div >
                        <img src={phoneIcon} alt="Phone icon" className="icon-base-style"/>
                    </div>
                    <h4>Phone</h4>
                    <p>Feel free to call us for more information.</p>
                    <p>+1 (647) 953-2393</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div >
                        <img src={locationIcon} alt="location icon" className="icon-base-style"/>
                    </div>
                    <h4>Mailing Address</h4>
                    <p></p>
                    <p>1181-2482 Yonge Street, Toronto, ON, M4P 2H5, Canada</p>
                </div>
            </div>
        </section>
    );
}