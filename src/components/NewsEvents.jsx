import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
    {
        title: "Revolutionary CAR-T Cell Therapy Now Available",
        date: "Jan 15, 2026",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
        excerpt: "Breakthrough cancer treatment offering new hope for patients with blood cancers."
    },
    {
        title: "New Robotic Surgery Center Inaugurated",
        date: "Jan 10, 2026",
        category: "Facilities",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&q=80",
        excerpt: "State-of-the-art robotic surgery suite for precision procedures."
    },
    {
        title: "Free Health Camp This Weekend",
        date: "Jan 8, 2026",
        category: "Community",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
        excerpt: "Comprehensive health screenings available for the local community."
    }
];

export default function NewsEvents() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-2 block">Stay Updated</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">News & Events</h2>
                    </div>
                    <Link to="/blog" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#E67E61] font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                        View All News <ArrowRight size={16} />
                    </Link>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to="/blog"
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border-2 border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#E67E61] text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-3">
                                    <Calendar size={14} /> {item.date}
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    {item.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
