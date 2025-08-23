import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import InvestorsProblemStatement from "../components/for-investors/InvestorsProblemStatement.jsx";
import InvestorsTargetMarget from "../components/for-investors/InvestorsTargetMarget.jsx";
import InvestorsSolutionStatement from "../components/for-investors/InvestorsSolutionStatement.jsx";
import InvestorsRoadmap from "../components/for-investors/InvestorsRoadmap.jsx";
import InvestorsFundingNumbers from "../components/for-investors/InvestorsFundingNumbers.jsx";
import CommonCta from "../components/common/CommonCta.jsx";

export default function AboutUsPage() {
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
            <InvestorsRoadmap/>
            <InvestorsFundingNumbers/>
            <CommonCta headingText={ctaHeading} descriptionText={ctaDescription}/>
        </div>
    );
}
