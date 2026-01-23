import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertCircle, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ICUPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button onClick={() => navigate('/departments')} className="mb-6 px-4 py-2 bg-cyan-800 hover:bg-cyan-700 rounded-lg font-bold">← Back</button>
                        <h1 className="text-4xl md:text-6xl font-black mb-4">ICU & Critical Care</h1>
                        <p className="text-xl text-cyan-100 font-medium">24/7 intensive and critical care services</p>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-black mb-6 text-gray-900">About Our ICU</h2>
                                <p className="text-lg text-gray-700 mb-4">Our ICU facilities are equipped with state-of-the-art monitoring and life support systems, providing 24/7 critical care with experienced intensivists.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-600">
                                <AlertCircle size={48} className="text-cyan-600 mb-4" />
                                <h3 className="text-2xl font-black text-gray-900 mb-4">ICU Facilities</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><span className="text-cyan-600 font-black">✓</span><span className="text-gray-700 font-medium">Advanced monitoring systems</span></li>
                                    <li className="flex items-start gap-3"><span className="text-cyan-600 font-black">✓</span><span className="text-gray-700 font-medium">Mechanical ventilation support</span></li>
                                    <li className="flex items-start gap-3"><span className="text-cyan-600 font-black">✓</span><span className="text-gray-700 font-medium">ECMO & dialysis services</span></li>
                                    <li className="flex items-start gap-3"><span className="text-cyan-600 font-black">✓</span><span className="text-gray-700 font-medium">24/7 specialist doctors</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black mb-12 text-gray-900 text-center">ICU Types</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Medical ICU", desc: "For critically ill medical patients" },
                                { title: "Surgical ICU", desc: "Post-operative critical care" },
                                { title: "Pediatric ICU", desc: "Specialized care for critical children" },
                                { title: "Cardiac ICU", desc: "Post-cardiac procedure care" },
                                { title: "Respiratory Support", desc: "Ventilator and respiratory care" },
                                { title: "Trauma ICU", desc: "Critical trauma patient management" }
                            ].map((service, i) => (
                                <div key={i} className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-8 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-black text-cyan-700 mb-3">{service.title}</h3>
                                    <p className="text-gray-700 font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black mb-12 text-gray-900 text-center">Critical Care Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Dr. Rajesh Nair", specialization: "Critical Care Specialist", exp: "18 years" },
                                { name: "Dr. Meera Sharma", specialization: "Intensivist", exp: "16 years" },
                                { name: "Dr. Sanjay Rao", specialization: "Respiratory Specialist", exp: "14 years" }
                            ].map((doc, i) => (
                                <div key={i} className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-cyan-600">
                                    <Users size={40} className="text-cyan-600 mb-4" />
                                    <h3 className="text-xl font-black text-gray-900 mb-2">{doc.name}</h3>
                                    <p className="text-cyan-600 font-bold mb-2">{doc.specialization}</p>
                                    <p className="text-gray-600 font-medium">Experience: {doc.exp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-black mb-6">24/7 Critical Care Available</h2>
                        <button className="px-10 py-4 bg-white text-cyan-900 rounded-xl font-black text-lg hover:bg-cyan-50">Call Emergency: +91-XXXX-XXXX</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
