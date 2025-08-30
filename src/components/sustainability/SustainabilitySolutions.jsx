import checkIcon from "../../../public/images/check_icon.png";

export default function SustainabilitySolutions() {
    return (
        <section className="fluid-layout-padding text-neuston-Amber-Darkest bg-neuston-Amber-Lighter">
            <ul className="list-none">
                <li className="flex items-start p-3 m-3 bg-neuston-Amber-Light rounded-xl">
                    <div className="flex flex-row items-center">
                    <img src={checkIcon} alt="Check Icon"/>
                    <div>
                        <h4>Protecting Waterways</h4>
                        <p>Our process reclaims phosphorus—a limited resource and harmful pollutant—without the need for costly chemicals.</p>
                    </div>
                        </div>
                </li>
                <li className="flex items-start p-3 m-3 bg-neuston-Amber-Light rounded-xl">
                    <div className="flex flex-row items-center">
                    <img src={checkIcon} alt="Check Icon"/>
                    <div>
                        <h4>Reducing Energy Use</h4>
                        <p>We treat high-load waste streams efficiently, avoiding the high energy costs associated with traditional aeration systems.</p>
                    </div>
                        </div>
                </li>
                <li className="flex items-start p-3 m-3 bg-neuston-Amber-Light rounded-xl">
                    <div className="flex flex-row items-center">
                    <img src={checkIcon} alt="Check Icon"/>
                    <div>
                        <h4>Creating Sustainable Products</h4>
                        <p>The microalgae from our system is a nutrient-rich, sustainable alternative for biofertilizers and animal feed.</p>
                    </div>
                        </div>
                </li>
            </ul>
        </section>
    )
}