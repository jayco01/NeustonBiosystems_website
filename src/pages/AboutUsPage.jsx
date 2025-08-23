import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import AboutUsFounder from "../components/about-us/AboutUsFounder.jsx";

export default function AboutUsPage() {
    function H1Text() {
        return (
            <h1> Driven by <span>Science</span> and a Passion for <span>Sustainability</span> </h1>
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
