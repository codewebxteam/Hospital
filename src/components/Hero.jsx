import { Search, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden py-20 md:py-0">
            {/* Background Image with Soft Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
                    alt="Hospital Hero"
                    className="w-full h-full object-cover"
                />
                {/* Softer, more calming gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 via-teal-800/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-10 relative z-10">
                <div className="max-w-2xl animate-gentle-fade">
                    {/* Badge - Softer pulse animation */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-soft-breathing">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        24/7 Emergency Services Available
                    </div>

                    {/* Heading - Softer text colors */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
                        Healthcare for Good<br />
                        <span className="text-emerald-300/90">Today. Tomorrow. Always.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-white/75 font-medium leading-relaxed mb-10 max-w-lg">
                        World-class medical care with compassion. Trusted by millions across India for life-saving treatments.
                    </p>

                    {/* CTA Buttons - Softer styling, smoother transitions */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <Link
                            to="/book-appointment/1"
                            className="btn-cta-coral flex items-center gap-2 text-sm uppercase tracking-wide"
                        >
                            Book Appointment <ChevronRight size={16} />
                        </Link>
                        <Link
                            to="/doctors"
                            className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wide border border-white/20 transition-all duration-350 hover:bg-white/15 hover:border-white/30 soft-hover flex items-center gap-2"
                        >
                            <Play size={14} className="fill-current" /> Find a Doctor
                        </Link>
                    </div>

                    {/* Search Bar - Softer focus states */}
                    <div className="max-w-xl">
                        <div className="bg-white rounded-xl shadow-soft-xl flex items-center p-1.5 border border-transparent hover:border-teal-200/50 focus-within:border-teal-400 transition-all duration-350">
                            <input
                                type="text"
                                placeholder="Search Doctors, Specialities, Hospitals..."
                                className="flex-1 px-4 py-3 text-gray-700 bg-transparent focus:outline-none text-sm font-medium placeholder:text-gray-400"
                            />
                            <button className="btn-healthcare-primary px-5 py-3 rounded-lg flex items-center gap-2 text-sm">
                                <Search size={16} /> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements - Softer, more subtle */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
                <div className="absolute bottom-16 right-16 w-64 h-64 bg-emerald-400/8 rounded-full blur-3xl animate-soft-breathing"></div>
                <div className="absolute top-24 right-32 w-32 h-32 bg-amber-400/8 rounded-full blur-2xl animate-soft-breathing" style={{ animationDelay: '1s' }}></div>
            </div>
        </section>
    );
}
