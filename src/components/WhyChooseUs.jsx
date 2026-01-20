import { Bot, Brain, Microscope, Smartphone, Check } from 'lucide-react';

const techFeatures = [
    { title: "Robotic Surgery", desc: "Minimally invasive precision.", icon: <Bot size={36} className="text-blue-600" /> },
    { title: "AI Diagnostics", desc: "Early detection with 99% accuracy.", icon: <Brain size={36} className="text-purple-600" /> },
    { title: "Hybrid Cath Lab", desc: "Advanced intervention facilities.", icon: <Microscope size={36} className="text-teal-600" /> },
    { title: "Tele-Cardiology", desc: "Remote monitoring & care.", icon: <Smartphone size={36} className="text-emerald-600" /> },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {techFeatures.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-md border hover:border-brand-green/30 hover:shadow-lg transition-all">
                                    <div className="mb-4">{item.icon}</div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-brand-green font-bold uppercase tracking-wider mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Advanced Technology Meets <span className="text-brand-green">Human Care</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We don't just treat symptoms; we care for the person. Combining the latest in medical technology with a compassionate, patient-first approach, we ensure the best possible outcomes for every heart we treat.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "JCI Accredited Facility",
                                "Top 10 Ranked Cardiac Centre",
                                "Affordable & Transparent Pricing",
                                "Holistic Recovery Programs"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <Check size={20} className="text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
