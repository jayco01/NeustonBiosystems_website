import { useNavigate } from 'react-router-dom';

export default function CommonNewsletterForm() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/thank-you');
    };

    return (
        <section className="fluid-layout-padding bg-neuston-Amber-Lighter text-neuston-Amber-Darkest flex flex-col items-center gap-3">
            <h2>Stay Connected with Us</h2>
            <p className="mt-2 text-neuston-Amber-Darkest">
                Stay up to date with our progress and innovations in wastewater treatment technology.
            </p>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex"
                >
                    <input
                        type="email"
                        name="fields[email]"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 border text-neuston-Amber-Dark rounded-l-md focus:ring-green-500 focus:border-green-500 font-bold"
                    />
                    <button
                        type="submit"
                        className="btn-base-style bg-neuston-Amber text-neuston-Amber-Darkest hover:bg-neuston-Amber-Lightest border-solid border-2 border-neuston-Amber rounded-r-md rounded-l-none"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p className="text-sm mt-2">By clicking Subscribe Now, you agree to our Terms and Conditions.</p>
            </div>
        </section>
    );
}
