import productDiagram from "../../assets/CircularEconomy_diagram.png";
import checkIcon from "../../assets/check_icon.png"

export default function InvestorsSolutionStatement() {
    return (
        <section>
            <div>
                <h2>A Smarter, More Valuable Approach</h2>
                <p>Instead of complex, energy-intensive machinery, our system uses a modular design with advanced materials to create a self-regulating microbial ecosystem.
                    This approach
                    <span>dramatically lowers capital costs and allows us to upcycle pollutants into high-value, food-grade byproducts worth up to 10x more</span>
                    than those from conventional systems.
                </p>
                <ul className="list-none">
                    <li className="flex items-start">
                        <img src={checkIcon} alt="Check Icon"/>
                        <div>
                            <h4>Lower CAPEX</h4>
                            <p>Leverages mass-produced, low-cost materials.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <img src={checkIcon} alt="Check Icon"/>
                        <div>
                            <h4>Higher Value Byproducts</h4>
                            <p>Creates feed-grade products ($2-10/kg) vs. low-grade fertilizer (&lt$1/kg).</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <img src={checkIcon} alt="Check Icon"/>
                        <div>
                            <h4>Scalable & Modular</h4>
                            <p>Easily scales to meet producer needs without over-investing.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <img src={productDiagram}/>
            </div>
        </section>
    );
}