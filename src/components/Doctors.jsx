import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const doctors = [
    {
        id: 1,
        name: "Dr. Robert Chen",
        role: "Chief Cardiologist",
        experience: "22 Years",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 2,
        name: "Dr. Maria Rodriguez",
        role: "Pediatric Cardiologist",
        experience: "15 Years",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 3,
        name: "Dr. James Wilson",
        role: "Cardiac Surgeon",
        experience: "18 Years",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 4,
        name: "Dr. Priya Sharma",
        role: "Interventional Cardiologist",
        experience: "12 Years",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 5,
        name: "Dr. Anil Kapoor",
        role: "Electrophysiologist",
        experience: "16 Years",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 6,
        name: "Dr. Sarah Johnson",
        role: "Heart Failure Specialist",
        experience: "14 Years",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 7,
        name: "Dr. Vikram Patel",
        role: "Preventive Cardiologist",
        experience: "10 Years",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 8,
        name: "Dr. Emily Davis",
        role: "Echo Cardiologist",
        experience: "8 Years",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80"
    }
];

export default function Doctors() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 6;

    // Auto-slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % (doctors.length - cardsToShow + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, doctors.length - cardsToShow));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-2 block">Our Specialists</span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Meet Our Cardiologists</h2>
                    <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= doctors.length - cardsToShow}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Cards Slider */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-4"
                            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow + 1.5)}%)` }}
                        >
                            {doctors.map((doctor) => (
                                <div
                                    key={doctor.id}
                                    className="flex-shrink-0 w-[calc(100%/6-12px)] min-w-[160px]"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-green-300 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                        {/* Image */}
                                        <div className="h-36 overflow-hidden relative">
                                            <img
                                                src={doctor.image}
                                                alt={doctor.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                                                <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">Available</span>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-3 text-center">
                                            <h3 className="text-sm font-black text-gray-900 leading-tight group-hover:text-green-700 transition-colors truncate">{doctor.name}</h3>
                                            <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider mt-1 truncate">{doctor.role}</p>
                                            <p className="text-[10px] text-gray-400 font-bold mt-1">{doctor.experience}</p>

                                            {/* Book Appointment Button */}
                                            <Link
                                                to={`/book-appointment/${doctor.id}`}
                                                className="mt-3 w-full bg-green-600 text-white text-[10px] font-black py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-1 uppercase tracking-wide"
                                            >
                                                <Calendar size={12} /> Book
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: doctors.length - cardsToShow + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-green-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
