import Header from '../components/Header';
import Footer from '../components/Footer';
import { Bone, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OrthopedicsPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
            <Header />

            <main className="flex-grow">

                {/* HERO */}
                <section className="bg-gradient-to-r from-sky-600 to-sky-500 text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button
                            onClick={() => navigate('/departments')}
                            className="mb-6 px-5 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition"
                        >
                            ← Back to Departments
                        </button>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Orthopedics Department
                        </h1>

                        <p className="text-xl text-sky-100 max-w-2xl">
                            Advanced bone, joint and musculoskeletal care with modern technology.
                        </p>
                    </div>
                </section>

                {/* ABOUT + HIGHLIGHT CARD */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10 grid md:grid-cols-2 gap-14 items-center">

                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                About Orthopedics
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Our Orthopedic Department provides comprehensive care for bones,
                                joints, muscles and ligaments — from diagnosis to rehabilitation.
                            </p>
                            <p className="text-lg text-gray-700">
                                We use minimally invasive and advanced surgical techniques for
                                faster recovery and long-term relief.
                            </p>
                        </div>

                        {/* Modern Highlight Card */}
                        <div className="relative bg-white rounded-3xl p-8
                                        border border-sky-100
                                        shadow-[0_20px_40px_rgba(14,165,233,0.15)]
                                        overflow-hidden">

                            <div className="absolute -top-24 -right-24 w-64 h-64
                                            bg-sky-200 rounded-full blur-3xl opacity-40"></div>

                            <Bone size={48} className="text-sky-600 mb-4 relative" />

                            <h3 className="text-2xl font-bold mb-4 relative">
                                Department Highlights
                            </h3>

                            <ul className="space-y-4 relative">
                                {[
                                    "Joint replacement surgery (Hip & Knee)",
                                    "Arthroscopic procedures",
                                    "Spine surgery & pain management",
                                    "Sports injury treatment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-sky-500
                                                         text-white flex items-center justify-center text-sm font-bold">
                                            ✓
                                        </span>
                                        <span className="text-gray-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* TREATMENTS */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Treatments & Procedures
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Joint Replacement", desc: "Advanced hip and knee replacement surgery" },
                                { title: "Arthroscopy", desc: "Minimally invasive joint surgery" },
                                { title: "Spine Surgery", desc: "Treatment for spine disorders" },
                                { title: "Fracture Care", desc: "Comprehensive fracture management" },
                                { title: "Sports Medicine", desc: "Injury rehabilitation & recovery" },
                                { title: "Trauma Care", desc: "Emergency orthopedic trauma services" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8
                                               border border-sky-100
                                               shadow-md hover:shadow-2xl
                                               transition-all duration-300
                                               hover:-translate-y-2"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-xl
                                                    bg-gradient-to-br from-sky-500 to-sky-400
                                                    text-white flex items-center justify-center
                                                    font-bold text-lg">
                                        {i + 1}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DOCTORS */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Our Orthopedic Specialists
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Dr. Vikram Singh", specialization: "Joint Replacement", exp: "20+ Years" },
                                { name: "Dr. Neha Gupta", specialization: "Spine Surgery", exp: "16+ Years" },
                                { name: "Dr. Arjun Sharma", specialization: "Sports Medicine", exp: "14+ Years" }
                            ].map((doc, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8
                                               border border-sky-100
                                               shadow-md hover:shadow-2xl
                                               transition-all duration-300
                                               hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 rounded-2xl mb-5
                                                    bg-gradient-to-br from-sky-600 to-sky-400
                                                    flex items-center justify-center
                                                    text-white shadow-lg">
                                        <Users size={28} />
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {doc.name}
                                    </h3>

                                    <p className="text-sky-600 font-medium">
                                        {doc.specialization}
                                    </p>

                                    <p className="text-gray-600 text-sm mt-1">
                                        Experience: {doc.exp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-sky-600 to-sky-500 text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Schedule Your Consultation
                        </h2>

                        <div className="flex justify-center gap-6 flex-wrap">
                            <button className="px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50">
                                Book Appointment
                            </button>

                            <button className="px-8 py-4 border border-white rounded-xl font-semibold hover:bg-white/10">
                                Call for Inquiry
                            </button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
