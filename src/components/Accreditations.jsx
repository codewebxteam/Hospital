import { Award, Shield, Star, CheckCircle } from 'lucide-react';

const accreditations = [
    { name: "NABH Accredited", icon: <Shield size={40} />, color: "text-blue-600" },
    { name: "JCI Certified", icon: <Award size={40} />, color: "text-amber-500" },
    { name: "ISO 9001:2015", icon: <CheckCircle size={40} />, color: "text-green-600" },
    { name: "NABL Approved", icon: <Star size={40} />, color: "text-purple-600" }
];

export default function Accreditations() {
    return (
        <section className="py-16 bg-gradient-to-r from-green-700 via-green-800 to-green-900 overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text */}
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <span className="text-green-300 font-black uppercase tracking-widest text-xs mb-2 block">Quality Assurance</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Accreditations & Awards</h2>
                        <p className="text-green-100 font-medium leading-relaxed">
                            Recognized globally for excellence in patient care, safety standards, and medical innovation.
                        </p>
                    </div>

                    {/* Accreditation Badges */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {accreditations.map((acc, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                            >
                                <div className={`${acc.color} bg-white rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {acc.icon}
                                </div>
                                <span className="text-white font-black text-sm leading-tight">
                                    {acc.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
