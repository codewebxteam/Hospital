export default function ContactForm() {
    return (
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100">
            {/* Brand Header */}
            <div className="mb-8 text-center italic">
                <div className="flex flex-col items-center justify-center mb-4">
                    <div className="text-4xl font-bold text-brand-green mb-2">
                        IndiCure<span className="text-xs align-top">®</span>
                    </div>
                    <div className="text-[10px] tracking-[0.3em] text-gray-500 font-medium uppercase">
                        Health Tours
                    </div>
                </div>
                <div className="inline-flex items-center gap-3 bg-brand-green text-white px-6 py-3 rounded-full shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                    </svg>
                    <span className="text-lg font-bold tracking-wide">+91-932-003-6777</span>
                </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-brand-dark font-semibold mb-2 text-sm" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-xl focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                            type="text"
                            id="name"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-brand-dark font-semibold mb-2 text-sm" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-xl focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                            type="tel"
                            id="phone"
                            placeholder="+91..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-brand-dark font-semibold mb-2 text-sm" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-xl focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-brand-dark font-semibold mb-2 text-sm" htmlFor="subject">
                        Subject
                    </label>
                    <select
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-xl focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all appearance-none"
                        id="subject"
                    >
                        <option>General Inquiry</option>
                        <option>Book Appointment</option>
                        <option>Second Opinion</option>
                    </select>
                </div>

                <div>
                    <label className="block text-brand-dark font-semibold mb-2 text-sm" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-xl focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none"
                        id="message"
                        rows="4"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button className="w-full bg-brand-green text-white font-bold py-4 rounded-xl hover:bg-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Send Message
                </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-500 text-xs">Response time: &lt; 24 Hours</span>
            </div>
        </div>
    );
}