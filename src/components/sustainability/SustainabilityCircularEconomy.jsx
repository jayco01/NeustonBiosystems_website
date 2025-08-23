import circularEconomyDiagram from "../../assets/CircularEconomy_diagram.png"

export default function SustainabilityCircularEconomy() {
    return (
      <section>
          <img src={circularEconomyDiagram} alt="Circular Economy Diagram" />
          <div>
              <h2>Enabling a True Circular Economy</h2>
              <p>Our technology does more than just treat waste. It closes the loop.
                  <span>We transform pollutants into valuable resources that can be reintroduced into the agricultural system,</span>
                  reducing environmental impact and creating new value for producers.</p>
          </div>
      </section>
    );
}