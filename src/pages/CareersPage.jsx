import CommonHero from "../components/common/CommonHero.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg";
import CareersMicroBiologyVolunteer from "../components/careers/CareersMicroBiologyVolunteer.jsx";
import CareersCta from "../components/careers/CareersCta.jsx";

export default function CareersPage() {
    function H1Text() {
        return (
            <h1>Join Our Mission</h1>
        );
    }
    const subHeading = "";

    return (
        <div>
            <CommonHero heroImage={heroImage} H1Text={H1Text} subHeading={subHeading}/>
            <CareersMicroBiologyVolunteer/>
            <CareersCta/>
        </div>
    );
}
