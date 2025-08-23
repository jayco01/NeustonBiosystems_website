import CommonHero from "../components/common/CommonHero.jsx";
import CommonComparisonTable from "../components/common/CommonComparisonTable.jsx";
import heroImage from "../assets/two-guys-making-cheese.jpg"
import CommonCta from "../components/common/CommonCta.jsx";
import ProducersProblemStatement from "../components/for-cheese-producers/ProducersProblemStatement.jsx";
import ProducersListOfProblems from "../components/for-cheese-producers/ProducersListOfProblems.jsx";
import ProducersSolutionStatement from "../components/for-cheese-producers/ProducersSolutionStatement.jsx";

export default function ForCheeseProducersPage() {
    const h1Text = "Stop Paying to Throw Away a Valuable Resource";
    const subHeading = "Whey disposal is a significant expense for mid-scale cheese producers. " +
        "We're developing an innovative solution that transforms this challenge into an opportunity.";

    const ctaHeading = "Help Us Build the Solution.";
    const ctaDescription = "We are in the prototype phase and seeking innovative cheese producers to partner with us.";

    return (
        <div>
            <CommonHero heroImage={heroImage} h1Text={h1Text} subHeading={subHeading}/>
            <ProducersProblemStatement/>
            <ProducersListOfProblems/>
            <ProducersSolutionStatement/>
            <CommonComparisonTable/>
            <CommonCta headingText={ctaHeading} descriptionText={ctaDescription}/>
        </div>
    );
}
