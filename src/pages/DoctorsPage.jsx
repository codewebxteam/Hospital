import { Search, ChevronDown, MapPin, Clock, IndianRupee } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const doctors = [
    {
        id: 1,
        name: "Dr. Anoop Misra",
        title: "EXECUTIVE CHAIRMAN FORTIS C-DOC | Fortis C-Doc",
        specialty: "Diabetology/Endocrinology | Diabetology/Endocrinology | Endocrinology",
        experience: "40 Years",
        fees: "2800",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
        location: "Fortis C-Doc, Delhi"
    },
    {
        id: 2,
        name: "Dr. (Col) Manjinder Sandhu",
        title: "PRINCIPAL DIRECTOR CARDIOLOGY | Fortis Gurgaon",
        specialty: "Cardiac Sciences | Interventional Cardiology",
        experience: "35 Years",
        fees: "2000",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
        location: "Fortis Manesar"
    },
    {
        id: 3,
        name: "Dr. (Prof.) Amit Javed",
        title: "PRINCIPAL DIRECTOR & HOD LAP GI, GI ONCO, BARIATRIC & MIS SURGERY | Fortis Gurgaon",
        specialty: "General Surgery | Gastroenterology | Oncology",
        experience: "25 Years",
        fees: "1500",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400",
        location: "Fortis Gurgaon"
    }
];

export default function DoctorsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
            <Header />
            <main className="flex-grow pt-6">
                <div className="container mx-auto px-4 lg:px-10">
                    {/* Breadcrumbs (Simplified) */}
                    <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                        <Link to="/" className="hover:text-green-700">Home</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium italic">Doctors</span>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-10">
                        <div className="flex-grow relative">
                            <input
                                type="text"
                                placeholder="Search doctor"
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-between px-6 py-4 rounded-xl border border-gray-200 bg-white shadow-sm min-w-[200px] text-gray-700 font-medium">
                                Filter by Hospital <ChevronDown size={20} className="ml-2 text-gray-400" />
                            </button>
                            <button className="flex items-center justify-between px-6 py-4 rounded-xl border border-gray-200 bg-white shadow-sm min-w-[200px] text-gray-700 font-medium">
                                Filter by special... <ChevronDown size={20} className="ml-2 text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* Doctors Listing Selection (Matching Image) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                        {doctors.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all">
                                <div className="p-6 flex-grow">
                                    <div className="flex gap-6 mb-6">
                                        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-50 bg-gray-100">
                                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700">{doc.name}</h3>
                                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-tight leading-tight mb-3">
                                                {doc.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-[#F3F4F6] text-[#4B5563] text-[11px] font-bold py-1 px-3 rounded-md mb-6 inline-block">
                                        {doc.specialty}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1 text-gray-900 font-bold">
                                                <Clock size={16} /> {doc.experience}
                                            </div>
                                            <span className="text-[10px] text-gray-500 uppercase font-bold ml-5">Experience</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1 text-gray-900 font-bold">
                                                <IndianRupee size={16} /> {doc.fees}
                                            </div>
                                            <span className="text-[10px] text-gray-500 uppercase font-bold ml-5">Fees</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 text-gray-600 text-sm italic">
                                        <MapPin size={16} className="mt-0.5" />
                                        <div>
                                            <p className="font-medium text-gray-400 text-[11px] uppercase tracking-wider mb-0.5">Available at 1 different locations</p>
                                            <p className="text-gray-800 font-bold">{doc.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
                                    <Link to={`/doctors/${doc.id}`} className="py-4 text-center text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                        View Full Profile
                                    </Link>
                                    <Link
                                        to={`/book-appointment/${doc.id}`}
                                        className="py-4 text-center text-sm font-bold text-[#D97706] bg-[#FFFBEB] hover:bg-[#FEF3C7] transition-colors"
                                    >
                                        Book An Appointment
                                    </Link>
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
