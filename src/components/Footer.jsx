import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Apple, PlayCircle } from 'lucide-react';

export default function Footer() {
    const footerSections = [
        {
            title: "For Patients",
            links: ["Find a Doctor", "Health Check Packages", "Patient Testimonials", "Immigration Services", "Partnerships", "Sustainability"]
        },
        {
            title: "Centers of Excellence",
            links: ["Cardiology", "Oncology", "Neurology", "Gastroenterology", "Orthopaedics", "Emergency Care"]
        },
        {
            title: "Policies",
            links: ["Privacy Policy", "Online Payment & Refund Policy", "Terms & Conditions", "Anti-Bribery Policy", "Gifting Policy", "Teleconsultation"]
        },
        {
            title: "Medical Procedures",
            links: ["Car-T Cell Therapy", "Gamma Knife Radiosurgery", "HIPEC Surgery", "ECMO", "Bypass Surgery", "Angioplasty"]
        },
        {
            title: "Specialities",
            links: ["Bone Marrow Transplant", "Kidney Transplant", "Liver Transplant", "Robotic Surgery", "Urology", "Pulmonology"]
        },
        {
            title: "Our Hospital",
            links: ["Delhi/NCR", "Mumbai", "Bangalore", "Chennai", "Kolkata", "International Locations"]
        }
    ];

    return (
        <footer className="bg-[#EEF8F5] py-20 font-sans border-t border-gray-200">
            <div className="container mx-auto px-4 lg:px-10">
                {/* 6-Column Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-20">
                    {footerSections.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="text-[13px] font-black text-[#221E20] uppercase tracking-widest mb-6 px-1">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link to="#" className="text-[#221E20] text-sm font-bold hover:text-green-700 transition-colors block px-1">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Branding & Social */}
                    <div className="flex flex-col items-center lg:items-start space-y-8 max-w-sm text-center lg:text-left">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 border-2 border-green-600 rounded-sm">
                                <span className="text-green-600 font-black">+</span>
                            </div>
                            <span className="text-lg font-black text-gray-900 leading-tight uppercase tracking-tighter">
                                Vartika Aarna Healthcare
                            </span>
                        </Link>

                        <div className="space-y-4">
                            <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Stay in Touch</p>
                            <div className="flex gap-4">
                                <SocialIcon icon={<Instagram size={20} />} />
                                <SocialIcon icon={<Facebook size={20} />} />
                                <SocialIcon icon={<Twitter size={20} />} />
                                <SocialIcon icon={<Youtube size={20} />} />
                            </div>
                        </div>
                    </div>

                    {/* App Badges */}
                    <div className="flex flex-col items-center lg:items-end space-y-6">
                        <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Download our mobile app</p>
                        <div className="flex gap-4">
                            <AppBadge icon={<Apple className="mb-1" />} store="App Store" />
                            <AppBadge icon={<PlayCircle className="mb-1" />} store="Google Play" />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-20 pt-8 border-t border-gray-100/50 text-center">
                    <p className="text-[12px] font-bold text-gray-400">
                        © {new Date().getFullYear()} Vartika Aarna Healthcare. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#E67E61] hover:text-white hover:border-[#E67E61] transition-all">
            {icon}
        </a>
    );
}

function AppBadge({ icon, store }) {
    return (
        <a href="#" className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-all border border-gray-800 group">
            <div className="group-hover:scale-110 transition-transform">{icon}</div>
            <div className="text-left">
                <p className="text-[8px] uppercase font-bold leading-none mb-1 opacity-70">Download on the</p>
                <p className="text-[14px] font-black leading-none">{store}</p>
            </div>
        </a>
    );
}
