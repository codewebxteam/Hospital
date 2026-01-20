import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const topProcedures = [
    {
        title: "Understanding HIPEC Surgery",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
        category: "Oncology"
    },
    {
        title: "Self-Breast Examination For Better Breast Health",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
        category: "Women's Health",
        overlay: "Take a Moment for Yourself – Early Detection Begins with You"
    },
    {
        title: "Radiation Therapy For Breast Cancer",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=400&q=80",
        category: "Oncology",
        overlay: "Fighting Breast Cancer with the Power of Precision"
    },
    {
        title: "CAR-T Cell Therapy",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80",
        category: "Immunotherapy"
    }
];

const allProcedures = [
    { title: "Health Checkup Packages", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80", category: "Preventive Care" },
    { title: "Cardiac Bypass Surgery", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=400&q=80", category: "Cardiology" },
    { title: "Blood Donation & Transfusion", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=400&q=80", category: "Blood Bank" },
    { title: "Robotic Surgery", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&q=80", category: "Advanced Procedures" },
    { title: "Liver Transplant", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&q=80", category: "Transplant" },
    { title: "Knee Replacement", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80", category: "Orthopaedics" },
    { title: "IVF Treatment", image: "https://images.unsplash.com/photo-1584515931304-6e07e0ff9e8a?auto=format&fit=crop&w=400&q=80", category: "Fertility" },
    { title: "Laparoscopic Surgery", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=400&q=80", category: "Minimal Invasive" }
];

export default function MedicalProceduresPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-white py-16 border-b border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Medical Procedures at Vartika Aarna</h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            Explore our comprehensive range of advanced medical procedures and treatments.
                        </p>
                    </div>
                </section>

                {/* Search Bar */}
                <section className="container mx-auto px-4 lg:px-10 py-12">
                    <div className="relative max-w-3xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search Medical Procedure"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border-2 border-gray-100 rounded-xl px-6 py-4 text-lg font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 shadow-lg transition-all"
                        />
                        <Search size={24} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </section>

                {/* Top Procedures */}
                <section className="container mx-auto px-4 lg:px-10 pb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Top Procedures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topProcedures.map((proc, idx) => (
                            <Link to="/contact" key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={proc.image} alt={proc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    {proc.overlay && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/90 to-transparent flex items-end p-4">
                                            <p className="text-white font-bold text-sm">{proc.overlay}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-black text-[#E67E61] uppercase tracking-widest mb-2">{proc.category}</p>
                                    <h3 className="text-lg font-black text-gray-900 group-hover:text-green-700 transition-colors">{proc.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* All Procedures */}
                <section className="container mx-auto px-4 lg:px-10 pb-24">
                    <h2 className="text-3xl font-black text-gray-900 mb-8">All Procedures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allProcedures.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map((proc, idx) => (
                            <Link to="/contact" key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                                <div className="relative h-40 overflow-hidden">
                                    <img src={proc.image} alt={proc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">{proc.category}</p>
                                    <h3 className="text-base font-black text-gray-900 group-hover:text-green-700 transition-colors">{proc.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
