import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import ContactInfo from "../components/contact-us/ContactInfo.jsx";

export default function ContactPage() {
    function H1Text() {
        return(
            <h1>Let's Connect</h1>
        );
    }
    const subHeading = "";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <ContactInfo/>
        </div>
    );
}
