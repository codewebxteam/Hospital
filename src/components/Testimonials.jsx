import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const topRowTestimonials = [
    {
        type: "text",
        name: "Prachi",
        content: "Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery and..."
    },
    {
        type: "video",
        name: "Patient Story",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
    },
    {
        type: "video",
        name: "Recovery Journey",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
    },
    {
        type: "text",
        name: "B Srinivasa Shetty",
        title: "From Pain To Freedom",
        content: "From Pain to Freedom! Hear from our patient's family, made possible by the expertise of Dr. Rajasekhar..."
    },
    {
        type: "video",
        name: "Heart Surgery",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80"
    },
    {
        type: "text",
        name: "Ramesh Kumar",
        content: "The cardiac team at Vartika Aarna saved my life. Forever grateful for their dedication and expertise..."
    }
];

const bottomRowTestimonials = [
    {
        type: "video",
        name: "Knee Replacement",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
    },
    {
        type: "feature",
        title: "Real Stories Of Healing",
        content: "I was diagnosed with multiple fibroids and advised to undergo Myomectomy. After consulting various doctors, an expert..."
    },
    {
        type: "video",
        name: "Brain Surgery",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=300&q=80"
    },
    {
        type: "video",
        name: "Cancer Recovery",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=300&q=80"
    },
    {
        type: "text",
        name: "Sunita Devi",
        content: "Best hospital experience ever. The staff was so caring and the doctors explained everything clearly..."
    },
    {
        type: "video",
        name: "Child Care",
        image: "https://images.unsplash.com/photo-1584515931304-6e07e0ff9e8a?auto=format&fit=crop&w=300&q=80"
    }
];

function TestimonialCard({ item }) {
    if (item.type === "video") {
        return (
            <div className="relative w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#E67E61] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={16} className="text-white fill-white ml-0.5" />
                    </div>
                </div>
            </div>
        );
    }

    if (item.type === "feature") {
        return (
            <div className="w-64 h-32 bg-[#006B7D] text-white rounded-2xl p-4 flex-shrink-0">
                <h4 className="font-black text-base mb-2">{item.title}</h4>
                <p className="text-xs text-white/80 leading-relaxed line-clamp-3">{item.content}</p>
            </div>
        );
    }

    return (
        <div className="w-56 h-32 bg-[#E8F4F8] rounded-2xl p-4 flex-shrink-0 border border-[#D0E8EE]">
            {item.title && <p className="text-xs font-black text-[#006B7D] mb-1">{item.title}</p>}
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-2">{item.content}</p>
            <p className="text-xs font-black text-gray-800">{item.name}</p>
        </div>
    );
}

export default function Testimonials() {
    const [topOffset, setTopOffset] = useState(0);
    const [bottomOffset, setBottomOffset] = useState(0);

    // Auto-slide: Top row moves left, Bottom row moves right
    useEffect(() => {
        const timer = setInterval(() => {
            setTopOffset((prev) => prev + 0.5);
            setBottomOffset((prev) => prev + 0.5);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10 mb-8">
                <h2 className="text-lg md:text-xl font-black text-[#006B7D] uppercase tracking-wider">
                    Success Stories & Patient Testimonials
                </h2>
            </div>

            {/* Top Row - Slides Left */}
            <div className="relative mb-4 overflow-hidden">
                <div
                    className="flex gap-4 animate-marquee-left"
                    style={{ transform: `translateX(-${topOffset % 800}px)` }}
                >
                    {[...topRowTestimonials, ...topRowTestimonials, ...topRowTestimonials].map((item, idx) => (
                        <TestimonialCard key={idx} item={item} />
                    ))}
                </div>
            </div>

            {/* Bottom Row - Slides Right */}
            <div className="relative overflow-hidden">
                <div
                    className="flex gap-4"
                    style={{ transform: `translateX(${-(1200 - bottomOffset % 800)}px)` }}
                >
                    {[...bottomRowTestimonials, ...bottomRowTestimonials, ...bottomRowTestimonials].map((item, idx) => (
                        <TestimonialCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
