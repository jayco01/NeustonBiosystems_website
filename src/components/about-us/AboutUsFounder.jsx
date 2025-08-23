import scottImage from "../../assets/Scott Pierobon-8002_1MB_cropped.png"

export default function AboutUsFounder() {
    return (
        <section>
            <div>
                <h2>Founder and CEO</h2>
                <p>
                    <span>Scott Pierobon, PhD, </span>
                    is an engineer, physicist, and microbiologist with 20 years of experience developing cutting-edge hardware in academic, commercial, and government labs.
                    His work focuses on micro- and nano-technologies spanning optics, fluidics, and biophysics.
                    He holds a PhD in Mechanical Engineering with a specialization in algae bioreactor design, bringing a wealth of direct expertise to Neuston's mission.
                </p>
            </div>
            <img src={scottImage} alt="Profile picture of the Founder Scott Prierobon"/>
        </section>
    );
}