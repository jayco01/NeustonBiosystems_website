import CommonTimelineItem from "../common/CommonTimelineItem.jsx";

function HorizontalLine() {
    return (
        <div className="relative h-1 bg-neuston-Amber-Darkest">
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-neuston-Amber-Darkest rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}

export default function InvestorsRoadmap() {
    return (
        <section className="fluid-layout-padding text-neuston-Amber-Darkest bg-neuston-Amber flex flex-col md:gap-12 gap-8">
            <div className="flex flex-col gap-4 md:gap-8">
                <h2>Our Roadmap to Commercialization</h2>
                <p className="max-w-225">
                    Our journey is structured in three key stages, each designed to ensure our technology is market-ready.
                    We aim to validate, pilot, and scale our innovative solution for the cheese industry.
                </p>
            </div>

            <div className="relative flex flex-col gap-8 md:grid md:grid-cols-3 md:grid-rows-[1fr_auto_1fr] md:gap-2">

                <div className="absolute top-0 left-3 w-0.5 h-full bg-neuston-Amber-Darkest md:hidden"></div>

                <CommonTimelineItem
                    year="2026-2027"
                    title="Validation"
                    description="De-risking technology and validating the market with our initial hardware and IP."
                    position="bottom"
                    className="md:col-start-1 md:row-start-3"
                />

                <CommonTimelineItem
                    year="2028-2029"
                    title="Piloting"
                    description="Conducting full-scale prototype trials with commercial cheese producers."
                    position="top"
                    className="md:col-start-2 md:row-start-1"
                />

                <CommonTimelineItem
                    year="2030+"
                    title="Scaling"
                    description="Achieving final product certification and scaling to become bank-financeable."
                    position="bottom"
                    className="md:col-start-3 md:row-start-3"
                />

                <div className="hidden md:grid md:grid-cols-3 md:gap-2 md:col-span-3 md:row-start-2">
                    <HorizontalLine />
                    <HorizontalLine />
                    <HorizontalLine />
                </div>
            </div>
        </section>
    );
}