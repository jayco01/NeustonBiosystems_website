export default function CommonNewsletterForm() {
    // URL will be replaced ones Scott Finish signing up for mailerlite
    const MAILERLITE_ACTION_URL = "https://assets.mailerlite.com/jsonp/your_unique_id/forms/your_form_id/subscribe";

    return (
        <div>
            <h3 className="text-lg font-bold">Stay Connected with Us</h3>
            <p className="mt-2 text-gray-600">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded-r-md hover:bg-green-700"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p>By clicking Subscribe Now, you agree to our Terms and Conditions.</p>
            </div>
        </div>
    );
}