import costScaleGraph from "../../assets/MidScale-PricedOut.png"

export default function InvestorsProblemStatement() {
    return (
        <section>
            <div>
                <div>
                    <h2>The Mid-Scale is Priced Out</h2>
                </div>
                <div>
                    <p>Mid-scale food producers (15-150 employees) are trapped in a financial bind.
                        <span>They generate too much wastewater for small-scale solutions but lack the revenue for large, industrial systems.</span> </p>
                    <div>
                        <p>This leaves them with two unaffordable choices: </p>
                        <ul>
                            <li>paying over $100,000 per year for off-site hauling </li>
                            <li>or facing capital costs exceeding $350,000 for inefficient on-site systems. </li>
                        </ul>
                    </div>
                    <p>This 'valley of death' means a significant resource is left untapped, creating a major opportunity for an affordable, scalable solution.</p>
                </div>
            </div>
            <div>
                <img src={costScaleGraph} alt="Cost Scale Graph" />
            </div>
        </section>
    );
}