import circularEconomyDiagram from "../../../public/images/CircularEconomy_diagram.png"

export default function SustainabilityCircularEconomy() {
    return (
      <section className="fluid-layout-padding text-neuston-Amber-Darkest bg-neuston-Amber-Lightest flex flex-col md:flex-row items-center md:gap-20 gap-10">
          <img src={circularEconomyDiagram} alt="Circular Economy Diagram" className=" md:max-w-150 max-w-11/12"/>
          <div className="flex flex-col gap-4 md:gap-8">
              <h2>Enabling a True Circular Economy</h2>
              <p>Our technology does more than just treat waste. It closes the loop.
                  <span className="text-content-highlight">We transform pollutants into valuable resources that can be reintroduced into the agricultural system, </span>
                  reducing environmental impact and creating new value for producers.</p>
          </div>
      </section>
    );
}