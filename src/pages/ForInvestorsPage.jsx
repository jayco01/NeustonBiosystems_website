import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../../public/images/two-guys-making-cheese.jpg";
import CommonCta from "../components/common/CommonCta.jsx";
import InvestorsProblemStatement from "../components/for-investors/InvestorsProblemStatement.jsx";
import InvestorsTargetMarget from "../components/for-investors/InvestorsTargetMarget.jsx";
import InvestorsSolutionStatement from "../components/for-investors/InvestorsSolutionStatement.jsx";
import InvestorsRoadmap from "../components/for-investors/InvestorsRoadmap.jsx";
import InvestorsFundingNumbers from "../components/for-investors/InvestorsFundingNumbers.jsx";

export default function ForInvestorsPage() {
    function H1Text() {
        return (
            <h1 className="text-neuston-Amber-Lightest">Investing in the Future of the <span className="text-neuston-Amber">Circular Economy</span></h1>
        );
    }
    const subHeading = "Tapping into the $6.4B global cheese cleanup market";

    const ctaHeading = "Take the Next Step";
    const ctaDescription = "Join us in revolutionizing the cheese industry and securing a sustainable future together.";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <InvestorsProblemStatement/>
            <InvestorsTargetMarget/>
            <InvestorsSolutionStatement/>
            <InvestorsRoadmap/>
            <InvestorsFundingNumbers/>
            <CommonCta headingText={ctaHeading} descriptionText={ctaDescription}/>
        </div>
    );
}
