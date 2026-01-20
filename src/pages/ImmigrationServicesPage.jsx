import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Search, MapPin, Phone, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const hospitals = [
    {
        name: "Vartika Aarna Hospital, Gurgaon",
        location: "Sector 44, Gurgaon, Haryana",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=400&q=80",
        phone: "+91-124 492 1021"
    },
    {
        name: "Vartika Aarna Hospital, Delhi",
        location: "Vasant Kunj, New Delhi",
        image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&w=400&q=80",
        phone: "+91-11 4277 6222"
    },
    {
        name: "Vartika Aarna Hospital, Mumbai",
        location: "Mulund West, Mumbai",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80",
        phone: "+91-22 6799 4444"
    },
    {
        name: "Vartika Aarna Hospital, Bangalore",
        location: "Bannerghatta Road, Bangalore",
        image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=400&q=80",
        phone: "+91-80 6621 4444"
    }
];

const services = [
    { icon: "🛂", title: "Visa Assistance", desc: "Complete support for medical visa applications and extensions." },
    { icon: "✈️", title: "Travel Coordination", desc: "Airport pickups, accommodation, and local travel arrangements." },
    { icon: "🌐", title: "Language Support", desc: "Interpreters available in multiple languages for seamless communication." },
    { icon: "📋", title: "Medical Documentation", desc: "Assistance with medical reports, prescriptions, and insurance claims." }
];

export default function ImmigrationServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[400px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1600&q=80"
                            alt="Immigration Services Hero"
                            className="w-full h-full object-cover brightness-[0.5]"
                        />
                    </div>
                    <div className="container mx-auto px-4 lg:px-10 relative z-10">
                        <div className="max-w-2xl">
                            <div className="inline-block bg-green-700 text-white px-6 py-3 rounded-sm mb-6">
                                <h1 className="text-3xl md:text-4xl font-black">Immigration Services at Vartika Aarna</h1>
                            </div>
                            <p className="text-xl text-white/90 font-medium leading-relaxed">
                                Comprehensive support for international patients seeking world-class healthcare in India.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="container mx-auto px-4 lg:px-10 py-20">
                    <h2 className="text-3xl font-black text-gray-900 mb-12">Our Services for International Patients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((svc, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="text-4xl mb-6">{svc.icon}</div>
                                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{svc.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Find the Hospital */}
                <section className="bg-white py-20 border-t border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-8">Find the Hospital</h2>
                        <div className="relative max-w-md mb-12">
                            <input
                                type="text"
                                placeholder="Search Hospital"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border-2 border-gray-100 rounded-lg px-5 py-3 text-base font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all"
                            />
                            <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {hospitals.filter(h => h.name.toLowerCase().includes(searchQuery.toLowerCase())).map((hosp, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                    <div className="h-48 overflow-hidden">
                                        <img src={hosp.image} alt={hosp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{hosp.name}</h3>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                            <MapPin size={14} /> {hosp.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                                            <Phone size={14} /> {hosp.phone}
                                        </div>
                                        <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[#E67E61] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                                            Contact Hospital <ArrowRight size={14} />
                                        </Link>
                                    </div>
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
