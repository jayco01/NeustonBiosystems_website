export default function CommonHero({heroImage, H1Text, subHeading}) {
    return (
        <section className="relative flex items-center h-80">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{backgroundImage: `url(${heroImage})`}}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

            <div className="relative z-10 fluid-layout-padding">
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