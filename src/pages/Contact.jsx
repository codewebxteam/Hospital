import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, ChevronRight, Globe, MessageSquare, Headphones, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [activeTab, setActiveTab] = useState('feedback');

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-[#FAF3F0] py-16 md:py-24 border-b border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10 flex flex-col items-center text-center">
                        <span className="text-[#E67E61] font-black uppercase tracking-widest text-xs mb-4">Support & Feedback</span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Contact us</h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium leading-relaxed">
                            For all types of queries, our support team is available 24/7 to assist you.
                        </p>
                    </div>
                </section>

                {/* Corporate Info Card Section */}
                <section className="container mx-auto px-4 lg:px-10 -mt-16 relative z-20 mb-16">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
                        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">

                            {/* Left: Branding & Main Contacts */}
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 border-2 border-green-600 rounded flex items-center justify-center text-green-600">
                                        <div className="text-2xl font-bold">+</div>
                                    </div>
                                    <h2 className="text-2xl font-black text-[#221E20]">Vartika Aarna Heart Care Ltd.</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 group-hover:bg-green-100 transition-colors">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[#221E20] leading-relaxed font-bold">
                                                Tower A, Unitech Business Park, Block - F, <br />
                                                South City 1, Sector - 41, Gurgaon, Haryana - 122001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 group-hover:bg-green-100 transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <p className="text-[#221E20] font-black">
                                            For Appointment Related Queries - <span className="text-green-700">9205 010 100</span>
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 group-hover:bg-green-100 transition-colors">
                                            <Building2Icon />
                                        </div>
                                        <p className="text-[#221E20] font-black">
                                            Corporate Office - <span className="text-gray-900 font-bold">+91-124 4921021 / +91-124 492 1041</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Email Grid */}
                            <div className="md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-16">
                                <EmailContact
                                    icon={<MessageSquare size={18} />}
                                    label="For feedback/complaints please write to:"
                                    email="feedback@vartikaaarna.com"
                                />
                                <EmailContact
                                    icon={<Headphones size={18} />}
                                    label="For general/business related queries contact:"
                                    email="reachus@vartikaaarna.com"
                                />
                                <EmailContact
                                    icon={<BarChart3 size={18} />}
                                    label="For investors related queries contact:"
                                    email="investor.relations@vartikaaarna.com"
                                />
                                <EmailContact
                                    icon={<Globe size={18} />}
                                    label="For international patient queries contact:"
                                    email="ips@vartikaaarna.com"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get in Touch Form Section */}
                <section className="bg-white py-20 border-t border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10 max-w-5xl">
                        <div className="mb-12">
                            <h2 className="text-4xl font-black text-gray-900 mb-8">Get in touch</h2>

                            {/* Tabs */}
                            <div className="flex border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab('feedback')}
                                    className={`px-8 py-4 font-black text-xs tracking-widest uppercase transition-all relative ${activeTab === 'feedback'
                                        ? 'text-white bg-[#E67E61] shadow-lg shadow-orange-900/10'
                                        : 'text-gray-400 hover:text-gray-600 bg-gray-50'
                                        }`}
                                >
                                    Feedback/ Complaints
                                    {activeTab === 'feedback' && (
                                        <span className="absolute bottom-0 left-0 w-full h-[4px] bg-orange-700"></span>
                                    )}
                                </button>
                                <button
                                    onClick={() => setActiveTab('queries')}
                                    className={`px-8 py-4 font-black text-xs tracking-widest uppercase transition-all relative ${activeTab === 'queries'
                                        ? 'text-white bg-[#E67E61] shadow-lg shadow-orange-900/10'
                                        : 'text-gray-400 hover:text-gray-600 bg-gray-50'
                                        }`}
                                >
                                    Queries
                                    {activeTab === 'queries' && (
                                        <span className="absolute bottom-0 left-0 w-full h-[4px] bg-orange-700"></span>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="bg-[#F8F9FA] p-8 md:p-12 rounded-xl border border-gray-100 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-[13px] font-black text-gray-900 mb-2">
                                            Type of {activeTab === 'feedback' ? 'Feedback' : 'Query'} <span className="text-red-500">*</span>
                                        </label>
                                        <select className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%20%2F%3E%3C%2Fsvg%3E')] transition-all">
                                            <option>Select Type</option>
                                            <option>General Inquiry</option>
                                            <option>Appointment Issue</option>
                                            <option>Service Feedback</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[13px] font-black text-gray-900 mb-2">First Name <span className="text-red-500">*</span></label>
                                        <input type="text" className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all" placeholder="Enter First Name" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-black text-gray-900 mb-2">Last Name <span className="text-red-500">*</span></label>
                                        <input type="text" className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all" placeholder="Enter Last Name" />
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-24">
                                            <label className="block text-[13px] font-black text-gray-900 mb-2">Country Code</label>
                                            <input type="text" value="+91" disabled className="w-full bg-gray-50 border-2 border-gray-100 rounded-lg px-4 py-3 text-sm text-gray-900 font-black text-center" />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-[13px] font-black text-gray-900 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                                            <input type="tel" className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all" placeholder="Enter Mobile Number" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[13px] font-black text-gray-900 mb-2">Email <span className="text-red-500">*</span></label>
                                        <input type="email" className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all" placeholder="Enter Email" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-[13px] font-black text-gray-900 mb-2">Hospitals <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%20%2F%3E%3C%2Fsvg%3E')] transition-all">
                                            <option>Select Hospital</option>
                                            <option>Vartika Aarna - Gurgaon</option>
                                            <option>Vartika Aarna - Delhi</option>
                                            <option>Vartika Aarna - Mumbai</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-[13px] font-black text-gray-900 mb-2">{activeTab === 'feedback' ? 'Feedback' : 'Query'} <span className="text-red-500">*</span></label>
                                        <textarea rows="4" className="w-full bg-white border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all" placeholder={`Enter your ${activeTab}`}></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="bg-green-700 text-white px-10 py-3 rounded-lg font-black text-xs tracking-widest uppercase hover:bg-green-800 shadow-lg shadow-green-900/10 transition-all">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function EmailContact({ icon, label, email }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#E67E61]/5 group-hover:text-[#E67E61] group-hover:border-[#E67E61]/20 transition-all">
                {icon}
            </div>
            <div className="space-y-1">
                <p className="text-[11px] font-black text-[#E67E61] uppercase tracking-widest">{label}</p>
                <a href={`mailto:${email}`} className="text-[#221E20] font-black hover:text-green-700 transition-colors block leading-tight text-sm">
                    {email}
                </a>
            </div>
        </div>
    );
}

function Building2Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12h12" /><path d="M6 7h12" /><path d="M6 17h12" /><path d="M10 22v-4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v4" />
        </svg>
    );
}
