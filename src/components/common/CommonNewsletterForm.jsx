export default function CommonNewsletterForm() {
    const BREVO_ACTION_URL = "https://05d39b3e.sibforms.com/serve/MUIFAHB96fT6pdJ3kmdUEqGdaUCR5NsEfJNVgPE_iWZzX1kpYgjqiGGvMqot9pTHXgKkoVwavGwYlIqF382wpXGfw-lCRtcUIOEOtTdNo0vgcPcQC8qnSGlLa6BrtiaEq2GUSB-x7ZbbKrxL0nBiv1CpFqJDX2SgS7mWTPkEWQDy6uvPTF5dW9RcjaVEsqw9W1HkfbC14SWlUlz3";

    return (
        <section className="fluid-layout-padding bg-neuston-Amber-Lighter text-neuston-Amber-Darkest flex flex-col items-center gap-3">
            <h2>Stay Connected with Us</h2>
            <p className="mt-2 text-neuston-Amber-Darkest text-center">
                Stay up to date with our progress and innovations in wastewater treatment technology.
            </p>
            <div>
                <form
                    action={BREVO_ACTION_URL}
                    method="post"
                    target="_blank"
                    className="mt-4 flex"
                >
                    <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 border text-neuston-Amber-Dark rounded-l-md focus:ring-green-500 focus:border-green-500 font-bold"
                    />
                    <button
                        type="submit"
                        className="btn-base-style bg-neuston-Amber text-neuston-Amber-Darkest hover:bg-neuston-Amber-Lightest border-solid border-2 border-neuston-Amber text-nowrap"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p className="mt-2 text-xs text-gray-500">
                    By clicking Subscribe Now, you agree to our Terms and Conditions.
                </p>
            </div>
        </section>
    );
}

