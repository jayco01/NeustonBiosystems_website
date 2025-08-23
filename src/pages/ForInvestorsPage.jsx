import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import CommonCta from "../components/common/CommonCta.jsx";
import InvestorsProblemStatement from "../components/for-investors/InvestorsProblemStatement.jsx";
import InvestorsTargetMarget from "../components/for-investors/InvestorsTargetMarget.jsx";
import InvestorsSolutionStatement from "../components/for-investors/InvestorsSolutionStatement.jsx";

export default function ForInvestorsPage() {
    const h1Text = "Investing in the Future of the Circular Economy";
    const subHeading = "Tapping into the $6.4B global cheese cleanup market";

    const ctaHeading = "Take the Next Step";
    const ctaDescription = "Join us in revolutionizing the cheese industry and securing a sustainable future together.";

    return (
        <div>
            <CommonHero heroImage={heroImage} h1Text={h1Text} subHeading={subHeading}/>
            <InvestorsProblemStatement/>
            <InvestorsTargetMarget/>
            <InvestorsSolutionStatement/>
            <CommonCta headingText={ctaHeading} descriptionText={ctaDescription}/>
        </div>
    );
}
