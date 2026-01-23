import Header from '../components/Header';
import Footer from '../components/Footer';
import { Pill, Users, Stethoscope, Heart, Shield, Clock, Star, Calendar, Phone, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OncologyPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-sky-50/30 to-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section - Updated with Sky Gradient */}
                <section className="relative bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 py-20">
                    <div className="absolute inset-0 bg-grid-sky-100/20 [mask-image:radial-gradient(white,transparent_70%)]"></div>
                    <div className="container relative mx-auto px-4 lg:px-10">
                        <button 
                            onClick={() => navigate('/departments')} 
                            className="mb-8 px-5 py-3 bg-white border border-sky-100 rounded-xl font-semibold text-sky-700 hover:bg-sky-50 hover:border-sky-200 shadow-sm transition-all duration-300 flex items-center gap-2"
                        >
                            <ChevronRight className="rotate-180" size={18} />
                            Back to Departments
                        </button>
                        
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-100/60 rounded-full border border-sky-200/50">
                                <Heart size={16} className="text-sky-600" />
                                <span className="text-sm font-semibold text-sky-700">Cancer Care Excellence</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-600 bg-clip-text text-transparent">
                                Oncology Department
                            </h1>
                            
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Comprehensive cancer care with cutting-edge technology, personalized treatment plans, 
                                and compassionate support for patients and families.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-sky-600 text-white rounded-xl font-bold text-lg hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                                    <Calendar size={20} />
                                    Book Consultation
                                </button>
                                <button className="px-8 py-4 bg-white border border-sky-200 text-sky-700 rounded-xl font-bold text-lg hover:bg-sky-50 shadow-sm transition-all duration-300 flex items-center gap-3">
                                    <Phone size={20} />
                                    Emergency: 24/7
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white border-y border-sky-100">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "98%", label: "Patient Satisfaction", icon: Star },
                                { value: "24/7", label: "Emergency Care", icon: Clock },
                                { value: "15+", label: "Specialists", icon: Users },
                                { value: "5000+", label: "Patients Treated", icon: Heart }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-b from-white to-sky-50/30 border border-sky-100">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sky-100 to-white rounded-xl mb-4 border border-sky-200/50">
                                        <stat.icon size={24} className="text-sky-600" />
                                    </div>
                                    <div className="text-3xl font-black text-sky-900 mb-2">{stat.value}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About & Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-sky-900 to-sky-700 bg-clip-text text-transparent">
                                    Advanced Cancer Care
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Our Oncology Department combines state-of-the-art technology with 
                                        compassionate care to provide comprehensive cancer treatment. 
                                        We offer a multidisciplinary approach involving surgical, medical, 
                                        and radiation oncology specialists.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        With advanced diagnostic tools including PET-CT, MRI, and genomic 
                                        testing, we develop personalized treatment plans for each patient's 
                                        unique needs.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-b from-white to-sky-50/30 rounded-2xl p-8 shadow-xl border border-sky-100">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-sky-100 to-white rounded-xl border border-sky-200/50">
                                        <Pill size={24} className="text-sky-600" />
                                    </div>
                                    <h3 className="text-2xl font-black text-sky-900">Our Services</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    {[
                                        { name: "Chemotherapy", desc: "Advanced drug therapies" },
                                        { name: "Radiation Therapy", desc: "Precision radiation treatment" },
                                        { name: "Immunotherapy", desc: "Immune system enhancement" },
                                        { name: "Cancer Surgery", desc: "Minimally invasive procedures" },
                                        { name: "Targeted Therapy", desc: "Personalized molecular treatment" },
                                        { name: "Palliative Care", desc: "Comfort and pain management" }
                                    ].map((service, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-white border border-sky-100 hover:border-sky-200 transition-colors">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-lg mt-0.5">
                                                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900">{service.name}</div>
                                                    <div className="text-sm text-gray-600 mt-1">{service.desc}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cancer Types */}
                <section className="py-20 bg-gradient-to-b from-white to-sky-50/20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-100/60 rounded-full border border-sky-200/50">
                                <Shield size={16} className="text-sky-600" />
                                <span className="text-sm font-semibold text-sky-700">Specialized Treatment</span>
                            </div>
                            <h2 className="text-4xl font-black mb-6 text-sky-900">Cancer Types We Treat</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive care for various cancer types with advanced treatment protocols
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Breast Cancer", desc: "Multidisciplinary breast cancer care with reconstruction options", icon: "🫀" },
                                { title: "Lung Cancer", desc: "Advanced diagnostic and treatment for lung malignancies", icon: "🌬️" },
                                { title: "Colorectal Cancer", desc: "Minimally invasive surgical and therapeutic approaches", icon: "⚕️" },
                                { title: "Prostate Cancer", desc: "Precision medicine and robotic surgery", icon: "🎯" },
                                { title: "Leukemia & Lymphoma", desc: "Hematologic malignancy specialist care", icon: "🔬" },
                                { title: "Gynecologic Cancers", desc: "Comprehensive women's cancer care", icon: "🌸" }
                            ].map((service, i) => (
                                <div key={i} className="group bg-white rounded-2xl p-8 border-2 border-sky-100 hover:border-sky-300 hover:shadow-2xl transition-all duration-300">
                                    <div className="text-3xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-black text-sky-900 mb-3 group-hover:text-sky-700 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 mb-6">{service.desc}</p>
                                    <button className="text-sky-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More <ChevronRight size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Specialists */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black mb-6 text-sky-900">Meet Our Oncology Team</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Experienced specialists dedicated to providing exceptional cancer care
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { 
                                    name: "Dr. Arun Verma", 
                                    specialization: "Medical Oncology", 
                                    exp: "18 years",
                                    degree: "MD, DM (Oncology)",
                                    expertise: ["Chemotherapy", "Immunotherapy", "Targeted Therapy"]
                                },
                                { 
                                    name: "Dr. Sneha Gupta", 
                                    specialization: "Radiation Oncology", 
                                    exp: "15 years",
                                    degree: "MD, DNB (Radiation Oncology)",
                                    expertise: ["Radiation Therapy", "Brachytherapy", "Stereotactic Radiosurgery"]
                                },
                                { 
                                    name: "Dr. Rajeev Singh", 
                                    specialization: "Surgical Oncology", 
                                    exp: "17 years",
                                    degree: "MS, MCh (Surgical Oncology)",
                                    expertise: ["Robotic Surgery", "Minimally Invasive Procedures", "Reconstructive Surgery"]
                                }
                            ].map((doc, i) => (
                                <div key={i} className="group bg-gradient-to-b from-white to-sky-50/30 rounded-2xl p-8 border-2 border-sky-100 hover:border-sky-300 shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-white rounded-2xl border-2 border-sky-200 flex items-center justify-center mb-4">
                                            <Users size={32} className="text-sky-600" />
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 mb-2">{doc.name}</h3>
                                        <div className="text-sky-600 font-bold mb-1">{doc.specialization}</div>
                                        <div className="text-gray-600 text-sm mb-4">{doc.degree}</div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-sky-500" />
                                            <span className="text-gray-700 font-medium">Experience: {doc.exp}</span>
                                        </div>
                                        
                                        <div>
                                            <div className="text-sm font-semibold text-gray-600 mb-2">Expertise:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {doc.expertise.map((skill, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-xl font-bold hover:from-sky-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-xl">
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Facilities & Technology */}
                <section className="py-20 bg-gradient-to-b from-sky-50/20 to-white">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black mb-6 text-sky-900">Advanced Facilities</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                State-of-the-art technology for precise diagnosis and treatment
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "PET-CT Scan", desc: "Advanced metabolic imaging" },
                                { title: "Linear Accelerator", desc: "Precision radiation therapy" },
                                { title: "Robotic Surgery", desc: "Minimally invasive procedures" },
                                { title: "Genomic Lab", desc: "Personalized treatment plans" }
                            ].map((facility, i) => (
                                <div key={i} className="bg-white rounded-xl p-8 border-2 border-sky-100 hover:border-sky-300 transition-all">
                                    <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-white rounded-xl border border-sky-200 flex items-center justify-center mb-4">
                                        <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                                            <Stethoscope size={18} className="text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">{facility.title}</h3>
                                    <p className="text-gray-600">{facility.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-50/30">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-sky-600 to-sky-500 rounded-3xl p-12 text-center text-white shadow-2xl">
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                                <Heart size={16} />
                                <span className="text-sm font-semibold">Compassionate Care</span>
                            </div>
                            
                            <h2 className="text-4xl font-black mb-6">Begin Your Healing Journey</h2>
                            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                                Our team is here to support you every step of the way with personalized cancer care
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-white text-sky-700 rounded-xl font-bold text-lg hover:bg-sky-50 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
                                    <Calendar size={20} />
                                    Schedule Consultation
                                </button>
                                <button className="px-10 py-4 bg-transparent border-2 border-white/50 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3">
                                    <Phone size={20} />
                                    Call Now: 1800-XXX-XXX
                                </button>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <div className="flex flex-wrap justify-center gap-6 text-sky-100">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>24/7 Emergency Services</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>Same Day Appointments</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield size={16} />
                                        <span>Insurance Accepted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}