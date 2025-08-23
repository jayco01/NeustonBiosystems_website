import mixingCheese from "../../assets/CheeseWhey.jpg"

export default function ProducersProblemStatementSection() {
    return (
      <div>
          <div>
              <h2>A Costly Mid-Scale Dilemma</h2>
              <p>As a mid-sized cheese producers, you're likely caught in a tough spot.
                  <span>You produce too much whey for simple disposal, yet not enough to justify a large-scale treatment system.</span></p>
          </div>
          <img src={mixingCheese} alt="mixingCheese" />
      </div>
    );
}