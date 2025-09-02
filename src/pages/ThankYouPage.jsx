import { Link } from "react-router-dom";

export default function ThankYouPage() {
    return (
        <section className="text-center fluid-layout-padding bg-neuston-Amber-Lightest">
            <h1 className="text-neuston-Amber-Darkest">Thank You!</h1>
            <p className="mt-4 text-xl text-neuston-Amber-Darker">
                Your subscription has been confirmed. You've been added to our list and will hear from us soon.
            </p>
            <div className="mt-8">
                <Link
                    to="/"
                    className="btn-base-style bg-neuston-Amber text-neuston-Amber-Darkest"
                >
                    Return to Home
                </Link>
            </div>
        </section>
    );
}