import ontarioMap from "../../assets/ontario_map.png"

export default function InvestorsTargetMarget() {
    return (
        <section>
            <div>
                <img src={ontarioMap} alt="Map of Onterio"/>
            </div>
            <div>
                <h2>A Significant, Underserved Market</h2>
                <p>The cheese wastewater cleanup market is substantial, valued at
                    <span>$130M in Canada and $1.6B in the USA.</span>
                    Our target, the underserved mid-scale producers, represents a significant 20-30% of this market.
                    Our initial strategy focuses on the dense cluster of producers in Ontario, providing a clear and concentrated point of entry.
                </p>
            </div>
        </section>
    );
}