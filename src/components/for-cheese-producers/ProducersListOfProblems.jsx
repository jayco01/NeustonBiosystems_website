import truckIcon from "../../assets/truck_icon.svg";
import sewerIcon from "../../assets/sewer_icon.svg";
import chemicalPlantIcon from "../../assets/ChemicalPlant_Icon.png";


export default function ProducersListOfProblems() {
    const cardStyle = "bg-neuston-Amber-Lightest flex flex-col justify-start items-center md:gap-6 gap-3 px-3 py-3 rounded-lg text-center text-neuston-Amber-Darkest flex-1"
    return (
        <section className="fluid-layout-padding bg-neuston-Amber flex flex-col gap-6 items-center">
          <div className="flex flex-col md:flex-row gap-6">
            <div className={cardStyle}>
                  <img src={truckIcon} alt="truck icon" />
                  <h4>Hauling</h4>
                  <p>Off-site hauling can cost up to $50 per 1,000 liters.</p>
              </div>
              <div className={cardStyle}>
                  <img src={sewerIcon} alt="sewer icon" />
                  <h4>Sewer Surcharges</h4>
                  <p>Municipal sewer surcharges can cost up to $50 per 1,000 liters.</p>
              </div>
              <div className={cardStyle}>
                  <img src={chemicalPlantIcon} alt="chemical plant icon" />
                  <h4>Traditional On-Site Systems</h4>
                  <p>Industry-standard wastewater treatment systems for whey cost $30,000 - 100,000 with operation costs up to $5 per 1000 liters.</p>
              </div>
          </div>
          <div className={`${cardStyle} md:max-w-2xl py-6 w-full` }>
            <p>
              All mid-scale producers we surveyed had attempted on-site treatment in the past decade,
              but none found a system affordable or manageable, forcing them to rely on hauling and sewer services.
            </p>
          </div>
        </section>
    );
}