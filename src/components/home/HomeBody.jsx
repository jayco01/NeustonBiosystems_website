import recycleIcon from "../../assets/recycle_icon.png"
import profitIcon from "../../assets/profit_icon.png"
import joinIcon from "../../assets/join_icon.png"

export default function HomeBody() {
    return (
        <section className="flex flex-col items-center fluid-layout-padding gap-20 bg-neuston-Amber-Lightest text-center">
            <div className="max-w-4/5 mx-auto">
                <h2 className="">Addressing Waste Management Challenges for Cheese Producers</h2>
                <p className="max-w-3/4 mx-auto text-neuston-Amber-Darkest">Mid-scale Cheese producers face significant challenges in managing their waste effectively.
                    Traditional solutions are often too costly, leaving them with limited options.</p>
            </div>
            <div className="flex md:flex-row flex-col gap-12 text-neuston-Amber-Darkest">
                <div className="flex flex-col items-center gap-6">
                    <img src={recycleIcon} alt="Recycle icon" className="icon-base-style"/>
                    <h4 >Revolutionizing Wastewater Treatment for Sustainability</h4>
                    <p>Our innovative technology purifies wastewater while generating valuable byproducts.</p>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <img src={profitIcon} alt="Profit icon" className="icon-base-style"/>
                    <h4>Creating Opportunities Through Sustainable Practices</h4>
                    <p>We turn waste management costs into profitable opportunities.</p>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <img src={joinIcon} alt="Join icon" className="icon-base-style"/>
                    <h4>Join Us in Making Sustainability Profitable</h4>
                    <p>Partner with us to embrace a sustainable future.</p>
                </div>
            </div>
        </section>
    )
}