import { ChevronRight, Heart, Bone, Brain, Ribbon, Bean, Stethoscope, Activity, Hospital } from 'lucide-react';

const specialties = [
    { title: "Cardiac Sciences", icon: <Heart size={36} className="text-red-500" /> },
    { title: "Orthopaedics", icon: <Bone size={36} className="text-amber-600" /> },
    { title: "Neuro Sciences", icon: <Brain size={36} className="text-blue-500" /> },
    { title: "Oncology", icon: <Ribbon size={36} className="text-pink-500" /> },
    { title: "Renal Sciences", icon: <Bean size={36} className="text-purple-500" /> },
    { title: "Gastroenterology", icon: <Stethoscope size={36} className="text-emerald-500" /> },
    { title: "Liver Transplant", icon: <Activity size={36} className="text-teal-500" /> },
    { title: "Critical Care", icon: <Hospital size={36} className="text-blue-600" /> },
];

export default function Services() {
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50/30 to-white">
            <div className="container mx-auto px-4 lg:px-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Centre of Excellence</h2>
                        <p className="text-gray-500 max-w-2xl text-sm md:text-base font-medium">
                            Explore our world-class medical departments dedicated to providing specialized care and innovative treatments.
                        </p>
                    </div>
                    <button className="text-teal-600 font-semibold flex items-center gap-1 soft-hover text-sm">
                        View All Specialties <ChevronRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className="healthcare-card p-6 lg:p-8 flex flex-col items-center text-center group cursor-pointer stagger-item animate-gentle-fade"
                            style={{ animationDelay: `${index * 0.06}s` }}
                        >
                            <div className="text-4xl lg:text-5xl mb-4 icon-gentle-scale">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-sm lg:text-base text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
