import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export default function CareersPage() {
    const jobs = [
        { role: "Consultant - Cardiology", location: "Gurgaon", type: "Full-time" },
        { role: "Staff Nurse (ICU)", location: "Delhi", type: "Full-time" },
        { role: "Operations Manager", location: "Mumbai", type: "Full-time" },
        { role: "Radiology Technician", location: "Ludhiana", type: "Full-time" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#008C44] text-white py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-10">
                        <span className="bg-white/20 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-6 inline-block">Join Our Pulse</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6">Build Your Career <br />in Healthcare</h1>
                        <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
                            Join a team of compassionate medical professionals and administrators dedicated to saving lives and advancing medical science.
                        </p>
                    </div>
                </div>

                {/* Why Join Us */}
                <div className="container mx-auto px-4 lg:px-10 py-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Work with Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Compassion", desc: "Patient care is at the heart of everything we do.", icon: <Heart /> },
                            { title: "Innovation", desc: "Access to state-of-the-art medical technology.", icon: <Lightbulb /> },
                            { title: "Growth", desc: "Continuous learning and professional development.", icon: <TrendingUp /> },
                            { title: "Diversity", desc: "A vibrant multicultural work environment.", icon: <Briefcase /> }
                        ].map((benefit, i) => (
                            <div key={i} className="text-center p-6 border border-gray-50 rounded-3xl hover:bg-gray-50 transition-colors">
                                <div className="text-[#008C44] mb-6 flex justify-center scale-150">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Current Openings */}
                <div className="bg-gray-50 py-20 mb-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
                            <button className="bg-[#008C44] text-white font-bold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors shadow-md">
                                Search All Jobs
                            </button>
                        </div>

                        <div className="space-y-4">
                            {jobs.map((job, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                                        <p className="text-gray-500 font-medium">📍 {job.location} • {job.type}</p>
                                    </div>
                                    <button className="mt-4 md:mt-0 px-8 py-2 border-2 border-gray-100 text-[#008C44] font-bold rounded-lg hover:bg-[#008C44] hover:border-[#008C44] hover:text-white transition-all">
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
