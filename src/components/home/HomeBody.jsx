import recycleIcon from "../../assets/recycle_icon.png"
import profitIcon from "../../assets/profit_icon.png"
import joinIcon from "../../assets/join_icon.png"

export default function HomeBody() {
    return (
        <section className="flex flex-col items-center fluid-layout-padding md:gap-20 gap-12 bg-neuston-Amber-Lightest text-center">
            <div className="xl:max-w-4/5 mx-auto">
                <h2 className="">Addressing Waste Management Challenges for Cheese Producers</h2>
                <p className="xl:max-w-3/4 mx-auto text-neuston-Amber-Darkest">Mid-scale Cheese producers face significant challenges in managing their waste effectively.
                    Traditional solutions are often too costly, leaving them with limited options.</p>
            </div>
            <div className="flex md:flex-row flex-col sm:gap-12 gap-6 text-neuston-Amber-Darkest">
                <div className="flex flex-col items-center sm:gap-6 flex-1">
                    <img src={recycleIcon} alt="Recycle icon" className="icon-base-style"/>
                    <h4>Wastewater treatment done sustainably</h4>
                    <p>Our algae-based technology purifies wastewater while generating valuable byproducts.</p>
                </div>
                <div className="flex flex-col items-center sm:gap-6 flex-1">
                    <img src={profitIcon} alt="Profit icon" className="icon-base-style"/>
                    <h4>Creating opportunities through sustainability</h4>
                    <p>We turn waste management costs into profitable up-cycling opportunities.</p>
                </div>
                <div className="flex flex-col items-center sm:gap-6 flex-1">
                    <img src={joinIcon} alt="Join icon" className="icon-base-style"/>
                    <h4>Making remediation more affordable</h4>
                    <p>Our solution avoids the complexity and costs of traditional systems.</p>
                </div>
            </div>
        </section>
    )
}