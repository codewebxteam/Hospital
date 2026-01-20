import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#E67E61] via-orange-500 to-[#E67E61] overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Text Content */}
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                            Need Medical Assistance?
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl">
                            Our dedicated team is available 24/7 to help you with appointments, emergencies, and medical queries.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4">
                        <Link
                            to="/book-appointment/1"
                            className="bg-white text-[#E67E61] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Book Appointment <ArrowRight size={18} />
                        </Link>
                        <a
                            href="tel:9205010100"
                            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/30 border border-white/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Phone size={18} /> Call: 9205 010 100
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
