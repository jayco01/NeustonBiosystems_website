import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../../public/images/two-guys-making-cheese.jpg";
import CommonCta from "../components/common/CommonCta.jsx";
import SustainabilityGoals from "../components/sustainability/SustainabilityGoals.jsx";
import SustainabilitySolutions from "../components/sustainability/SustainabilitySolutions.jsx";
import SustainabilityCircularEconomy from "../components/sustainability/SustainabilityCircularEconomy.jsx";

export default function SustainabilityPage() {
    function H1Text() {
        return (
            <h1 className="max-w-200 text-neuston-Amber-Lightest"> Where <span className="text-neuston-Amber">Sustainability</span> Meets <span className="text-neuston-Amber">Innovation</span> </h1>
        );
    }
    const subHeading = "";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <SustainabilityGoals/>
            <SustainabilitySolutions/>
            <SustainabilityCircularEconomy/>
        </div>
    );
}
