import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Heart, ShieldCheck, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[#E8F3F0]">
                        {/* Decorative Diamond Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.15]"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 lg:px-10 relative z-10">
                        <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl border border-white/50 max-w-2xl text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                                Vartika Aarna Healthcare
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-green-700 mb-6">
                                Leading Integrated Healthcare Services Provider in India
                            </p>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                We are committed to clinical excellence and distinctive patient care across our network of world-class hospitals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="container mx-auto px-4 lg:px-10 -mt-12 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <StatCard
                            bg="bg-[#F0F4FF]"
                            icon={<ShieldCheck className="text-blue-600" />}
                            title="4 JCI & 26 NABH"
                            label="Accredited Hospitals"
                        />
                        <StatCard
                            bg="bg-[#FFF8F0]"
                            icon={<TrendingUp className="text-orange-600" />}
                            title="33"
                            label="Healthcare Facilities"
                        />
                        <StatCard
                            bg="bg-[#F0FFF4]"
                            icon={<Users className="text-green-600" />}
                            title="5,700+"
                            label="Operational Beds"
                        />
                        <StatCard
                            bg="bg-[#FEF2F2]"
                            icon={<Users className="text-red-600" />}
                            title="12,500+"
                            label="Healthcare Professionals"
                        />
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <VisionMissionCard
                                icon={<Eye size={40} className="text-blue-600" />}
                                title="Our Vision"
                                desc="To be a global leader in healthcare through quality and clinical excellence."
                            />
                            <VisionMissionCard
                                icon={<Target size={40} className="text-green-600" />}
                                title="Our Mission"
                                desc="To be the most preferred healthcare provider through clinical excellence and distinctive patient care."
                            />
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-24 bg-[#F8F9FA] border-y border-gray-100">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-16 px-4">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            <ValueCard
                                title="Patient Centricity"
                                desc="Commit to 'best outcomes and experience' for our patients."
                                icon={<Heart />}
                            />
                            <ValueCard
                                title="Integrity"
                                desc="Be principled, open and honest in all our dealings."
                                icon={<ShieldCheck />}
                            />
                            <ValueCard
                                title="Teamwork"
                                desc="Proactively support each other and operate as one team."
                                icon={<Users />}
                            />
                            <ValueCard
                                title="Ownership"
                                desc="Be responsible and take pride in our actions."
                                icon={<Target />}
                            />
                            <ValueCard
                                title="Innovation"
                                desc="Continuously improve and innovate to exceed expectations."
                                icon={<Lightbulb />}
                            />
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-16 text-center">Our Leadership</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[1, 2, 3, 4].map(id => (
                                <div key={id} className="text-center group">
                                    <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-green-100 transition-colors bg-gray-100">
                                        <img
                                            src={`https://i.pravatar.cc/300?img=${id + 10}`}
                                            alt="Leader"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900">Dr. Vivek Sharma</h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Chairman</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function StatCard({ bg, icon, title, label }) {
    return (
        <div className={`${bg} p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform`}>
            <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-1">{title}</h4>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</p>
        </div>
    );
}

function VisionMissionCard({ icon, title, desc }) {
    return (
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all">
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-lg max-w-md">{desc}</p>
        </div>
    );
}

function ValueCard({ title, desc, icon }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-green-600 mb-6 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                {icon}
            </div>
            <h4 className="font-black text-gray-900 mb-3">{title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">{desc}</p>
        </div>
    );
}
