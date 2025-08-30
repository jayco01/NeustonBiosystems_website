import ontarioMap from "../../../public/images/ontario_map.png"

export default function InvestorsTargetMarget() {
    return (
        <section className="fluid-layout-padding bg-neuston-Amber-Lighter text-neuston-Amber-Darkest flex flex-col md:flex-row items-center md:gap-20 gap-10">
            <div className="flex-1 order-2 md:order-1">
                <img src={ontarioMap} alt="Map of Onterio" className="max-w-105"/>
            </div>
            <div className="flex-2 flex flex-col md:gap-8 gap-4 md:order-2">
                <h2 className="max-w-155">A Significant, Underserved Market</h2>
                <p>The cheese wastewater cleanup market is substantial, valued at
                    <span className="text-content-highlight"> $130M in Canada and $1.6B in the USA. </span>
                    Our target, the underserved mid-scale producers, represents a significant 20-30% of this market.
                    Our initial strategy focuses on the dense cluster of producers in Ontario, providing a clear and concentrated point of entry.
                </p>
            </div>
        </section>
    );
}