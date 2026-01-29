import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Award, Zap, Heart, ChevronRight, Star, Users, Clock, CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CentreOfExcellencePage() {
    const [activeTab, setActiveTab] = useState('all');
    const [isScrolled, setIsScrolled] = useState(false);

    const centres = [
        {
            id: 1,
            title: "Cardiac Sciences",
            desc: "World-class cardiology and cardiac surgery services with high success rates in complex procedures.",
            icon: <Heart className="w-8 h-8" />,
            color: "bg-red-50 text-red-600",
            category: "surgical",
            stats: { successRate: "98%", patients: "5000+", specialists: "15+" },
            features: ["24/7 Cath Lab", "Heart Transplant", "Robotic Surgery", "Cardiac ICU"]
        },
        {
            id: 2,
            title: "Oncology Institute",
            desc: "Comprehensive cancer care using the latest radiation technology and immunotherapy.",
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "bg-purple-50 text-purple-600",
            category: "medical",
            stats: { successRate: "92%", patients: "3000+", specialists: "20+" },
            features: ["CyberKnife", "Immunotherapy", "Palliative Care", "Clinical Trials"]
        },
        {
            id: 3,
            title: "Neurology & Neurosurgery",
            desc: "Advanced treatment for stroke, epilepsy, and complex brain and spine disorders.",
            icon: <Zap className="w-8 h-8" />,
            color: "bg-blue-50 text-blue-600",
            category: "surgical",
            stats: { successRate: "96%", patients: "2500+", specialists: "12+" },
            features: ["Neuro Navigation", "Epilepsy Monitoring", "Stroke Unit", "Rehabilitation"]
        },
        {
            id: 4,
            title: "Orthopaedics & Joint Replacement",
            desc: "Specialized in robotic-assisted joint replacements and sports medicine.",
            icon: <Award className="w-8 h-8" />,
            color: "bg-green-50 text-green-600",
            category: "surgical",
            stats: { successRate: "99%", patients: "4000+", specialists: "18+" },
            features: ["Robotic Surgery", "Sports Injury", "Spine Surgery", "Physiotherapy"]
        },
        {
            id: 5,
            title: "Gastroenterology & Hepatology",
            desc: "Advanced endoscopic procedures and liver disease management with transplant facilities.",
            icon: <CheckCircle className="w-8 h-8" />,
            color: "bg-amber-50 text-amber-600",
            category: "medical",
            stats: { successRate: "95%", patients: "3500+", specialists: "14+" },
            features: ["Endoscopic Ultrasound", "Liver Transplant", "ERCP", "IBD Clinic"]
        },
        {
            id: 6,
            title: "Pediatrics & Neonatology",
            desc: "Comprehensive child care with Level III NICU and pediatric intensive care.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-pink-50 text-pink-600",
            category: "medical",
            stats: { successRate: "97%", patients: "2000+", specialists: "16+" },
            features: ["Level III NICU", "Vaccination", "Growth Clinic", "Emergency Care"]
        }
    ];

    const categories = [
        { id: 'all', label: 'All Centres' },
        { id: 'surgical', label: 'Surgical Specialties' },
        { id: 'medical', label: 'Medical Specialties' }
    ];

    const filteredCentres = activeTab === 'all'
        ? centres
        : centres.filter(centre => centre.category === activeTab);

    // Add scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Header />

            {/* Sticky CTA Banner */}
            <div className={`fixed top-0 left-0 right-0 bg-[#008C44] text-white py-3 px-4 z-40 transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="font-semibold">Emergency: 24/7 Helpline</span>
                        <a href="tel:+911234567890" className="font-bold hover:underline">+91 1234 567 890</a>
                    </div>
                    <button className="bg-white text-[#008C44] px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                    </button>
                </div>
            </div>

            <main className="flex-grow pt-16">
                {/* Hero Section with Gradient */}
                <div className="relative bg-gradient-to-r from-[#008C44] to-[#00A859] text-white py-16 md:py-24 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 mb-6 text-sm md:text-base">
                            <a href="/" className="hover:underline opacity-80">Home</a>
                            <ChevronRight className="w-4 h-4" />
                            <span className="font-semibold">Centres of Excellence</span>
                        </nav>

                        <div className="max-w-4xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                                Centres of <span className="text-yellow-300">Excellence</span>
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-12 leading-relaxed max-w-3xl">
                                Setting global benchmarks in clinical excellence and patient care through specialized medical institutes with cutting-edge technology.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-4 md:gap-8 mb-8">
                                {[
                                    { label: "Success Rate", value: "98%" },
                                    { label: "Specialists", value: "100+" },
                                    { label: "Patients Treated", value: "50,000+" },
                                    { label: "Advanced Procedures", value: "200+" }
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                                        <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                                        <div className="text-sm opacity-90">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-[#008C44] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                    Book Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                                    View All Doctors
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="sticky top-16 md:top-20 bg-white/95 backdrop-blur-sm z-30 border-b">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-2 py-4">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === category.id
                                            ? 'bg-[#008C44] text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Centres Grid */}
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredCentres.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Card Header with Icon */}
                                <div className="p-6 md:p-8 pb-0">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`${item.color} p-4 rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                            {item.category === 'surgical' ? 'Surgical' : 'Medical'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="px-6 md:px-8 mb-6">
                                    <div className="grid grid-cols-3 gap-2 text-center border-t border-b border-gray-100 py-4">
                                        <div>
                                            <div className="text-lg md:text-xl font-bold text-[#008C44]">{item.stats.successRate}</div>
                                            <div className="text-xs text-gray-500">Success Rate</div>
                                        </div>
                                        <div>
                                            <div className="text-lg md:text-xl font-bold text-[#008C44]">{item.stats.patients}</div>
                                            <div className="text-xs text-gray-500">Patients</div>
                                        </div>
                                        <div>
                                            <div className="text-lg md:text-xl font-bold text-[#008C44]">{item.stats.specialists}</div>
                                            <div className="text-xs text-gray-500">Specialists</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="px-6 md:px-8 mb-8">
                                    <h4 className="text-sm font-bold text-gray-700 mb-3">KEY FEATURES</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="px-6 md:px-8 pb-6 md:pb-8">
                                    <button className="w-full bg-[#008C44] text-white py-3 rounded-xl font-bold hover:bg-[#007A3B] transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                                        Explore Centre
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="bg-gray-50 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                Patient <span className="text-[#008C44]">Success Stories</span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Hear from our patients who experienced world-class care and treatment
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Rajesh Kumar",
                                    treatment: "Heart Bypass Surgery",
                                    quote: "The care I received was exceptional. From diagnosis to recovery, every step was handled with expertise and compassion.",
                                    rating: 5
                                },
                                {
                                    name: "Priya Sharma",
                                    treatment: "Cancer Treatment",
                                    quote: "The oncology team supported me through my entire journey. Their advanced treatment gave me hope and a new life.",
                                    rating: 5
                                },
                                {
                                    name: "Amit Patel",
                                    treatment: "Knee Replacement",
                                    quote: "Robotic surgery made my recovery so much faster. I was walking within hours after surgery!",
                                    rating: 5
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                                    <div className="border-t pt-4">
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-[#008C44]">{testimonial.treatment}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#008C44] to-[#00A859] text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">
                            Ready to Experience World-Class Healthcare?
                        </h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                            Book your consultation with our expert specialists today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#008C44] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Call Now: +91 1234 567 890
                            </button>
                            <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                                Book Online Appointment
                            </button>
                        </div>
                        <p className="mt-6 opacity-80">
                            <Clock className="inline w-4 h-4 mr-2" />
                            24/7 Emergency Services Available
                        </p>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                </svg>
            </a>
        </div>
    );
}