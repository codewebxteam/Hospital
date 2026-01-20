import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Calendar, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const hospitalData = {
    "North India": [
        { name: "Fortis Memorial Research Institute", city: "Gurgaon", state: "Haryana", desc: "A quaternary care hospital with international faculty and state-of-the-art technology.", image: "https://images.unsplash.com/photo-1587350859728-4b760eeae14a?auto=format&fit=crop&w=800&q=80" },
        { name: "Fortis Escorts Heart Institute", city: "Okhla", state: "Delhi", desc: "A pioneer in cardiac care, known for clinical excellence and innovative treatments.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
        { name: "Fortis Hospital, Shalimar Bagh", city: "Shalimar Bagh", state: "Delhi", desc: "Providing comprehensive medical services with a focus on patient safety and comfort.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
        { name: "Fortis Hospital, Mohali", city: "Mohali", state: "Punjab", desc: "A leading multi-speciality hospital serving the community with advanced healthcare.", image: "https://images.unsplash.com/photo-1538108176635-dec32881517a?auto=format&fit=crop&w=800&q=80" }
    ],
    "East India": [
        { name: "Fortis Hospital, Anandapur", city: "Kolkata", state: "West Bengal", desc: "Modern tertiary care hospital with expertise across multiple medical disciplines.", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" }
    ],
    "South India": [
        { name: "Fortis Hospital, Bannerghatta Road", city: "Bangalore", state: "Karnataka", desc: "World-class healthcare facility known for specialized cardiac and bone marrow transplants.", image: "https://images.unsplash.com/photo-1502740419744-9333938beea3?auto=format&fit=crop&w=800&q=80" }
    ],
    "West India": [
        { name: "Fortis Hospital, Mulund", city: "Mumbai", state: "Maharashtra", desc: "Five-time JCI accredited hospital providing critical care and emergency services.", image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80" }
    ]
};

export default function HospitalsPage() {
    const [activeRegion, setActiveRegion] = useState("North India");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredHospitals = hospitalData[activeRegion].filter(h =>
        h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform scale-150 rotate-12">
                        <MapPin size={400} />
                    </div>
                    <div className="container mx-auto px-4 lg:px-10 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Our Network of <br /> Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 max-w-2xl font-medium leading-relaxed">
                            With world-class facilities across India, we bring high-quality healthcare closer to you.
                        </p>
                    </div>
                </section>

                {/* Filter & Search Bar */}
                <section className="container mx-auto px-4 lg:px-10 -mt-8 relative z-20">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-grow w-full relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by hospital name or city..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-green-600 focus:bg-white rounded-xl transition-all outline-none font-bold text-gray-900"
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar">
                            {Object.keys(hospitalData).map(region => (
                                <button
                                    key={region}
                                    onClick={() => setActiveRegion(region)}
                                    className={`px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all ${activeRegion === region ? 'bg-green-700 text-white shadow-lg shadow-green-900/20' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hospital Listing */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        {filteredHospitals.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                                {filteredHospitals.map((hospital, i) => (
                                    <HospitalCard key={i} hospital={hospital} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
                                <Search size={48} className="mx-auto text-gray-200 mb-4" />
                                <h3 className="text-2xl font-black text-gray-900">No hospitals found</h3>
                                <p className="text-gray-500 font-medium">Try searching for a different name or city.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function HospitalCard({ hospital }) {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="h-64 relative overflow-hidden">
                <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-green-700 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-green-100">
                        {hospital.state}
                    </span>
                </div>
            </div>

            <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {hospital.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-6">
                    <MapPin size={16} className="text-green-600" />
                    {hospital.city}, {hospital.state}
                </div>

                <p className="text-gray-600 leading-relaxed font-medium mb-8 line-clamp-2">
                    {hospital.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 grid grid-cols-2 gap-4">
                    <button className="bg-green-700 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-2">
                        <Calendar size={14} /> Book Appointment
                    </button>
                    <button className="bg-gray-100 text-gray-900 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                        View Details <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
