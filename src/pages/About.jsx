
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Heart, ShieldCheck, Users, Clock, MapPin, Phone, Star } from 'lucide-react';
import drDesk from '../assets/dr-image.avif'; 
import drPortrait from '../assets/drPortrait.png';
import drSitting from '../assets/drSitting.png';
import hospitalSetting from '../assets/hospitalSetting.png';

const medicalGreen = "#008542";

function StatCard({ icon, title, label }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 transform group-hover:scale-110 transition-transform" style={{ color: medicalGreen }}>
                {icon}
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-1">{title}</h4>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</p>
        </div>
    );
}

function TreatmentCard({ title }) {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform" style={{ backgroundColor: medicalGreen }}></div>
            <p className="text-sm font-bold text-gray-700">{title}</p>
        </div>
    );
}

export default function About() {
    const treatments = [
        "Myocardial Infarction (Heart Attack)", "Neurological Dysfunction", 
        "Severe Back Pain", "Lower Back Pain (Lumbago)", 
        "Head and Neck Pain", "Shoulder Pain", "Foot Pain", 
        "Eye Pain", "Ear Pain", "Ulcer", "Type 1 (Juvenile) Diabetes"
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="grow">
                {/* --- Hero Section --- */}
                <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-slate-50">
                    <div className="container mx-auto px-4 lg:px-10 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <span style={{ color: medicalGreen }} className="text-sm font-black uppercase tracking-[0.3em] mb-4 block">
                                    Established 2018
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                                    Vartika Aarna <br/> 
                                    <span style={{ color: medicalGreen }}>Heart Care</span>
                                </h1>
                                <p className="text-gray-600 leading-relaxed font-medium text-lg max-w-xl mb-8">
                                    A dedicated multispeciality hospital in Taramandal, Gorakhpur, offering high-quality healthcare services for patients of all ages. We prioritize patient comfort in a relaxing and welcoming environment.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                                        <Star size={18} fill="#EAB308" className="text-yellow-500" />
                                        <span className="font-bold text-gray-800">4.8 Rating</span>
                                        <span className="text-gray-400 text-sm">(48 Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                                        <Clock size={18} style={{ color: medicalGreen }} />
                                        <span className="font-bold text-gray-800">Open 24 Hours</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Circular Image with Hover Effect */}
                            <div className="flex justify-center relative">
                                <div className="relative group">
                                    <div className="absolute -inset-4 rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" style={{ backgroundColor: medicalGreen }}></div>
                                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src={drPortrait} 
                                            alt="Dr. Portrait" 
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div style={{ backgroundColor: medicalGreen }} className="absolute bottom-4 right-4 z-20 p-4 rounded-full text-white shadow-lg transform group-hover:rotate-12 transition-transform">
                                        <Heart size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Stats Section --- */}
                <section className="container mx-auto px-4 lg:px-10 -mt-12 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <StatCard icon={<ShieldCheck size={32} />} title="8 Years" label="In Healthcare" />
                        <StatCard icon={<Users size={32} />} title="48+" label="Positive Ratings" />
                        <StatCard icon={<Target size={32} />} title="24/7" label="Emergency Support" />
                        <StatCard icon={<Heart size={32} />} title="Excellent" label="Treatment" />
                    </div>
                </section>

                {/* --- Specialized Treatments Section --- */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Specialized Treatments</h2>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Comprehensive Medical Excellence</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {treatments.map((t, i) => <TreatmentCard key={i} title={t} />)}
                        </div>
                    </div>
                </section>

                {/* --- Commitment & History --- */}
                <section className="py-24 bg-slate-50 border-y border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                                <img src={hospitalSetting} alt="Hospital" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                                <img src={drSitting} alt="Consultation" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">History & Commitment</h2>
                                <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                                    <p>
                                        Vartika Aarna Heart Care and Multispeciality Hospital has been a pillar in the healthcare sector for many years. Established in 2018, the hospital caters to a wide range of medical needs.
                                    </p>
                                    <p>
                                        Located conveniently in Taramandal, Gorakhpur, we ensure easy access for patients from neighboring cities and towns, saving them valuable time and effort.
                                    </p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: medicalGreen }}>
                                            <ShieldCheck />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900">Highly Skilled Team</h4>
                                            <p className="text-sm">Professionals well-versed in their respective domains.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Circular Leadership Section --- */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-16">Our Leadership</h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            <div className="group">
                                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-8 border-gray-50 group-hover:border-green-100 transition-all duration-500 shadow-xl relative">
                                    <img src={drDesk} alt="Lead Doctor" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="font-black text-xl text-gray-900">Senior Medical Specialist</h3>
                                <p className="text-sm font-bold uppercase tracking-widest mt-1" style={{ color: medicalGreen }}>Cardiac & Multispeciality Expert</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
