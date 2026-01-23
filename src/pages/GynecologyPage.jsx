import Header from '../components/Header';
import Footer from '../components/Footer';
import { Flower2, Users, PhoneCall, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GynecologyPage() {
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
                            Gynecology Department
                        </h1>

                        <p className="text-xl text-green-100 max-w-2xl">
                            Advanced & compassionate women’s healthcare with modern
                            diagnosis, treatment and personalized care.
                        </p>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                About Our Gynecology Unit
                            </h2>

                            <p className="text-lg text-gray-700 mb-4">
                                Our Gynecology Department focuses on comprehensive care
                                for women at every stage of life — from adolescence to
                                menopause. We combine experienced doctors with modern
                                medical facilities.
                            </p>

                            <p className="text-lg text-gray-700">
                                We emphasize early diagnosis, patient education and
                                minimally invasive treatment for faster recovery.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#0f9d58]">
                            <Flower2 size={46} className="text-[#0f9d58] mb-4" />

                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Key Services
                            </h3>

                            <ul className="space-y-3 text-gray-700 font-medium">
                                <li>✔ High-Risk & Normal Pregnancy Care</li>
                                <li>✔ Infertility & Fertility Counseling</li>
                                <li>✔ Menstrual Disorder Treatment</li>
                                <li>✔ Laparoscopic & Gynecologic Surgery</li>
                                <li>✔ Family Planning & Contraception</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SPECIALTIES */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Our Specialized Care
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Pregnancy & Maternity Care",
                                    desc: "Antenatal checkups, delivery & postnatal care"
                                },
                                {
                                    title: "Infertility Treatment",
                                    desc: "Evaluation, counseling & advanced fertility care"
                                },
                                {
                                    title: "Gynecologic Surgery",
                                    desc: "Safe and minimally invasive surgical procedures"
                                },
                                {
                                    title: "Menopause Care",
                                    desc: "Hormonal balance & symptom management"
                                },
                                {
                                    title: "Adolescent Gynecology",
                                    desc: "Health education & menstrual care for teens"
                                },
                                {
                                    title: "Preventive Screening",
                                    desc: "Pap smear, ultrasound & routine checkups"
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
                                >
                                    <h3 className="text-xl font-semibold text-[#0f9d58] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700">
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
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Our Experienced Specialists
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Senior Gynecologist",
                                    specialization: "Obstetrics & Gynecology",
                                    exp: "15+ Years Experience"
                                },
                                {
                                    name: "Consultant Gynecologist",
                                    specialization: "Infertility & Women’s Health",
                                    exp: "12+ Years Experience"
                                },
                                {
                                    name: "Laparoscopic Surgeon",
                                    specialization: "Advanced Gynecologic Surgery",
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
                            Book Your Consultation Today
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
