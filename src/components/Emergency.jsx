import { Link } from 'react-router-dom';

export default function Emergency() {
    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-green rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-left md:w-2/3">
                        <div className="inline-block bg-brand-green/20 text-brand-green font-bold px-4 py-1 rounded-full mb-4 animate-pulse">
                            🚨 EMERGENCY RESPONSE
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Experiencing Chest Pain? <br />
                            <span className="text-brand-green">Every Second Counts.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Our cardiac emergency team is ready 24/7. Don't ignore the signs.
                            If you experience heavy chest pressure, shortness of breath, or numbness in your arm, call us immediately.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-brand-green text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-green-800 hover:shadow-green-900/50 transition-all duration-300 flex items-center gap-2">
                                <span className="text-2xl">📞</span> Call Ambulance: 108
                            </button>
                            <Link to="/contact" className="bg-transparent border-2 border-gray-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                                Get Directions
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-full blur-2xl opacity-20 animate-ping"></div>
                            <div className="w-48 h-48 bg-gray-800 rounded-full border-4 border-brand-green/30 flex items-center justify-center relative z-10 shadow-2xl">
                                <span className="text-6xl">🚑</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
