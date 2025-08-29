import mixingCheese from "../../assets/CheeseWhey.jpg"

export default function ProducersProblemStatement() {
    return (
      <section className="fluid-layout-padding bg-neuston-Amber-Lightest flex flex-col md:flex-row justify-center items-center md:gap-20 gap-12">
          <div className="flex-1 flex flex-col gap-8">
              <h2 className="text-9xl">A Costly Mid-Scale Dilemma</h2>
              <p>As a mid-sized cheese producers, you're likely caught in a tough spot.
                  <span className="text-content-highlight">You produce too much whey for simple disposal, yet not enough to justify a large-scale treatment system.</span>
              </p>
          </div>
          <div className="flex-1">
            <img src={mixingCheese} alt="mixingCheese" className="rounded-lg"/>
          </div>
      </section>
    );
}