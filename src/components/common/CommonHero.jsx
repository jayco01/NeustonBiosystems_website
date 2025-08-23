import {Link} from "react-router-dom";

export default function CommonHero({heroImage, h1Text, subHeading}) {
    return (
        <div className="relative h-screen">
            <img
                src={heroImage}
                alt="Water Treatment Plant"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative h-full flex flex-col">
                <div>
                    <h1>{h1Text}</h1>
                </div>
                <div>
                    <p>{subHeading}</p>
                </div>
                <div>
                    <Link to={'/for-investors'}>For Investors</Link>
                    <Link to={'/for-cheese-producers'}>For Cheese Producers</Link>
                </div>
            </div>
        </div>
    )
}