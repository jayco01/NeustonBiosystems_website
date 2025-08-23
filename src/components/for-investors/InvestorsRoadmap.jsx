import CommonTimelineItem from "../common/CommonTimelineItem.jsx";


export default function InvestorsRoadmap() {
    function Line() {
        return (
            <div className="relative h-1 bg-gray-300">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
        );
    }
    return (
        <section>
            <div>
                <h2>Our Roadmap to Commercialization</h2>
                <p>Our journey is structured in three key stages, each designed to ensure our technology is market-ready.
                    We aim to validate, pilot, and scale our innovative solution for the cheese industry.
                </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr] w-full max-w-md h-96 gap-2 text-center">
                {/* Row 1 */}
                <div/>
                <CommonTimelineItem
                    year="2028-2029"
                    title="Piloting"
                    description="Conducting full-scale prototype trials with commercial cheese producers."
                    position="top"
                />
                <div/>


                {/* Row 2 */}
                <Line/>
                <Line/>
                <Line/>

                {/* Row 3 */}
                <CommonTimelineItem
                    year="2026-2027"
                    title="Validation"
                    description="De-risking technology and validating the market with our initial hardware and IP."
                    position="bottom"
                />
                <div/>
                <CommonTimelineItem
                    year="2030+"
                    title="Scaling"
                    description="Achieving final product certification and scaling to become bank-financeable."
                    position="bottom"
                />
            </div>
        </section>
    );
}