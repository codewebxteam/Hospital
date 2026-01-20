import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Clock, MapPin, ShieldAlert, Zap, HeartPulse, ClipboardList } from 'lucide-react';

export default function EmergencyPage() {
    const emergencyContacts = [
        { label: "Emergency Hotline", phone: "1066", icon: <Phone className="text-red-600" /> },
        { label: "Ambulance Services", phone: "9205 010 101", icon: <HeartPulse className="text-red-500" /> },
        { label: "ER Front Desk", phone: "+91-124 4921021", icon: <ShieldAlert className="text-blue-600" /> }
    ];

    const erServices = [
        {
            title: "24/7 Trauma Care",
            desc: "Immediate medical attention for critical injuries and accidents.",
            icon: <Zap size={32} className="text-yellow-500" />
        },
        {
            title: "Cardiac Emergency",
            desc: "Specialized ER for rapid response to chest pain and heart attacks.",
            icon: <HeartPulse size={32} className="text-red-600" />
        },
        {
            title: "Advanced Life Support",
            desc: "Fully equipped ambulances with ventilators and expert paramedics.",
            icon: <ShieldAlert size={32} className="text-blue-600" />
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <Header />

            <main className="flex-grow">
                {/* Emergency Hero */}
                <section className="bg-red-700 text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform scale-150 rotate-12">
                        <ShieldAlert size={400} />
                    </div>
                    <div className="container mx-auto px-4 lg:px-10 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 bg-red-800 px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider">
                                <Clock size={16} /> 24x7 Critical Care Available
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                                Medical Emergency? <br /> We're here.
                            </h1>
                            <p className="text-xl md:text-2xl text-red-100 font-medium max-w-2xl leading-relaxed">
                                Our Emergency Response Teams are trained to handle critical situations with precision and speed, 24 hours a day.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Immediate Contacts Bar */}
                <section className="container mx-auto px-4 lg:px-10 -mt-12 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {emergencyContacts.map((contact, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-6 group hover:shadow-red-900/10 transition-all">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-red-50 transition-colors">
                                    {contact.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{contact.label}</p>
                                    <p className="text-2xl font-black text-gray-900">{contact.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Specialized ER Services */}
                <section className="py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">World-Class Emergency Services</h2>
                            <p className="text-gray-500 font-medium text-lg">Every second counts. Our ER is equipped for immediate intervention.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {erServices.map((service, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="bg-gray-900 text-white py-24">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black leading-tight">What to expect in <br /> an Emergency?</h2>
                                <div className="space-y-6">
                                    <ProcessStep
                                        num="01"
                                        title="Rapid Triage"
                                        desc="Patients are assessed immediately upon arrival based on the severity of their condition."
                                    />
                                    <ProcessStep
                                        num="02"
                                        title="Sustained Intervention"
                                        desc="Immediate resuscitative measures are started by our team of emergency specialists."
                                    />
                                    <ProcessStep
                                        num="03"
                                        title="Specialized Referral"
                                        desc="Transfer to surgery or specialized critical care units for definitive treatment."
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                            <ShieldAlert size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold">Important Information</h3>
                                    </div>
                                    <ul className="space-y-4 text-gray-400 font-medium">
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0"></div>
                                            Always carry your identity proof and medical history if possible.
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0"></div>
                                            Do not wait for symptoms to worsen; early intervention is key.
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0"></div>
                                            Emergency admissions do not require prior appointments.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function ProcessStep({ num, title, desc }) {
    return (
        <div className="flex gap-8 group">
            <span className="text-4xl font-black text-red-600 opacity-50 group-hover:opacity-100 transition-opacity leading-none">{num}</span>
            <div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
