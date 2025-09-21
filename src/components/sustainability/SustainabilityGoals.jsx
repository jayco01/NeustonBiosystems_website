import UNDiagram from "../../assets/UN-Sustainable-Development-Goals_graphic.png"

export default function SustainabilityGoals() {
    return (
      <section className="fluid-layout-padding bg-neuston-Amber-Lightest text-neuston-Amber-Darkest flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 flex flex-col gap-2 md:gap-4">
              <h2>Aligning with Global Sustainability Goals</h2>
              <p>
                  At Neuston Biosystems, we are committed to fostering a sustainable future.
                  Our innovative technology directly supports the UN Sustainable Development Goals, ensuring a cleaner planet for generations to come.
              </p>
          </div>
          <img src={UNDiagram} alt="UN Sustainable Development Goals" className="flex-1 max-w-150" />
      </section>
    );
}