import {Link} from "react-router-dom";

export default function CommonCta({headingText, descriptionText}) {
    return(
      <section>
          <h2>{headingText}</h2>
          <p>{descriptionText}</p>
          <Link to={'/contact'} >Contact Us</Link>
      </section>
    );
}