// import productDiagram from "../../assets/neuston-01.jpg";

export default function ProducersSolutionStatement() {
    return (
        <section className="fluid-layout-padding flex flex-col md:flex-row justify-center items-center md:gap-20 gap-12 text-neuston-Amber-Darkest bg-neuston-Amber-Lightest">
            {/*<img src={productDiagram} className="flex-1" />*/}
            <div className="flex-1 flex flex-col gap-6">
                <h2>A Simpler, Scalable On-Site System.</h2>
                <div className="flex-1 flex flex-col gap-3">
                    <p>A small, on-site water treatment plant that uses natural algae to clean your water and create a new product for you to use or sell.</p>
                    <p>Our system is designed to be affordable and easy to operate, fitting seamlessly into your existing production space.
                        <span className="text-content-highlight"> By using a natural, self-regulating process, we eliminate the complexity and high costs of traditional systems, </span>
                        allowing you to focus on what you do best: making great cheese.</p>
                </div>
            </div>
        </section>
    );
}