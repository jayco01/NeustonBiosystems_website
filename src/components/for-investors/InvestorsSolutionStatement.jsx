import productDiagram from "../../../public/images/neuston-01.jpg";
import checkIcon from "../../../public/images/check_icon.png"

export default function InvestorsSolutionStatement() {
    return (
        <section className="fluid-layout-padding bg-neuston-Amber-Lightest text-neuston-Amber-Darkest flex flex-col md:flex-row items-center md:gap-20 gap-10">
            <div className="flex flex-col flex-1 md:gap-6 gap-3">
                <h2>A Smarter, More Valuable Approach</h2>
                <p>Instead of complex, energy-intensive machinery, our system uses a modular design with advanced materials to create a self-regulating microbial ecosystem.
                    This approach
                    <span>dramatically lowers capital costs and allows us to upcycle pollutants into high-value, food-grade byproducts worth up to 10x more</span>
                    than those from conventional systems.
                </p>
                <ul className="list-none">
                    <li className="flex items-start">
                        <div className="flex flex-row items-center">
                            <img src={checkIcon} alt="Check Icon" className="icon-base-style"/>
                            <div className="my-3">
                                <h4>Lower CAPEX</h4>
                                <p>Leverages mass-produced, low-cost materials.</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="flex flex-row items-center">
                            <img src={checkIcon} alt="Check Icon"  className="icon-base-style"/>
                            <div className="my-3">
                                <h4>Higher Value Byproducts</h4>
                                <p>Creates feed-grade products ($2-10/kg) vs. low-grade fertilizer (&lt$1/kg).</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="flex flex-row items-center">
                            <img src={checkIcon} alt="Check Icon"  className="icon-base-style"/>
                            <div className="my-3">
                                <h4>Scalable & Modular</h4>
                                <p>Easily scales to meet producer needs without over-investing.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <img src={productDiagram}/>
            </div>
        </section>
    );
}