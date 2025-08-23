import {Link} from "react-router-dom";

export default function CommonHero({heroImage, H1Text, subHeading}) {
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
                    <H1Text/>
                </div>
                <div>
                    <p>{subHeading}</p>
                </div>
            </div>
        </section>
    )
}