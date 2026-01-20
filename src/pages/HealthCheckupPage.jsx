import { useState } from 'react';
import { Search, ChevronDown, MapPin, Star, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HealthCheckupPage() {
    const categories = [
        { name: 'Recommended', price: '3000' },
        { name: 'Cancer Screening', price: '799' },
        { name: 'Diabetes', price: '999' },
        { name: 'General Health', price: '786' },
        { name: 'Heart', price: '300' },
        { name: 'Senior Citizen', price: '3000' },
        { name: 'Special', price: '2' },
        { name: 'Women', price: '1800' },
    ];

    const packages = [
        {
            name: 'Basic Health Package-female',
            testsCount: 14,
            tests: [
                'BLOOD UREA NITROGEN, SERUM (1079H-SRL)',
                'ALANINE AMINOTRANSFERASE, SERUM (1347H-SRL)',
                'CREATININE, SERUM (1320H-SRL)'
            ],
            location: 'Fortis Okhla',
            price: '3000',
            tag: 'Recommended'
        },
        {
            name: 'Basic Health Package-male',
            testsCount: 11,
            tests: [
                'BLOOD UREA NITROGEN, SERUM (1079H-SRL)',
                'ALANINE AMINOTRANSFERASE, SERUM (1347H-SRL)',
                'CREATININE, SERUM (1320H-SRL)'
            ],
            location: 'Fortis Okhla',
            price: '3000',
            tag: 'Recommended'
        },
        {
            name: 'Bronze Health Package-female',
            testsCount: 19,
            tests: [
                'CALCIUM, SERUM (4836H-SRL)',
                'LIVER FUNCTION PROFILE, SERUM (1388-SRL)',
                'BLOOD UREA NITROGEN, SERUM (1079H-SRL)'
            ],
            location: 'Fortis Okhla',
            price: '5300',
            tag: 'Recommended'
        },
        {
            name: 'Bronze Health Package-male',
            testsCount: 19,
            tests: [
                'CALCIUM, SERUM (4836H-SRL)',
                'LIVER FUNCTION PROFILE, SERUM (1388-SRL)',
                'BLOOD UREA NITROGEN, SERUM (1079H-SRL)'
            ],
            location: 'Fortis Okhla',
            price: '5300',
            tag: 'Recommended'
        },
        {
            name: 'Gold Health Package-female',
            testsCount: 15,
            tests: [
                'CALCIUM, SERUM (4836H-SRL)',
                'TREAD MILL TEST ( TMT )',
                'PHOSPHORUS, SERUM (1591H-SRL)'
            ],
            location: 'Fortis Okhla',
            price: '14900',
            tag: 'Recommended'
        },
        {
            name: 'Gold Health Package-male',
            testsCount: 17,
            tests: [
                'CALCIUM, SERUM (4836H-SRL)',
                'BLOOD UREA NITROGEN, SERUM (1079H-SRL)',
                'TREAD MILL TEST ( TMT )'
            ],
            location: 'Fortis Okhla',
            price: '14400',
            tag: 'Recommended'
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4 lg:px-10">

                    {/* Search & Filter Section */}
                    <div className="mb-16 space-y-10">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search By Packages"
                                className="w-full h-16 pl-8 pr-16 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-gray-700"
                            />
                            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" size={24} />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <h2 className="text-3xl font-medium text-gray-800">Find Checkup By Hospital</h2>
                            <div className="flex gap-4">
                                <div className="relative w-full md:w-80">
                                    <select className="w-full h-14 px-6 border border-gray-200 rounded-xl appearance-none bg-white text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer">
                                        <option>Filter by Hospital</option>
                                        <option>Fortis Okhla</option>
                                        <option>Fortis Gurgaon</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                </div>
                                <button className="h-14 px-10 bg-[#F3DCD5] hover:bg-[#EBD2CB] text-gray-800 font-bold rounded-xl whitespace-nowrap transition-colors">
                                    Find Checkup
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Categories</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {categories.map((cat, i) => (
                                <div key={i} className="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer overflow-hidden text-center">
                                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                                    <h4 className="font-bold text-gray-800 mb-2 relative z-10">{cat.name}</h4>
                                    <p className="text-sm text-gray-500 relative z-10">Starting from ₹ {cat.price}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Health Packages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {packages.map((pkg, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden">
                                <div className="p-8 pb-4">
                                    <span className="inline-block bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-4 italic">
                                        {pkg.tag}
                                    </span>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                                    <p className="text-gray-400 text-xs font-bold mb-6">{pkg.testsCount} tests included</p>

                                    <ul className="space-y-4 mb-8">
                                        {pkg.tests.map((test, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[11px] font-bold text-gray-600 group">
                                                <span className="text-purple-400 mt-0.5 transition-transform group-hover:translate-x-1">›</span>
                                                <span className="leading-relaxed">{test}</span>
                                            </li>
                                        ))}
                                        <li className="text-[11px] font-bold text-purple-400 hover:text-purple-600 cursor-pointer underline underline-offset-4">
                                            +{pkg.testsCount - pkg.tests.length} More
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto border-t border-gray-100 p-8 flex flex-col space-y-6">
                                    <div className="flex justify-between items-center text-gray-800">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={22} />
                                            <span className="font-black text-sm">{pkg.location}</span>
                                        </div>
                                        <span className="text-xl font-black">₹ {pkg.price}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="flex-1 py-3 border-2 border-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                            View Details
                                        </button>
                                        <button className="flex-1 py-3 bg-[#F3DCD5] hover:bg-[#EBD2CB] text-gray-800 font-bold rounded-xl transition-colors">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Inquiry Form Section */}
                    <section className="bg-white border-t border-gray-100 pt-20 mb-24">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-medium text-gray-800 mb-12">Let us help you find the right package</h2>
                            <form className="bg-white p-10 rounded-3xl shadow-xl border border-gray-50 space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">First Name<span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Last Name<span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
                                        <input required type="tel" className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Email<span className="text-red-500">*</span></label>
                                        <input required type="email" className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Hospital Name<span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select required className="w-full px-6 py-4 border border-gray-200 rounded-xl appearance-none bg-white text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer">
                                            <option>-Select Hospital-</option>
                                            <option>Fortis Okhla</option>
                                            <option>Fortis Gurgaon</option>
                                        </select>
                                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Comments</label>
                                    <textarea rows="4" className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition-all font-medium resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full py-5 bg-[#F3DCD5] hover:bg-[#EBD2CB] text-gray-800 font-bold rounded-2xl transition-all shadow-md active:scale-[0.98]">
                                    Request a Call Back
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Testimonial Form Section */}
                    <section className="bg-gray-50 rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -mr-32 -mt-32 opacity-20"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/2 space-y-6">
                                <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase">Feedback</span>
                                <h2 className="text-4xl font-black text-gray-900 leading-tight">Share Your Experience With Us</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Your feedback helps us provide better care and services. Share your thoughts and help others make informed healthcare decisions.
                                </p>
                                <div className="flex gap-4 items-center pt-4">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star key={star} size={32} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                    <span className="font-bold text-gray-400 ml-2">4.9/5 from 5,000+ Patients</span>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <form className="bg-white p-10 rounded-3xl shadow-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Your Full Name</label>
                                        <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-600 transition-all font-medium" placeholder="E.g. John Doe" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-gray-700">Your Rating</label>
                                        <div className="flex gap-4">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <button key={star} type="button" className="p-2 hover:scale-110 transition-all">
                                                    <Star size={32} className="text-gray-200 hover:text-yellow-400 fill-current" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Write Your Feedback</label>
                                        <textarea required rows="4" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-600 transition-all font-medium resize-none" placeholder="How was your experience?"></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-5 bg-green-700 hover:bg-green-800 text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3">
                                        Submit Feedback <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
