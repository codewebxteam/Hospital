import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FileText, 
  Home, 
  Stethoscope, 
  CreditCard, 
  Heart, 
  Car, 
  MessageSquare, 
  Clock, 
  Globe, 
  Users, 
  Shield, 
  Phone, 
  Mail, 
  Calendar,
  ChevronRight,
  CheckCircle2,
  Plane,
  Building,
  HelpCircle
} from 'lucide-react';

const resources = [
    {
        title: "Medical Visa Assistance",
        description: "Comprehensive guidance for obtaining medical visas with fast-track processing and embassy coordination.",
        icon: FileText,
        color: "from-blue-500 to-cyan-500",
        features: ["Fast-track processing", "Documentation support", "Embassy coordination"]
    },
    {
        title: "Accommodation & Stay",
        description: "Premium accommodation options near hospitals with family-friendly amenities and transportation.",
        icon: Home,
        color: "from-emerald-500 to-teal-500",
        features: ["Hospital proximity", "Family suites", "Medical facilities"]
    },
    {
        title: "Free Second Opinion",
        description: "Expert medical opinions from top specialists to validate diagnosis and treatment plans.",
        icon: Stethoscope,
        color: "from-violet-500 to-purple-500",
        features: ["24-48 hour response", "Multiple specialists", "Digital reports"]
    },
    {
        title: "Insurance & Billing",
        description: "Seamless insurance processing and transparent billing with multi-currency support.",
        icon: CreditCard,
        color: "from-amber-500 to-orange-500",
        features: ["Cashless facilities", "Multi-currency", "No hidden costs"]
    },
    {
        title: "Post-Treatment Care",
        description: "Comprehensive recovery plans with remote monitoring and rehabilitation guidance.",
        icon: Heart,
        color: "from-rose-500 to-pink-500",
        features: ["Telemedicine follow-up", "Recovery planning", "Nutrition guidance"]
    },
    {
        title: "Travel Coordination",
        description: "End-to-end travel arrangements including flights, local transport, and medical escorts.",
        icon: Car,
        color: "from-sky-500 to-blue-500",
        features: ["Airport transfers", "Medical escorts", "Local mobility"]
    }
];

