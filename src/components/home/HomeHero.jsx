import {Link} from "react-router-dom";
import heroImage from "../../assets/water-treatment-plant_home-page.jpg"

export default function HomeHero() {
    return (
        <section className="relative flex items-center h-160 ">

            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{backgroundImage: `url(${heroImage})`}}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

            <div className="relative z-10 fluid-layout-padding">
                <div className="flex flex-col items-start gap-24">
                    <div className="flex flex-col items-start">
                        <h1>From Waste Stream</h1>
                        <h1>To <span className="text-neuston-Amber">Revenue Stream</span></h1>
                    </div>
                    <div className="">
                        <p className="text-neuston-Amber-Lightest">At Neuston Biosystems, we transform wastewater challenges into profitable solutions for food producers.
                            Join us in revolutionizing sustainability in the cheese industry.</p>
                    </div>
                    <div className="flex flex-row gap-16">
                        <Link to={'/for-investors'}>For Investors</Link>
                        <Link to={'/for-cheese-producers'}>For Cheese Producers</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}