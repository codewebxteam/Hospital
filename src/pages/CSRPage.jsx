import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CSRPage() {
    const initiatives = [
        {
            title: "Health for All",
            desc: "Providing free health screenings and medical camps in rural and underserved areas.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Village Health Outreach",
            desc: "Mobile medical units delivering primary healthcare to villages across the country.",
            image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Education & Awareness",
            desc: "Community programs focused on preventive care and healthy lifestyle awareness.",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#008C44] text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">Social Responsibility</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Touching lives beyond our hospital walls. We are committed to fostering healthier communities through sustainable social initiatives.
                        </p>
                    </div>
                </div>

                {/* Our Mission */}
                <div className="container mx-auto px-4 lg:px-10 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-[#008C44] font-black uppercase text-xs tracking-widest mb-4 block">Our Vision</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 italic">
                            "A healthy nation is a strong nation. We strive to bridge the healthcare gap for the most vulnerable sectors of society."
                        </h2>
                        <div className="w-24 h-1.5 bg-[#E67E61] mx-auto rounded-full"></div>
                    </div>
                </div>

                {/* Initiatives Grid */}
                <div className="container mx-auto px-4 lg:px-10 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {initiatives.map((init, i) => (
                            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-50 flex flex-col hover:-translate-y-2 transition-transform duration-500">
                                <div className="h-64 overflow-hidden">
                                    <img src={init.image} alt={init.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{init.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {init.desc}
                                    </p>
                                    <button className="text-[#008C44] font-black uppercase text-sm tracking-wider hover:underline">
                                        Read More
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
