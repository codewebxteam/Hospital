import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Users, Activity, Stethoscope, PhoneCall, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CardiologyPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />

            <main className="flex-grow">

                {/* HERO */}
                <section className="bg-gradient-to-r from-[#0f9d58] to-[#008542] text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button
                            onClick={() => navigate('/departments')}
                            className="mb-6 px-5 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold"
                        >
                            ← Back to Departments
                        </button>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Cardiology Department
                        </h1>

                        <p className="text-xl text-green-100 max-w-2xl">
                            Comprehensive heart care with advanced diagnostics,
                            emergency support and experienced cardiologists.
                        </p>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                About Our Cardiology Unit
                            </h2>

                            <p className="text-lg text-gray-700 mb-4">
                                Our Cardiology Department is dedicated to the prevention,
                                diagnosis and treatment of heart and vascular diseases.
                                We follow evidence-based protocols with patient-focused care.
                            </p>

                            <p className="text-lg text-gray-700">
                                From routine heart checkups to emergency cardiac care,
                                our team ensures timely and accurate treatment.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#0f9d58]">
                            <Heart size={46} className="text-[#0f9d58] mb-4" />

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Why Choose Our Cardiology?
                            </h3>

                            <ul className="space-y-3 text-gray-700 font-medium">
                                <li>✔ Experienced cardiologists & trained staff</li>
                                <li>✔ ECG, Echo & cardiac monitoring facilities</li>
                                <li>✔ Emergency cardiac care support</li>
                                <li>✔ Evidence-based & ethical treatment approach</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                            Our Cardiology Services
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Heart Health Checkup",
                                    desc: "Preventive screening for early heart disease detection"
                                },
                                {
                                    title: "ECG & Echocardiography",
                                    desc: "Accurate diagnosis using modern cardiac imaging"
                                },
                                {
                                    title: "Hypertension Management",
                                    desc: "Treatment & monitoring of high blood pressure"
                                },
                                {
                                    title: "Chest Pain Evaluation",
                                    desc: "Assessment of cardiac & non-cardiac chest pain"
                                },
                                {
                                    title: "Heart Failure Care",
                                    desc: "Long-term management & lifestyle guidance"
                                },
                                {
                                    title: "Emergency Cardiac Care",
                                    desc: "Immediate response for cardiac emergencies"
                                }
                            ].map((service, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
                                >
                                    <Activity className="text-[#0f9d58] mb-3" size={28} />
                                    <h3 className="text-xl font-semibold text-[#0f9d58] mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DOCTORS */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                            Our Cardiology Specialists
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Senior Cardiologist",
                                    specialization: "Clinical & Preventive Cardiology",
                                    exp: "15+ Years Experience"
                                },
                                {
                                    name: "Consultant Cardiologist",
                                    specialization: "Heart Disease Management",
                                    exp: "12+ Years Experience"
                                },
                                {
                                    name: "Emergency Care Specialist",
                                    specialization: "Critical Cardiac Care",
                                    exp: "10+ Years Experience"
                                }
                            ].map((doc, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#0f9d58]"
                                >
                                    <Users size={38} className="text-[#0f9d58] mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {doc.name}
                                    </h3>
                                    <p className="text-[#0f9d58] font-medium mt-1">
                                        {doc.specialization}
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        {doc.exp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-[#0f9d58] to-[#008542] text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Take Care of Your Heart Today
                        </h2>

                        <div className="flex justify-center gap-6 flex-wrap">
                            <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#0f9d58] rounded-xl font-semibold hover:bg-green-50">
                                <Calendar size={20} />
                                Book Appointment
                            </button>

                            <button className="flex items-center gap-2 px-8 py-4 bg-white/20 rounded-xl font-semibold hover:bg-white/30">
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
