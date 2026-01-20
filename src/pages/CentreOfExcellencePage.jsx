import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Award, Zap, Heart } from 'lucide-react';

export default function CentreOfExcellencePage() {
    const centres = [
        {
            title: "Cardiac Sciences",
            desc: "World-class cardiology and cardiac surgery services with high success rates in complex procedures.",
            icon: <Heart />,
            color: "bg-red-50 text-red-600"
        },
        {
            title: "Oncology Institute",
            desc: "Comprehensive cancer care using the latest radiation technology and immunotherapy.",
            icon: <ShieldCheck />,
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Neurology & Neurosurgery",
            desc: "Advanced treatment for stroke, epilepsy, and complex brain and spine disorders.",
            icon: <Zap />,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Orthopaedics & Joint Replacement",
            desc: "Specialized in robotic-assisted joint replacements and sports medicine.",
            icon: <Award />,
            color: "bg-green-50 text-green-600"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <div className="bg-[#008C44] text-white py-24 text-center">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">Centres of Excellence</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Setting global benchmarks in clinical excellence and patient care through specialized medical institutes.
                        </p>
                    </div>
                </div>

                {/* Centres Grid */}
                <div className="container mx-auto px-4 lg:px-10 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {centres.map((item, i) => (
                            <div key={i} className="flex gap-8 p-10 border border-gray-100 rounded-[32px] hover:shadow-2xl transition-all duration-500 group bg-white">
                                <div className={`${item.color} p-6 rounded-2xl h-fit scale-125 group-hover:rotate-12 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed italic">
                                        "{item.desc}"
                                    </p>
                                    <button className="text-[#008C44] font-bold text-sm tracking-widest uppercase hover:underline">
                                        Explore Centre
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
