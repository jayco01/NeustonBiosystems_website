import productDiagram from "../../assets/Water-Treatment-Solutions.jpg";

export default function ProducersSolutionStatement() {
    return (
        <section className="fluid-layout-padding flex flex-col md:flex-row justify-center items-center md:gap-20 gap-12 text-neuston-Amber-Darkest bg-neuston-Amber-Lightest">
            <div className="flex-1 flex justify-center items-center">
                <img src={productDiagram} className="md:max-w-1/2"/>
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <h2>A Simpler, Scalable, On-Site System.</h2>
                <div className="flex flex-col gap-3">
                    <p>Neuston is developing a small, on-site whey treatment plant that uses natural algae to clean your wastewater and creates agricultural products for you to use or sell.</p>
                    <p>Our system is designed to be affordable and easy to operate or mid-scale producers, fitting seamlessly into your existing process.
                        <span className="text-content-highlight"> By using a natural, self-regulating biology, we eliminate the complexity and high costs of traditional systems, </span>
                        allowing you to focus on what you do best: making great cheese.</p>
                </div>
            </div>
        </section>
    );
}