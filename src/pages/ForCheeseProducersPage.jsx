import CommonHero from "../components/common/CommonHero.jsx";
import ComparisonTable from "../components/common/ComparisonTable.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg"

export default function ForCheeseProducersPage() {
    const h1Text = "Stop Paying to Throw Away a Valuable Resource"
    const subHeading = "Whey disposal is a significant expense for mid-scale cheese producers. " +
        "We're developing an innovative solution that transforms this challenge into an opportunity."
    return (
        <div>
            <CommonHero heroImage={heroImage} h1Text={h1Text} subHeading={subHeading}/>
            <ComparisonTable/>
        </div>
    );
}
