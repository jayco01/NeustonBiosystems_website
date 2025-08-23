import {Link} from "react-router-dom";

export default function HomeCta() {
    return (
        <section>
            <div>
                <h2>Explore Your Opportunities Today</h2>
            </div>
            <div>
                <p>Join us in transforming the food industry through innovative waste management solutions.
                    Whether you're an investor or a cheese producers, we have opportunities tailored for you.</p>
                <div>
                    <Link to={'/for-investors'}>For Investors</Link>
                    <Link to={'/for-cheese-producers'}>For Cheese Producers</Link>
                </div>
            </div>
        </section>
    )
}