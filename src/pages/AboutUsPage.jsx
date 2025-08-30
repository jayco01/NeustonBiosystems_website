import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../../public/images/two-guys-making-cheese.jpg";
import AboutUsFounder from "../components/about-us/AboutUsFounder.jsx";

export default function AboutUsPage() {
    function H1Text() {
        return (
            <h1 className="text-neuston-Amber-Lightest"> Driven by <span className="text-neuston-Amber">Science</span> and a Passion for <span className="text-neuston-Amber">Sustainability</span> </h1>
        );
    }
    const subHeading = "";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <AboutUsFounder/>
        </div>
    );
}
