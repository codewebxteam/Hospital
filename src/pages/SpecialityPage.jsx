import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Heart, Brain, Bone, Activity, Stethoscope, Microscope, Zap, ShieldCheck } from 'lucide-react';

const specialities = [
    {
        title: "Cardiac Sciences",
        description: "World-class heart care with advanced diagnostics and surgical excellence.",
        icon: <Heart size={40} className="text-red-500" />,
        highlight: true,
        details: ["Advanced Angioplasty", "Bypass Surgery (CABG)", "Heart Valve Replacement", "Heart Failure Management", "Pediatric Cardiac Surgery"]
    },
    {
        title: "Oncology",
        description: "Comprehensive cancer treatment with a focus on precision and patient care.",
        icon: <Zap size={40} className="text-orange-500" />,
        details: ["Immunotherapy", "Medical Oncology", "Surgical Oncology", "Radiation Therapy"]
    },
    {
        title: "Neurology",
        description: "Expert care for complex brain and nervous system disorders.",
        icon: <Brain size={40} className="text-blue-500" />,
        details: ["Stroke Management", "Epilepsy Treatment", "Neurosurgery", "Parkinson's Care"]
    },
    {
        title: "Orthopaedics",
        description: "Specialized treatment for bone, joint, and musculoskeletal conditions.",
        icon: <Bone size={40} className="text-amber-600" />,
        details: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care"]
    },
    {
        title: "Gastroenterology",
        description: "Advanced diagnostics and treatment for digestive health.",
        icon: <Activity size={40} className="text-emerald-500" />,
        details: ["Liver Transplant", "Endoscopy", "Colonoscopy", "Bariatric Surgery"]
    },
    {
        title: "Critical Care",
        description: "24/7 intensive monitoring and life-support for critical patients.",
        icon: <ShieldCheck size={40} className="text-red-600" />,
        details: ["NICU/ICU", "Ventilator Support", "Emergency Triage"]
    }
];

export default function SpecialityPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-[#FAF3F0] py-24 border-b border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10 flex flex-col items-center text-center">
                        <span className="text-[#E67E61] font-black uppercase tracking-widest text-xs mb-4">Centers of Excellence</span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Medical Specialities</h1>
                        <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
                            Combining clinical expertise with advanced technology to provide world-class healthcare across dozens of specialties.
                        </p>
                    </div>
                </section>

                {/* Prioritized Cardiac Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="bg-red-50 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border border-red-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-5 transform scale-150 rotate-12 -mr-20">
                                <Heart size={400} />
                            </div>

                            <div className="lg:w-1/2 relative z-10">
                                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                                    <Stethoscope size={14} /> Priority Care
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Cardiac Sciences</h2>
                                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
                                    Our Heart Specialists are world-renowned for their expertise in complex cardiac procedures. From neonatal heart surgery to advanced adult transplants, we lead the way in life-saving heart care.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                    {specialities[0].details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-700 font-bold">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                                <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 shadow-xl shadow-red-900/20 transition-all">
                                    Find a Heart Specialist
                                </button>
                            </div>

                            <div className="lg:w-1/2 relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                                    alt="Heart Surgery"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Specialties Grid */}
                <section className="py-24 bg-[#F8F9FA]">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-16 px-4">Our Departments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {specialities.slice(1).map((item, index) => (
                                <div key={index} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="mb-8 transform group-hover:scale-110 transition-transform inline-block p-4 bg-gray-50 rounded-2xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed mb-8">{item.description}</p>
                                    <div className="space-y-3 mb-10">
                                        {item.details.slice(0, 3).map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 font-bold">
                                                <Microscope size={14} className="text-blue-500" /> {detail}
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Enquire Specialty <span>→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
