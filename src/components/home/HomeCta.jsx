import {Link} from "react-router-dom";

export default function HomeCta() {
    return (
        <section className="text-neuston-Amber-Darkest flex flex-col lg:flex-row gap-3 lg:gap-10 fluid-layout-padding bg-neuston-Amber-Lighter">
            <div className="flex flex-1">
                <h2>Explore Your Opportunities Today</h2>
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <p className="">Join us in transforming the food industry through innovative waste management solutions.
                    Whether you're an investor or a cheese producers, we have opportunities tailored for you.</p>
                <div className="flex flex-col lg:flex-row gap-1">
                    <Link to={'/for-investors'} className="btn-base-style bg-neuston-Amber">For Investors</Link>
                    <Link to={'/for-cheese-producers'} className="btn-base-style border-solid border-neuston-Amber-Darkest border-1">For Cheese Producers</Link>
                </div>
            </div>
        </section>
    )
}