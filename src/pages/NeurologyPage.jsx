import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Users, HeartPulse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NeurologyPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#FFFDF9] text-gray-900">
            <Header />

            <main className="flex-grow">

                {/* HERO */}
                <section className="bg-gradient-to-r from-[#F6EFE6] to-[#FFFDF9] py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button
                            onClick={() => navigate('/departments')}
                            className="mb-6 px-5 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg font-semibold transition"
                        >
                            ← Back to Departments
                        </button>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Neurology Department
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl">
                            Advanced care for brain, spine and nervous system with compassion and precision.
                        </p>
                    </div>
                </section>

                {/* ABOUT + SERVICES CARD */}
                <section className="py-20 bg-[#FAF7F2]">
                    <div className="container mx-auto px-4 lg:px-10 grid md:grid-cols-2 gap-14 items-center">

                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                About Neurology
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Our Neurology Department specializes in diagnosis and treatment of disorders
                                related to the brain, spinal cord and nervous system.
                            </p>
                            <p className="text-lg text-gray-700">
                                We combine advanced technology with experienced specialists to provide
                                accurate diagnosis and long-term care.
                            </p>
                        </div>

                        {/* Modern Services Card */}
                        <div className="relative bg-white rounded-3xl p-8
                                        border border-[#EFE6D8]
                                        shadow-[0_20px_40px_rgba(180,160,120,0.15)]
                                        overflow-hidden">

                            <div className="absolute -top-24 -right-24 w-64 h-64
                                            bg-[#EFE6D8] rounded-full blur-3xl opacity-50"></div>

                            <Brain size={48} className="text-gray-800 mb-4 relative" />

                            <h3 className="text-2xl font-bold mb-4 relative">
                                Neurology Services
                            </h3>

                            <ul className="space-y-4 relative">
                                {[
                                    "Stroke Management & Rehabilitation",
                                    "Epilepsy Diagnosis & Treatment",
                                    "Movement Disorders Care",
                                    "EEG, EMG & Nerve Testing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-gray-800
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

                {/* SPECIALTIES */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Our Neurology Specialties
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Stroke Care", desc: "Emergency and long-term stroke treatment" },
                                { title: "Epilepsy Clinic", desc: "Advanced seizure management" },
                                { title: "Parkinson’s Care", desc: "Specialized movement disorder care" },
                                { title: "Neurosurgery", desc: "Surgical treatment of brain disorders" },
                                { title: "Sleep Disorders", desc: "Sleep apnea & insomnia treatment" },
                                { title: "Headache Clinic", desc: "Migraine and chronic headache care" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8
                                               border border-[#EFE6D8]
                                               shadow-md hover:shadow-xl
                                               transition-all duration-300
                                               hover:-translate-y-2"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-xl
                                                    bg-[#EFE6D8]
                                                    text-gray-800 flex items-center justify-center
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

                {/* WHY CHOOSE US – NEW SECTION */}
                <section className="py-20 bg-[#FAF7F2]">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Why Choose Our Neurology Care
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                "Experienced Neurologists",
                                "Advanced Diagnostic Technology",
                                "Patient-Centered Treatment Plans"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8
                                               border border-[#EFE6D8]
                                               shadow-md text-center"
                                >
                                    <HeartPulse className="mx-auto mb-4 text-gray-800" size={36} />
                                    <p className="text-lg font-semibold text-gray-800">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DOCTORS */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Expert Neurologists
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Dr. Sanjay Verma", specialization: "Stroke Specialist", exp: "17+ Years" },
                                { name: "Dr. Anjali Desai", specialization: "Epilepsy Specialist", exp: "14+ Years" },
                                { name: "Dr. Rohit Kumar", specialization: "Movement Disorders", exp: "13+ Years" }
                            ].map((doc, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-3xl p-8
                                               border border-[#EFE6D8]
                                               shadow-md hover:shadow-xl
                                               transition-all duration-300
                                               hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 rounded-2xl mb-5
                                                    bg-[#EFE6D8]
                                                    flex items-center justify-center
                                                    text-gray-800 shadow">
                                        <Users size={28} />
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {doc.name}
                                    </h3>

                                    <p className="text-gray-700 font-medium">
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
                <section className="bg-[#F6EFE6] py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Book Your Neurology Consultation
                        </h2>

                        <button className="px-10 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800">
                            Book Appointment
                        </button>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
