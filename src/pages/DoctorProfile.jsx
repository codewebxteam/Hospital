import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Clock, Award, BookOpen, UserCheck, Calendar } from 'lucide-react';
import { useState } from 'react';
import RequestCallbackModal from '../components/RequestCallbackModal';

const doctorsData = {
    1: {
        name: "Dr. Anoop Misra",
        title: "EXECUTIVE CHAIRMAN FORTIS C-DOC | Fortis C-Doc",
        specialty: "Diabetology/Endocrinology | Diabetology/Endocrinology | Endocrinology",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
        experience: "40 Years",
        fees: "2800",
        location: "Fortis C-Doc, Delhi",
        about: "Dr. Anoop Misra is a renowned endocrinologist and diabetologist with over 40 years of experience. He serves as the Executive Chairman of Fortis C-Doc and is recognized for his extensive work in obesity and diabetes research.",
        education: ["MBBS", "MD (Internal Medicine)", "Fellowship in Endocrinology"],
        specialization: ["Type 1 & Type 2 Diabetes", "Obesity Management", "Thyroid Disorders", "Metabolic Syndrome"],
        achievements: ["Padma Shri Awardee", "Dr. B.C. Roy Award", "Published over 300 research papers"]
    },
    2: {
        name: "Dr. (Col) Manjinder Sandhu",
        title: "PRINCIPAL DIRECTOR CARDIOLOGY | Fortis Gurgaon",
        specialty: "Cardiac Sciences | Interventional Cardiology",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
        experience: "35 Years",
        fees: "2000",
        location: "Fortis Manesar",
        about: "Dr. (Col) Manjinder Sandhu is a highly experienced interventional cardiologist. With a background in the Armed Forces Medical Services, he brings precision and dedication to his cardiac practice.",
        education: ["MBBS", "MD (Medicine)", "DM (Cardiology)"],
        specialization: ["Complex Angioplasty", "TAVI / TAVR", "Pacemaker Implantation", "Heart Failure Management"],
        achievements: ["Served as Cardiologist to the President of India", "Vishisht Seva Medal (VSM)"]
    },
    3: {
        name: "Dr. (Prof.) Amit Javed",
        title: "PRINCIPAL DIRECTOR & HOD LAP GI, GI ONCO, BARIATRIC & MIS SURGERY | Fortis Gurgaon",
        specialty: "General Surgery | Gastroenterology | Oncology",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600",
        experience: "25 Years",
        fees: "1500",
        location: "Fortis Gurgaon",
        about: "Dr. Amit Javed is an expert in gastrointestinal and bariatric surgery. He leads the department at Fortis Gurgaon and is known for his proficiency in minimally invasive surgical techniques.",
        education: ["MBBS", "MS (General Surgery)", "MCh (Surgical Gastroenterology)"],
        specialization: ["Bariatric (Weight Loss) Surgery", "GI Oncology", "Advanced Laparoscopic Surgery", "Liver & Biliary Surgery"],
        achievements: ["Performed over 10,000 complex GI surgeries", "Best Surgical Video Award at International Conferences"]
    }
};

export default function DoctorProfile() {
    const { id } = useParams();
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);
    const doctor = doctorsData[id] || doctorsData[1];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <RequestCallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4 lg:px-10">
                    {/* Breadcrumbs */}
                    <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
                        <Link to="/" className="hover:text-green-700">Home</Link>
                        <span>/</span>
                        <Link to="/doctors" className="hover:text-green-700">Doctors</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium italic">{doctor.name}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Profile Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 sticky top-32">
                                <div className="h-80 bg-gray-100 overflow-hidden">
                                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 leading-relaxed">
                                        {doctor.title}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-gray-400">Experience</p>
                                                <p className="font-bold">{doctor.experience}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-gray-400">Location</p>
                                                <p className="font-bold">{doctor.location}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/book-appointment/${id}`}
                                        className="w-full bg-[#008C44] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-800 transition-all flex items-center justify-center gap-2 mb-4"
                                    >
                                        <Calendar size={20} /> Book Appointment
                                    </Link>
                                    <button
                                        onClick={() => setIsCallbackOpen(true)}
                                        className="w-full bg-white border-2 border-green-600 text-green-600 font-bold py-4 rounded-xl hover:bg-green-50 transition-all"
                                    >
                                        Request a Callback
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:col-span-2">
                            <div className="space-y-12">
                                {/* About Section */}
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <UserCheck className="text-green-600" size={28} /> About {doctor.name}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {doctor.about}
                                    </p>
                                </section>

                                {/* Specialization Section */}
                                <section className="bg-gray-50 p-8 rounded-3xl">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Award className="text-green-600" size={28} /> Specialization & Expertise
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {doctor.specialization.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-800 font-medium">{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Education Section */}
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <BookOpen className="text-green-600" size={28} /> Education & Qualification
                                    </h2>
                                    <ul className="space-y-4">
                                        {doctor.education.map((edu, i) => (
                                            <li key={i} className="flex items-start gap-4 text-lg text-gray-600">
                                                <span className="text-green-600 mt-1 font-bold">✓</span>
                                                {edu}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Achievements Section */}
                                <section className="border-t border-gray-100 pt-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Award className="text-orange-500" size={28} /> Awards & Recognitions
                                    </h2>
                                    <div className="space-y-4">
                                        {doctor.achievements.map((ach, i) => (
                                            <div key={i} className="flex items-center gap-4 bg-orange-50/50 p-4 rounded-xl text-gray-800 font-medium">
                                                <div className="text-orange-500 text-xl flex-shrink-0">🏆</div>
                                                {ach}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
