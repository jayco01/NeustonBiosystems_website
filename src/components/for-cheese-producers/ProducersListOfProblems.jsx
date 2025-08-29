import truckIcon from "../../assets/truck_icon.svg";
import sewerIcon from "../../assets/sewer_icon.svg";
import chemicalPlantIcon from "../../assets/ChemicalPlant_Icon.png";


export default function ProducersListOfProblems() {
    const cardStyle = "bg-neuston-Amber-Lightest flex flex-col justify-start items-center md:gap-6 gap-3 px-3 py-3 rounded-lg text-center text-neuston-Amber-Darkest flex-1"
    return (
        <section className="fluid-layout-padding bg-neuston-Amber flex flex-col md:flex-row gap-6">
            <div className={cardStyle}>
                <img src={truckIcon} alt="truck icon" />
                <h4>Hauling</h4>
                <p>Annual off-site hauling costs can range from $50,000 to $500,000.</p>
            </div>
            <div className={cardStyle}>
                <img src={sewerIcon} alt="sewer icon" />
                <h4>Sewer Surcharges</h4>
                <p>Municipal sewer surcharges can cost up to $50 per 1,000 liters.</p>
            </div>
            <div className={cardStyle}>
                <img src={chemicalPlantIcon} alt="chemical plant icon" />
                <h4>On-Site Systems</h4>
                <p>100% of producers we surveyed have tried and failed to buy an affordable on-site system in the last 10 years.</p>
            </div>
        </section>
    );
}