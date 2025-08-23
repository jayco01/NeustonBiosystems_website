import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import CommonCta from "../components/common/CommonCta.jsx";
import SustainabilityGoals from "../components/sustainability/SustainabilityGoals.jsx";

export default function SustainabilityPage() {
    function H1Text() {
        return (
            <h1> Where <span>Sustainability</span> Meets <span>Innovation</span> </h1>
        );
    }
    const subHeading = "";

    const ctaHeading = "Take the Next Step";
    const ctaDescription = "Join us in revolutionizing the cheese industry and securing a sustainable future together.";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <SustainabilityGoals/>
            <CommonCta headingText={ctaHeading} descriptionText={ctaDescription}/>
        </div>
    );
}
