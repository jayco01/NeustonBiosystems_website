export default function CommonHero({heroImage, H1Text, subHeading}) {
    return (
        <section className="relative flex items-center h-80">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{backgroundImage: `url(${heroImage})`}}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

            <div className="relative z-10 fluid-layout-padding flex flex-col md:gap-6">
                <div className="max-w-240">
                    <H1Text/>
                </div>
                <div>
                    <p className="common-subheading-base-syle">{subHeading}</p>
                </div>
            </div>
        </section>
    )
}