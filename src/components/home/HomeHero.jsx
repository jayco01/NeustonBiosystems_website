import {Link} from "react-router-dom";
import heroImage from "../../assets/water-treatment-plant_home-page.jpg"

export default function HomeHero() {
    return (
        // <section className="h-screen z-0 ">
        <section className="relative flex items-center justify-center h-160 text-center">
            {/*<img*/}
            {/*    src={heroImage}*/}
            {/*    alt="Water Treatment Plant"*/}
            {/*    className="inset-0 w-full h-full object-cover"*/}
            {/*/>*/}

            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{backgroundImage: `url(${heroImage})`}}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

            <div className="relative z-10">
                <div className="home-heading-text-spacing">
                    <div className="home-heading-text-spacing">
                        <h1 className="">From Waste Stream</h1>
                        <h1>To Revenue Stream</h1>
                    </div>
                    <div className="home-heading-text-spacing">
                        <p>At Neuston Biosystems, we transform wastewater challenges into profitable solutions for food producers.
                            Join us in revolutionizing sustainability in the cheese industry.</p>
                    </div>
                    <div className="home-heading-text-spacing">
                        <Link to={'/for-investors'}>For Investors</Link>
                        <Link to={'/for-cheese-producers'}>For Cheese Producers</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}