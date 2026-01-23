import Header from '../components/Header';
import Footer from '../components/Footer';
import { FlaskConical, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LaboratoryPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-lime-900 to-lime-700 text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button onClick={() => navigate('/departments')} className="mb-6 px-4 py-2 bg-lime-800 hover:bg-lime-700 rounded-lg font-bold">← Back</button>
                        <h1 className="text-4xl md:text-6xl font-black mb-4">Laboratory Services</h1>
                        <p className="text-xl text-lime-100 font-medium">Advanced diagnostic and pathology services</p>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-black mb-6 text-gray-900">About Our Lab</h2>
                                <p className="text-lg text-gray-700 mb-4">Our Laboratory Services provide comprehensive diagnostic testing with state-of-the-art equipment and certified pathologists ensuring accurate and timely results.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-lime-600">
                                <FlaskConical size={48} className="text-lime-600 mb-4" />
                                <h3 className="text-2xl font-black text-gray-900 mb-4">Services</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><span className="text-lime-600 font-black">✓</span><span className="text-gray-700 font-medium">Blood tests & analysis</span></li>
                                    <li className="flex items-start gap-3"><span className="text-lime-600 font-black">✓</span><span className="text-gray-700 font-medium">Home sample collection</span></li>
                                    <li className="flex items-start gap-3"><span className="text-lime-600 font-black">✓</span><span className="text-gray-700 font-medium">Fast online reports</span></li>
                                    <li className="flex items-start gap-3"><span className="text-lime-600 font-black">✓</span><span className="text-gray-700 font-medium">Accredited testing facility</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black mb-12 text-gray-900 text-center">Tests Available</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Routine Blood Tests", desc: "CBC, differential, blood sugar tests" },
                                { title: "Biochemistry", desc: "Liver, kidney, cardiac markers" },
                                { title: "Microbiology", desc: "Culture, sensitivity, infection testing" },
                                { title: "Immunology", desc: "Allergy, autoimmune disease testing" },
                                { title: "Hormonal Tests", desc: "Thyroid, reproductive, metabolic hormones" },
                                { title: "Molecular Testing", desc: "COVID, TB, genetic testing" }
                            ].map((service, i) => (
                                <div key={i} className="bg-lime-50 border-2 border-lime-200 rounded-xl p-8 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-black text-lime-700 mb-3">{service.title}</h3>
                                    <p className="text-gray-700 font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black mb-12 text-gray-900 text-center">Pathologists & Lab Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Dr. Amit Desai", specialization: "Clinical Pathology", exp: "17 years" },
                                { name: "Dr. Priya Nair", specialization: "Microbiology", exp: "15 years" },
                                { name: "Dr. Rohit Verma", specialization: "Biochemistry", exp: "14 years" }
                            ].map((doc, i) => (
                                <div key={i} className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-lime-600">
                                    <Users size={40} className="text-lime-600 mb-4" />
                                    <h3 className="text-xl font-black text-gray-900 mb-2">{doc.name}</h3>
                                    <p className="text-lime-600 font-bold mb-2">{doc.specialization}</p>
                                    <p className="text-gray-600 font-medium">Experience: {doc.exp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-lime-900 to-lime-700 text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-black mb-6">Book Your Lab Tests Online</h2>
                        <p className="text-lime-100 mb-8 text-lg font-medium">Home sample collection available or visit our lab center</p>
                        <button className="px-10 py-4 bg-white text-lime-900 rounded-xl font-black text-lg hover:bg-lime-50">Book Tests Now</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
