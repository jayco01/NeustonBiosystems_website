import UNDiagram from "../../assets/UN-Sustainable-Development-Goals_graphic.png"

export default function SustainabilityGoals() {
    return (
      <section>
          <div>
              <h2>Aligning with Global Sustainability Goals</h2>
              <p>At Neuston Biosystems, we are committed to fostering a sustainable future.
                  Our innovative technology directly supports the UN Sustainable Development Goals, ensuring a cleaner planet for generations to come.</p>
          </div>
          <img src={UNDiagram} alt="UN Sustainable Development Goals" />
      </section>
    );
}