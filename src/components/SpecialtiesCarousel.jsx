import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Bone, Brain, Ribbon, Bean, Stethoscope, Activity, Hospital } from 'lucide-react';

const specialties = [
    { name: "Cardiac Sciences", icon: <Heart size={32} className="text-red-500" /> },
    { name: "Orthopaedics", icon: <Bone size={32} className="text-amber-600" /> },
    { name: "Neuro Sciences", icon: <Brain size={32} className="text-blue-500" /> },
    { name: "Oncology", icon: <Ribbon size={32} className="text-pink-500" /> },
    { name: "Renal Sciences", icon: <Bean size={32} className="text-purple-500" /> },
    { name: "Gastroenterology", icon: <Stethoscope size={32} className="text-emerald-500" /> },
    { name: "Liver Transplant", icon: <Activity size={32} className="text-teal-500" /> },
    { name: "Critical Care", icon: <Hospital size={32} className="text-blue-600" /> }
];

export default function SpecialtiesCarousel() {
    return (
        <section className="py-16 bg-[#F0F7FA] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
                    <div className="max-w-lg">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Centre of Excellence</h2>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            Explore our world-class medical departments dedicated to providing specialized care and innovative treatments.
                        </p>
                    </div>
                    <Link to="/specialities" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                        View All Specialties <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Cards Grid - 4x2 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {specialties.map((spec, idx) => (
                        <Link
                            key={idx}
                            to="/specialities"
                            className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                                {spec.icon}
                            </span>
                            <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {spec.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
