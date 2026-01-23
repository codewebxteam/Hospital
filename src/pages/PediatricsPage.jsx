import Header from '../components/Header';
import Footer from '../components/Footer';
import { Baby, Users, Calendar, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PediatricsPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white text-black">
            <Header />

            <main className="flex-grow">

                {/* HERO – WHITE */}
                <section className="py-24 border-b">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button
                            onClick={() => navigate('/departments')}
                            className="mb-6 px-5 py-2 border rounded-lg font-medium hover:bg-gray-100 transition"
                        >
                            ← Back to Departments
                        </button>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Pediatrics Department
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl">
                            Compassionate, safe and specialized healthcare for infants,
                            children and adolescents.
                        </p>
                    </div>
                </section>

                {/* ABOUT + SERVICE CARD */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10 grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                About Pediatric Care
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Our Pediatrics Department provides complete medical
                                care for children in a supportive and family-friendly
                                environment.
                            </p>
                            <p className="text-lg text-gray-700">
                                We focus on prevention, early diagnosis and
                                personalized treatment plans.
                            </p>
                        </div>

                        {/* Animated Card */}
                        <div className="bg-white rounded-2xl p-8 border shadow-sm
                                        transition-all duration-300
                                        hover:-translate-y-2 hover:shadow-xl">
                            <Baby size={42} className="mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">
                                Core Services
                            </h3>
                            <ul className="space-y-3 text-gray-700 font-medium">
                                <li>✔ Neonatal & Newborn Care</li>
                                <li>✔ Immunization Programs</li>
                                <li>✔ Growth Monitoring</li>
                                <li>✔ Pediatric Emergency Care</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SPECIALTIES – STAGGERED CARDS */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Pediatric Specialties
                        </h2>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                "Neonatal Intensive Care",
                                "Child Vaccination",
                                "Growth & Development",
                                "Pediatric Surgery",
                                "Infectious Disease Care",
                                "Nutrition & Diet Counseling"
                            ].map((title, i) => (
                                <div
                                    key={i}
                                    className={`bg-white rounded-xl p-8 border
                                    transition-all duration-300
                                    hover:-translate-y-2 hover:shadow-xl
                                    ${i % 2 === 0 ? 'md:mt-6' : ''}`}
                                >
                                    <h3 className="text-xl font-semibold mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600">
                                        Comprehensive and safe care tailored
                                        for children’s needs.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DOCTORS – CENTER FOCUS CARDS */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-14 text-center">
                            Pediatric Specialists
                        </h2>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    name: "Senior Pediatrician",
                                    specialization: "Child Health & Development",
                                    exp: "15+ Years Experience"
                                },
                                {
                                    name: "Neonatology Consultant",
                                    specialization: "NICU & Newborn Care",
                                    exp: "12+ Years Experience"
                                },
                                {
                                    name: "Pediatric Surgeon",
                                    specialization: "Child Surgical Care",
                                    exp: "10+ Years Experience"
                                }
                            ].map((doc, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl p-8 border text-center
                                               transition-all duration-300
                                               hover:scale-[1.03] hover:shadow-xl"
                                >
                                    <Users size={36} className="mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold">
                                        {doc.name}
                                    </h3>
                                    <p className="text-gray-700 mt-1">
                                        {doc.specialization}
                                    </p>
                                    <p className="text-gray-500 mt-2">
                                        {doc.exp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA – WHITE */}
                <section className="py-20 border-t">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-bold mb-8">
                            Schedule Your Child’s Check-up
                        </h2>

                        <div className="flex justify-center gap-6 flex-wrap">
                            <button className="flex items-center gap-2 px-8 py-4 border rounded-xl font-semibold hover:bg-gray-100 transition">
                                <Calendar size={20} />
                                Book Appointment
                            </button>

                            <button className="flex items-center gap-2 px-8 py-4 border rounded-xl font-semibold hover:bg-gray-100 transition">
                                <PhoneCall size={20} />
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