const supportServices = [
    {
        title: "24/7 Multilingual Support",
        description: "Round-the-clock assistance in 12+ languages",
        icon: Globe,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Personal Care Coordinator",
        description: "Dedicated coordinator for each patient",
        icon: Users,
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        title: "Treatment Cost Estimate",
        description: "Detailed breakdown of treatment costs",
        icon: CreditCard,
        color: "bg-amber-100 text-amber-600"
    },
    {
        title: "Medical Records Transfer",
        description: "Secure digital transfer of medical files",
        icon: Shield,
        color: "bg-violet-100 text-violet-600"
    }
];

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-sky-50/20 to-white">
            <Header />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30"></div>
                    <div className="absolute inset-0 bg-grid-sky-100/20 [mask-image:radient-gradient(white,transparent_70%)]"></div>
                    
                    <div className="container relative mx-auto px-4 lg:px-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-sky-100/60 rounded-full border border-sky-200/50">
                                <Shield size={16} className="text-sky-600" />
                                <span className="text-sm font-semibold text-sky-700">Comprehensive Support</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-600 bg-clip-text text-transparent">
                                Patient Resources
                            </h1>
                            
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Everything you need for a seamless medical journey - from visa assistance to 
                                post-treatment care, all under one roof.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="px-8 py-4 bg-sky-600 text-white rounded-xl font-bold text-lg hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                                    <MessageSquare size={20} />
                                    Live Chat Support
                                </button>
                                <button className="px-8 py-4 bg-white border border-sky-200 text-sky-700 rounded-xl font-bold text-lg hover:bg-sky-50 shadow-sm transition-all duration-300 flex items-center gap-3">
                                    <Phone size={20} />
                                    Call: 1800-HEALTH
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-8 bg-white border-y border-sky-100">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "5000+", label: "Patients Assisted", icon: Users },
                                { value: "24/7", label: "Support Available", icon: Clock },
                                { value: "50+", label: "Countries Served", icon: Globe },
                                { value: "98%", label: "Satisfaction Rate", icon: Heart }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4">
                                    <div className="text-2xl font-black text-sky-900 mb-1">{stat.value}</div>
                                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Resources Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black mb-6 text-sky-900">Comprehensive Support Services</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We handle every detail so you can focus on what matters most - your health and recovery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.map((resource, index) => {
                                const IconComponent = resource.icon;
                                return (
                                    <div key={index} className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white to-sky-50/30 rounded-3xl border-2 border-sky-100 group-hover:border-sky-300 shadow-lg group-hover:shadow-2xl transition-all duration-300 translate-y-0 group-hover:-translate-y-1"></div>
                                        
                                        <div className="relative p-8 h-full flex flex-col">
                                            <div className="mb-6">
                                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${resource.color} mb-6`}>
                                                    <IconComponent size={32} className="text-white" />
                                                </div>
                                                
                                                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-sky-700 transition-colors">
                                                    {resource.title}
                                                </h3>
                                                
                                                <p className="text-gray-700 mb-6 leading-relaxed">
                                                    {resource.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto space-y-3">
                                                <div className="text-sm font-semibold text-gray-600">Includes:</div>
                                                {resource.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="mt-8 text-sky-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Learn More <ChevronRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Additional Support Services */}
                <section className="py-16 bg-gradient-to-b from-white to-sky-50/20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-black mb-6 text-sky-900">Additional Assistance</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Extra services to make your medical journey comfortable and stress-free
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {supportServices.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={index} className="bg-white rounded-2xl p-8 border-2 border-sky-100 hover:border-sky-300 transition-all duration-300">
                                        <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4`}>
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Travel & Logistics Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sky-100/60 rounded-full border border-sky-200/50">
                                    <Plane size={16} className="text-sky-600" />
                                    <span className="text-sm font-semibold text-sky-700">Travel Logistics</span>
                                </div>
                                
                                <h2 className="text-4xl font-black mb-6 text-sky-900">
                                    Seamless Travel Arrangements
                                </h2>
                                
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    We manage all travel logistics so you can focus on treatment. From flight bookings 
                                    to hospital transfers, we ensure a comfortable journey.
                                </p>
                                
                                <div className="space-y-4">
                                    {[
                                        "Medical visa invitation letters",
                                        "Airport pick-up & drop-off",
                                        "Accommodation near hospital",
                                        "Local transportation",
                                        "Medical escort services",
                                        "Flight bookings assistance"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-lg">
                                                <CheckCircle2 size={16} className="text-sky-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 border-2 border-sky-100">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-sky-100">
                                        <Building size={24} className="text-sky-600 mt-1" />
                                        <div>
                                            <h4 className="font-black text-gray-900 mb-2">Hospital Selection</h4>
                                            <p className="text-gray-600">We help you choose the best hospital based on medical needs, budget, and location preferences.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-sky-100">
                                        <HelpCircle size={24} className="text-sky-600 mt-1" />
                                        <div>
                                            <h4 className="font-black text-gray-900 mb-2">Cultural & Language Support</h4>
                                            <p className="text-gray-600">Multilingual coordinators and cultural guides to help you navigate local customs and language barriers.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-sky-100">
                                        <Heart size={24} className="text-sky-600 mt-1" />
                                        <div>
                                            <h4 className="font-black text-gray-900 mb-2">Emotional Support</h4>
                                            <p className="text-gray-600">Counseling services and support groups for patients and families during the treatment journey.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-50/30">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-sky-600 to-sky-500 rounded-3xl p-12 text-center text-white shadow-2xl">
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                                <Users size={16} />
                                <span className="text-sm font-semibold">Personal Assistance</span>
                            </div>
                            
                            <h2 className="text-4xl font-black mb-6">Need Personalized Assistance?</h2>
                            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                                Our dedicated patient coordinators are available 24/7 to guide you through every step of your medical journey.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-white text-sky-700 rounded-xl font-bold text-lg hover:bg-sky-50 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
                                    <MessageSquare size={20} />
                                    Start Live Chat
                                </button>
                                <button className="px-10 py-4 bg-transparent border-2 border-white/50 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3">
                                    <Calendar size={20} />
                                    Schedule Call
                                </button>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <div className="flex flex-wrap justify-center gap-8 text-sky-100">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>24/7 Availability</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Globe size={16} />
                                        <span>12+ Languages</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail size={20} />
                                        <span>support@medicaltourism.com</span>
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