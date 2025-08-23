import {Link} from "react-router-dom";
import heroImage from "../../assets/water-treatment-plant_home-page.jpg"

export default function HomeHero() {
    return (
        <section className="relative h-screen">
            <img
                src={heroImage}
                alt="Water Treatment Plant"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative h-full flex flex-col">
                <div>
                    <h1>From Waste Stream</h1>
                    <h1>To Revenue Stream</h1>
                </div>
                <div>
                    <p>At Neuston Biosystems, we transform wastewater challenges into profitable solutions for food producers.
                        Join us in revolutionizing sustainability in the cheese industry.</p>
                </div>
                <div>
                    <Link to={'/for-investors'}>For Investors</Link>
                    <Link to={'/for-cheese-producers'}>For Cheese Producers</Link>
                </div>
            </div>
        </section>
    )
}