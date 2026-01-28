import { Link } from 'react-router-dom';
import { Search, ChevronDown, MapPin, Phone, Calendar, Stethoscope, Menu, X, UserRoundSearch, TrendingUp, Info, Briefcase, HeartHandshake, Headset, Building2, Activity, Award, Newspaper, BriefcaseMedical, User } from 'lucide-react';
import { useState } from 'react';
import RequestCallbackModal from './RequestCallbackModal';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);

    // Extracted Constants
    const DEPARTMENTS_MENU = [
        { name: "Cardiology", path: "/department/cardiology" },
        { name: "Orthopedics", path: "/department/orthopedics" },
        { name: "Neurology", path: "/department/neurology" },
        { name: "Pediatrics", path: "/department/pediatrics" },
        { name: "Oncology", path: "/department/oncology" },
        { name: "Gastroenterology", path: "/department/gastroenterology" },
        { name: "Gynecology", path: "/department/gynecology" },
        { name: "ICU & Critical Care", path: "/department/icu" },
        { name: "Laboratory", path: "/department/laboratory" }
    ];

    const SPECIALTIES_MENU = [
        { title: "Cardiac Sciences" },
        { title: "Thoracic Surgery" },
        { title: "Interventional Cardiology" },
        { title: "Pediatric Cardiology" },
        { title: "Cardiac Anaesthesia" },
        { title: "Vascular Surgery" },
        { title: "Heart Transplant" },
        { title: "Critical Care" },
        { title: "Emergency and Trauma" }
    ];


    return (

        <header className="w-full bg-white font-sans ">

            <RequestCallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
            {/* Top Bar */}
            <div className="border-b border-gray-100 hidden lg:block bg-[#F8F9FA]">
                <div className="container mx-auto px-4 lg:px-10 flex justify-end items-center pt-0.5 pb-0  gap-6 text-[12px] text-gray-600 font-semibold tracking-wide">
                    <nav className="flex gap-6">
                        <Link to="/doctors" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                            <UserRoundSearch size={14} /> Find a Doctor
                        </Link>

                        {/* 
                        <Link to="/investors" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                            <TrendingUp size={14} /> Investors
                        </Link> */}


                        <Link to="/about" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                            <Info size={14} /> About us
                        </Link>

                        {/* 
                        <Link to="/careers" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                            <Briefcase size={14} /> Careers
                        </Link> */}


                        <Link to="/csr" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                            <HeartHandshake size={14} /> CSR
                        </Link>
                        <Link to="/contact" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                            <Headset size={14} /> Contact us
                        </Link>
                    </nav>
                    <div className="flex items-center gap-2 border-l border-gray-200 pl-6 cursor-pointer hover:text-green-700 transition-colors">
                        <MapPin size={16} />
                        <a
                            href="https://www.google.com/maps/place/Vartika+Aarna+Heart+Care+and+Multispeciality+Hospital/@26.730303,83.419444,17z/data=!3m1!4b1!4m6!3m5!1s0x39915d0059e69317:0x5075631405e3532c!8m2!3d26.730303!4d83.419444!16s%2Fg%2F11wsm_z0_?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 font-bold truncate max-w-[200px]"
                            title="Plot No. A-67, Near Vardayani Hospital, Deoria Bypass Road, Taramandal, Gorakhpur, Uttar Pradesh - 273001"
                        >
                            Gorakhpur
                        </a>
                    </div>
                    <div className="flex items-center gap-4 border-l border-gray-200 pl-6">

                        <Link to="/emergency" className="relative group">
                            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center cursor-pointer group-hover:bg-red-600 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-500 overflow-hidden">
                                <span className="text-xl group-hover:scale-125 transition-transform duration-500">🚑</span>
                            </div>







                            {/* Mobile tooltip style indicator */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-black pointer-events-none whitespace-nowrap">
                                EMERGENCY
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Middle Bar (Logo & Nav) */}

            <div className="container mx-auto px-4 lg:px-10 py-1 flex justify-between items-center relative">
                {/* Logo Section */}


                <div className="flex items-center gap-6 px-1 py-0">

                    {/* Logo + Name Wrapper */}
                    <Link to="/" className="flex flex-col items-center text-center flex-shrink-0">

                        {/* Logo */}
                        <img
                            src="/logo.png"
                            alt="Vartika Aarna Hospital Logo"
                            className="h-[170px] w-[170px] object-contain"
                        />

                        {/* Hospital Name */}
                        {/* <span className="mt-2 text-lg md:text-xl font-bold text-[#008542] leading-snug max-w-[320px]">
            Vartika Aarna Heart Care and Multispeciality Hospital
        </span> */}

                    </Link>

                </div>










                {/* Main Nav Items */}
                <nav className="hidden xl:flex items-center gap-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">
                    {/* Departments Mega Menu */}
                    <div className="relative group/mega pb-1">
                        <Link to="/departments" className="flex items-center gap-1 group-hover/mega:text-green-700 transition-all">
                            <Building2 size={16} />
                            <span>Departments</span> <ChevronDown size={14} className="group-hover/mega:rotate-180 transition-transform" />
                        </Link>

                        {/* Mega Menu Content */}


                        <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-[#E67E61] opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 z-[100]">
                            <div className="py-2 flex flex-col">
                                {DEPARTMENTS_MENU.map((dept, idx) => (
                                    <Link
                                        key={idx}
                                        to={dept.path}
                                        className="block px-6 py-2 text-[13px] font-bold text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                                    >
                                        {dept.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Specialities Mega Menu */}
                    <div className="relative group/specialty pb-1">
                        <Link to="/specialities" className="flex items-center gap-1 group-hover/specialty:text-green-700 transition-all">
                            <Activity size={16} />
                            <span>Specialties</span> <ChevronDown size={14} className="group-hover/specialty:rotate-180 transition-transform" />
                        </Link>

                        {/* Mega Menu Content */}
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-[#E67E61] opacity-0 invisible group-hover/specialty:opacity-100 group-hover/specialty:visible transition-all duration-300 z-[100]">
                            <div className="py-2 flex flex-col">
                                {SPECIALTIES_MENU.map((spec, idx) => (
                                    <Link
                                        key={idx}
                                        to="/specialities"
                                        className="block px-6 py-2 text-[13px] font-bold text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                                    >
                                        {spec.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


                    <Link to="/centre-of-excellence" className="flex items-center gap-1 cursor-pointer hover:text-green-700 pb-1">
                        <Award size={16} />
                        <span>Centre of Excellence</span>
                    </Link>
                    <Link to="/blog" className="flex items-center gap-1 cursor-pointer hover:text-green-700 pb-1">
                        <Newspaper size={16} />
                        <span>Media Centre</span>
                    </Link>


                    {/* Medical Services Dropdown */}
                    <div className="relative group/medical cursor-pointer pb-1">
                        <div className="flex items-center gap-1 group-hover/medical:text-green-700 transition-all">
                            <BriefcaseMedical size={16} />
                            <span>Medical Services</span> <ChevronDown size={14} className="group-hover/medical:rotate-180 transition-transform" />
                        </div>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-[#E67E61] opacity-0 invisible group-hover/medical:opacity-100 group-hover/medical:visible transition-all duration-300 z-50">
                            <div className="py-2">
                                <Link to="/medical-procedures" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Medical Procedures</Link>
                                <Link to="/immigration-services" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Immigration Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative group cursor-pointer pb-1">
                        <div className="flex items-center gap-1 group-hover:text-green-700">
                            <User size={16} />
                            <span>Patient Corner</span> <ChevronDown size={14} />
                        </div>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-[#E67E61] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className="py-2">
                                <Link to="/blog" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Blogs</Link>
                                <Link to="/resources" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Podcasts</Link>
                                <Link to="/resources" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Patient Information Literature</Link>
                                <Link to="/testimonials" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Patient Stories</Link>
                                <Link to="/blog" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 font-medium transition-colors">Breakthrough Cases</Link>
                            </div>
                        </div>
                    </div>
                    {/* <Link to="/international" className="cursor-pointer hover:text-green-700 pb-1">
                        <span>International Section</span>
                    </Link> */}
                </nav>
                {/* Mobile Menu Toggle */}
                <button
                    className="xl:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Action Bar (Pink Background) */}
            <div className="bg-[#FAF3F0] w-full py-1 shadow-sm">
                <div className="container mx-auto px-4 lg:px-10 flex flex-wrap justify-center lg:justify-end items-center gap-4 md:gap-8 text-[13px] font-bold text-gray-800">
                    <div
                        onClick={() => setIsCallbackOpen(true)}
                        className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors"
                    >
                        <Phone size={18} className="transform rotate-12" />
                        <span>Request a Callback</span>
                    </div>

                    <Link
                        to="/book-appointment/1"
                        className="bg-[#E67E61] text-white px-5 py-1.5 rounded-md flex items-center gap-2 cursor-pointer hover:bg-orange-700 transition-all shadow-sm"
                    >
                        <Calendar size={16} />
                        <span>Book Appointment</span>
                    </Link>

                    <Link
                        to="/health-checkup"
                        className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors"
                    >
                        <Stethoscope size={20} />
                        <span>Get Health Checkup</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="xl:hidden fixed inset-0 z-[200] bg-white animate-in slide-in-from-right duration-300 flex flex-col">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white sticky top-0 z-10">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                            <img
                                src="/logo.png"
                                alt="Vartika Aarna Hospital Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-gray-500 hover:text-red-500 bg-gray-50 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <nav className="flex flex-col gap-1 text-[13px] font-bold text-gray-700">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 border-b border-gray-50 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">Home</Link>

                            {/* Departments Mobile Accordion */}
                            <div className="border-b border-gray-50">
                                <details className="group">
                                    <summary className="flex justify-between items-center py-2 px-2 cursor-pointer list-none hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                                        <span>Departments</span>
                                        <ChevronDown size={14} className="transform group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="pl-4 pb-2 flex flex-col gap-1 text-[12px] text-gray-600">
                                        {DEPARTMENTS_MENU.map((dept, idx) => (
                                            <Link
                                                key={idx}
                                                to={dept.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="py-1.5 px-2 hover:text-green-700 hover:bg-green-50 rounded-md block"
                                            >
                                                {dept.name}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            {/* Specialties Mobile Accordion */}
                            <div className="border-b border-gray-50">
                                <details className="group">
                                    <summary className="flex justify-between items-center py-2 px-2 cursor-pointer list-none hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                                        <span>Specialties</span>
                                        <ChevronDown size={14} className="transform group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="pl-4 pb-2 flex flex-col gap-1 text-[12px] text-gray-600">
                                        {SPECIALTIES_MENU.map((spec, idx) => (
                                            <Link
                                                key={idx}
                                                to="/specialities"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="py-1.5 px-2 hover:text-green-700 hover:bg-green-50 rounded-md block"
                                            >
                                                {spec.title}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            <Link to="/centre-of-excellence" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 border-b border-gray-50 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">Centre of Excellence</Link>
                            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 border-b border-gray-50 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">Media Centre</Link>

                            {/* Medical Services Mobile Accordion */}
                            <div className="border-b border-gray-50">
                                <details className="group">
                                    <summary className="flex justify-between items-center py-2 px-2 cursor-pointer list-none hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                                        <span>Medical Services</span>
                                        <ChevronDown size={14} className="transform group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="pl-4 pb-2 flex flex-col gap-1 text-[12px] text-gray-600">
                                        <Link to="/medical-procedures" onClick={() => setIsMenuOpen(false)} className="py-1.5 px-2 hover:bg-green-50 hover:text-green-700 rounded-md block">Medical Procedures</Link>
                                        <Link to="/immigration-services" onClick={() => setIsMenuOpen(false)} className="py-1.5 px-2 hover:bg-green-50 hover:text-green-700 rounded-md block">Immigration Services</Link>
                                    </div>
                                </details>
                            </div>

                            {/* Patient Corner Mobile Accordion */}
                            <div className="border-b border-gray-50">
                                <details className="group">
                                    <summary className="flex justify-between items-center py-2 px-2 cursor-pointer list-none hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                                        <span>Patient Corner</span>
                                        <ChevronDown size={14} className="transform group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="pl-4 pb-2 flex flex-col gap-1 text-[12px] text-gray-600">
                                        <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="py-1.5 px-2 hover:bg-green-50 hover:text-green-700 rounded-md block">Blogs</Link>
                                        <Link to="/resources" onClick={() => setIsMenuOpen(false)} className="py-1.5 px-2 hover:bg-green-50 hover:text-green-700 rounded-md block">Podcasts</Link>
                                        <Link to="/testimonials" onClick={() => setIsMenuOpen(false)} className="py-1.5 px-2 hover:bg-green-50 hover:text-green-700 rounded-md block">Patient Stories</Link>
                                    </div>
                                </details>
                            </div>

                            <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 border-b border-gray-50 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">Find a Doctor</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 border-b border-gray-50 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">About Us</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 border-b border-gray-50 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

function SpecialtyLink({ title, icon, highlighted }) {
    return (
        <Link
            to="/specialities"
            className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all group/s ${highlighted ? 'bg-[#FAF3F0] text-[#E67E61]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
        >
            <div className="flex items-center gap-3">
                {icon && <span className="text-lg">{icon}</span>}
                <span className="text-[12px] font-bold">{title}</span>
            </div>
            <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover/s:opacity-100 transition-opacity" />
        </Link>
    );
}