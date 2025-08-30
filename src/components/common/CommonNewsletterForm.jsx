export default function CommonNewsletterForm() {
    // URL will be replaced ones Scott Finish signing up for mailerlite
    const MAILERLITE_ACTION_URL = "https://assets.mailerlite.com/jsonp/your_unique_id/forms/your_form_id/subscribe";

    return (
        <section className="fluid-layout-padding bg-neuston-Amber-Lighter text-neuston-Amber-Darkest flex flex-col items-center gap-3">
            <h2 >Stay Connected with Us</h2>
            <p className="mt-2 text-neuston-Amber-Darkest">
                Stay up to date with our progress and innovations in wastewater treatment technology.
            </p>
            <div>
                <form
                    action={MAILERLITE_ACTION_URL}
                    method="post"
                    target="_blank" // this will eventually open a thank you page
                    className="mt-4 flex"
                >
                    <input
                        type="email"
                        name="fields[email]" // Email Input name will be replaced ones Scott Finish signing up for mailerlite
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 border text-neuston-Amber-Dark rounded-l-md focus:ring-green-500 focus:border-green-500 font-bold"
                    />
                    <button
                        type="submit"
                        className="btn-base-style bg-neuston-Amber text-neuston-Amber-Darkest hover:bg-neuston-Amber-Lightest border-solid border-2 border-neuston-Amber"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p>By clicking Subscribe Now, you agree to our Terms and Conditions.</p>
            </div>
        </section>
    );
}