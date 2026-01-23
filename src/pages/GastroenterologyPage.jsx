import Header from '../components/Header';
import Footer from '../components/Footer';
import { Utensils, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GastroenterologyPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <button onClick={() => navigate('/departments')} className="mb-6 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 rounded-lg font-bold">← Back</button>
                        <h1 className="text-4xl md:text-6xl font-black mb-4">Gastroenterology Department</h1>
                        <p className="text-xl text-emerald-100 font-medium">Expert digestive system care</p>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-black mb-6 text-gray-900">About Gastroenterology</h2>
                                <p className="text-lg text-gray-700 mb-4">Our Gastroenterology Department specializes in diagnosis and treatment of digestive system disorders with advanced endoscopic procedures.</p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-600">
                                <Utensils size={48} className="text-emerald-600 mb-4" />
                                <h3 className="text-2xl font-black text-gray-900 mb-4">Services</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><span className="text-emerald-600 font-black">✓</span><span className="text-gray-700 font-medium">Endoscopy & Colonoscopy</span></li>
                                    <li className="flex items-start gap-3"><span className="text-emerald-600 font-black">✓</span><span className="text-gray-700 font-medium">ERCP Procedures</span></li>
                                    <li className="flex items-start gap-3"><span className="text-emerald-600 font-black">✓</span><span className="text-gray-700 font-medium">Liver Disease Management</span></li>
                                    <li className="flex items-start gap-3"><span className="text-emerald-600 font-black">✓</span><span className="text-gray-700 font-medium">Ulcer Treatment</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black mb-12 text-gray-900 text-center">Treatments Offered</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Acid Reflux", desc: "GERD management and treatment" },
                                { title: "Peptic Ulcer", desc: "Ulcer treatment and management" },
                                { title: "Irritable Bowel", desc: "IBS and inflammatory bowel disease" },
                                { title: "Liver Diseases", desc: "Hepatitis and cirrhosis management" },
                                { title: "Colon Cancer", desc: "Screening and early detection" },
                                { title: "Pancreatic Disorders", desc: "Pancreatitis and pancreatic care" }
                            ].map((service, i) => (
                                <div key={i} className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-black text-emerald-700 mb-3">{service.title}</h3>
                                    <p className="text-gray-700 font-medium">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl font-black mb-12 text-gray-900 text-center">Gastroenterologists</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Dr. Suresh Kumar", specialization: "Hepatology", exp: "19 years" },
                                { name: "Dr. Priya Iyer", specialization: "Endoscopy", exp: "16 years" },
                                { name: "Dr. Vikram Reddy", specialization: "IBD Specialist", exp: "14 years" }
                            ].map((doc, i) => (
                                <div key={i} className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-emerald-600">
                                    <Users size={40} className="text-emerald-600 mb-4" />
                                    <h3 className="text-xl font-black text-gray-900 mb-2">{doc.name}</h3>
                                    <p className="text-emerald-600 font-bold mb-2">{doc.specialization}</p>
                                    <p className="text-gray-600 font-medium">Experience: {doc.exp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl font-black mb-6">Schedule Your Appointment</h2>
                        <button className="px-10 py-4 bg-white text-emerald-900 rounded-xl font-black text-lg hover:bg-emerald-50">Book Consultation</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
