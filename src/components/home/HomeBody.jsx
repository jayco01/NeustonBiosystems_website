import recycleIcon from "../../assets/recycle_icon.png"
import profitIcon from "../../assets/profit_icon.png"
import joinIcon from "../../assets/join_icon.png"

export default function HomeBody() {
    return (
        <div>
            <div>
                <h2>Addressing Waste Management Challenges for Cheese Producers</h2>
                <p>Mid-scale Cheese producers face significant challenges in managing their waste effectively.
                    Traditional solutions are often too costly, leaving them with limited options.</p>
            </div>
            <div>
                <div>
                    <img src={recycleIcon} alt="Recycle icon" />
                    <h4>Revolutionizing Wastewater Treatment for Sustainability</h4>
                    <p>Our innovative technology purifies wastewater while generating valuable byproducts.</p>
                </div>
                <div>
                    <img src={profitIcon} alt="Profit icon" />
                    <h4>Creating Opportunities Through Sustainable Practices</h4>
                    <p>We turn waste management costs into profitable opportunities.</p>
                </div>
                <div>
                    <img src={joinIcon} alt="Join icon" />
                    <h4>Join Us in Making Sustainability Profitable</h4>
                    <p>Partner with us to embrace a sustainable future.</p>
                </div>
            </div>
        </div>
    )
}