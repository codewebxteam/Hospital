import Header from '../components/Header';
import Footer from '../components/Footer';
import { Globe, Plane, Briefcase, Languages } from 'lucide-react';

export default function InternationalSectionPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <div className="bg-[#008C44] text-white py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-black mb-6">Global Patient Services</h1>
                            <p className="text-xl opacity-90 leading-relaxed mb-10">
                                Providing world-class medical care and personalized services for international patients traveling to India.
                            </p>
                            <button className="bg-white text-[#008C44] font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 transition-colors">
                                Plan Your Journey
                            </button>
                        </div>
                    </div>
                    {/* Abstract Globe Decor */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
                        <Globe size={600} strokeWidth={1} />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="container mx-auto px-4 lg:px-10 py-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Seamless Medical Travel Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Travel & Visa", desc: "End-to-end assistance with medical visas and travel booking.", icon: <Plane /> },
                            { title: "Concierge", desc: "Dedicated patient coordinators for a hassle-free stay.", icon: <Briefcase /> },
                            { title: "Interpreters", desc: "Language support for non-English speaking patients.", icon: <Languages /> },
                            { title: "International Insurance", desc: "Direct billing and insurance coordination.", icon: <Globe /> }
                        ].map((s, i) => (
                            <div key={i} className="bg-[#F8FBFA] p-8 rounded-3xl text-center hover:bg-[#F0F7F5] transition-colors border border-transparent hover:border-[#008C44]/20 group">
                                <div className="text-[#008C44] mb-6 flex justify-center scale-150 group-hover:-translate-y-2 transition-transform">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
