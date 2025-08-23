import truckIcon from "../../assets/truck_icon.svg";
import sewerIcon from "../../assets/sewer_icon.svg";
import chemicalPlantIcon from "../../assets/ChemicalPlant_Icon.png";


export default function ProducersProblemsSection() {
    return (
        <div>
            <div>
                <img src={truckIcon} alt="truck icon" />
                <h3>Hauling</h3>
                <p>Annual off-site hauling costs can range from $50,000 to $500,000.</p>
            </div>
            <div>
                <img src={sewerIcon} alt="sewer icon" />
                <h3>Sewer Surcharges</h3>
                <p>Municipal sewer surcharges can cost up to $50 per 1,000 liters.</p>
            </div>
            <div>
                <img src={chemicalPlantIcon} alt="chemical plant icon" />
                <h3>On-Site Systems</h3>
                <p>100% of producers we surveyed have tried and failed to buy an affordable on-site system in the last 10 years.</p>
            </div>
        </div>
    );
}