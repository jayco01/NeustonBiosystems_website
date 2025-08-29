import {Link} from "react-router-dom";

export default function CommonCta({headingText, descriptionText}) {
    return(
      <section className="fluid-layout-padding flex flex-col md:items-center md:gap-8 gap-4 text-neuston-Amber-Darkest bg-neuston-Amber-Lightest">
          <h2>{headingText}</h2>
          <p>{descriptionText}</p>
          <Link to={'/contact'} className="btn-base-style bg-neuston-Amber text-neuston-Amber-Darkest">Contact Us</Link>
      </section>
    );
}