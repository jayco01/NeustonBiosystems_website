import productDiagram from "../../assets/CircularEconomy_diagram.png";

export default function ProducersSolutionSection() {
    return (
        <div>
            <img src={productDiagram} />
            <div>
                <h2>A Simpler, Scalable On-Site System.</h2>
                <p>A small, on-site water treatment plant that uses natural algae to clean your water and create a new product for you to use or sell.</p>
                <p>Our system is designed to be affordable and easy to operate, fitting seamlessly into your existing production space.
                    <span>By using a natural, self-regulating process, we eliminate the complexity and high costs of traditional systems, </span>
                    allowing you to focus on what you do best: making great cheese.</p>
            </div>
        </div>
    );
}