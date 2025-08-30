import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import ContactInfo from "../components/contact-us/ContactInfo.jsx";
import CommonNewsletterForm from "../components/common/CommonNewsletterForm.jsx";

export default function ContactPage() {
    function H1Text() {
        return(
            <h1 className="text-neuston-Amber-Lightest">Let's Connect</h1>
        );
    }
    const subHeading = "";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <ContactInfo/>
            <CommonNewsletterForm/>
        </div>
    );
}
