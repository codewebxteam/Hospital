import { Link } from 'react-router-dom';
import { Search, ChevronDown, MapPin, Phone, Calendar, Stethoscope, Menu, X } from 'lucide-react';
import { useState } from 'react';
import RequestCallbackModal from './RequestCallbackModal';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("--Select--");

    const locations = ["Gurgaon", "Delhi", "Mumbai", "Bangalore", "Chennai"];

    const [activeRegion, setActiveRegion] = useState("North India");
    const [activeState, setActiveState] = useState("Delhi");

    const hospitalData = {
        "North India": {
            "Delhi": ["Fortis Cancer Institute, Defence Colony", "Fortis CDOC, Chirag Enclave", "Fortis Escorts Heart Institute, Okhla", "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj", "Fortis Hospital, Shalimar Bagh", "Fortis La Femme, Greater Kailash II"],
            "Punjab": ["Fortis Hospital, Mohali", "Fortis Hospital, Ludhiana", "Fortis Hospital, Amritsar"],
            "Haryana": ["Fortis Memorial Research Institute, Gurgaon", "Fortis Hospital, Faridabad"],
            "Rajasthan": ["Fortis Escorts Hospital, Jaipur"],
            "Uttar Pradesh": ["Fortis Hospital, Noida", "Fortis Escorts Hospital, Faridabad"]
        },
        "East India": {
            "West Bengal": ["Fortis Hospital, Anandapur", "Fortis Medical Centre, Kolkata"]
        },
        "South India": {
            "Karnataka": ["Fortis Hospital, Bannerghatta Road", "Fortis Hospital, Cunningham Road"],
            "Tamil Nadu": ["Fortis Malar Hospital, Chennai"]
        },
        "West India": {
            "Maharashtra": ["Fortis Hospital, Mulund", "Fortis Hiranandani Hospital, Vashi", "Fortis S.L. Raheja Hospital, Mahim"]
        }
    };

    return (
        <header className="w-full bg-white font-sans sticky top-0 z-50">
            <RequestCallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
            {/* Top Bar */}
            <div className="border-b border-gray-100 hidden lg:block bg-[#F8F9FA]">
                <div className="container mx-auto px-4 lg:px-10 flex justify-end items-center py-1.5 gap-6 text-[12px] text-gray-600 font-semibold tracking-wide">
                    <nav className="flex gap-6">
                        <Link to="/doctors" className="hover:text-green-700 transition-colors">Find a Doctor</Link>
                        <Link to="/investors" className="hover:text-green-700 transition-colors">Investors</Link>
                        <Link to="/about" className="hover:text-green-700 transition-colors">About us</Link>
                        <Link to="/careers" className="hover:text-green-700 transition-colors">Careers</Link>
                        <Link to="/csr" className="hover:text-green-700 transition-colors">CSR</Link>
                        <Link to="/contact" className="hover:text-green-700 transition-colors">Contact us</Link>
                    </nav>
                    <div className="relative">
                        <div
                            className="flex items-center gap-2 border-l border-gray-200 pl-6 cursor-pointer hover:text-green-700 transition-colors"
                            onClick={() => setIsLocationOpen(!isLocationOpen)}
                        >
                            <MapPin size={16} />
                            <span className="flex items-center gap-1 font-bold">{selectedLocation} <ChevronDown size={14} className={`transition-transform duration-300 ${isLocationOpen ? 'rotate-180' : ''}`} /></span>
                        </div>
                        {/* Location Dropdown */}
                        {isLocationOpen && (
                            <div className="absolute top-full left-6 mt-2 w-48 bg-white shadow-2xl rounded-lg border border-gray-100 z-[60] py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {locations.map(loc => (
                                    <div
                                        key={loc}
                                        className="px-6 py-2.5 hover:bg-green-50 hover:text-green-700 cursor-pointer transition-colors font-bold text-[13px]"
                                        onClick={() => {
                                            setSelectedLocation(loc);
                                            setIsLocationOpen(false);
                                        }}
                                    >
                                        {loc}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                        <Search size={18} className="cursor-pointer hover:text-green-700 hover:scale-110 transition-all duration-300" />
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
            <div className="container mx-auto px-4 lg:px-10 py-3 flex justify-between items-center relative">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 border-2 border-green-600 rounded-sm">
                        <span className="text-green-600 text-3xl font-black leading-none">+</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-bold text-[#008542] leading-tight max-w-[280px]">
                            Vartika Aarna Heart Care and Multispeciality Hospital
                        </span>
                    </div>
                </Link>

                {/* Main Nav Items */}
                <nav className="hidden xl:flex items-center gap-4 text-[13px] font-bold text-gray-700 uppercase tracking-tight">
                    {/* Hospitals Mega Menu */}
                    <div className="relative group/mega pb-1">
                        <Link to="/hospitals" className="flex items-center gap-1 group-hover/mega:text-green-700 border-b-2 border-transparent group-hover/mega:border-[#E67E61] transition-all">
                            <span>Hospitals</span> <ChevronDown size={14} className="group-hover/mega:rotate-180 transition-transform" />
                        </Link>

                        {/* Mega Menu Content */}
                        <div className="fixed left-0 top-[135px] w-full bg-white shadow-2xl border-t-2 border-[#E67E61] opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 z-[100] h-[500px] flex flex-col">
                            {/* Region Tabs */}
                            <div className="bg-[#FAF3F0] w-full">
                                <div className="container mx-auto px-4 lg:px-10 flex border-b border-gray-200">
                                    {Object.keys(hospitalData).map(region => (
                                        <button
                                            key={region}
                                            onMouseEnter={() => {
                                                setActiveRegion(region);
                                                setActiveState(Object.keys(hospitalData[region])[0]);
                                            }}
                                            className={`px-8 py-5 text-[13px] font-black tracking-widest uppercase transition-all relative ${activeRegion === region ? 'text-[#E67E61]' : 'text-gray-500 hover:text-gray-900'}`}
                                        >
                                            {region}
                                            {activeRegion === region && <span className="absolute bottom-0 left-0 w-full h-1 bg-[#E67E61]"></span>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* State & Hospital List */}
                            <div className="flex-grow flex container mx-auto px-4 lg:px-10 overflow-hidden">
                                {/* Left Sidebar: States */}
                                <div className="w-1/4 border-r border-gray-100 py-6 overflow-y-auto">
                                    {Object.keys(hospitalData[activeRegion]).map(state => (
                                        <div
                                            key={state}
                                            onMouseEnter={() => setActiveState(state)}
                                            className={`px-6 py-4 cursor-pointer transition-all text-sm font-black border-l-4 ${activeState === state ? 'bg-[#FAF3F0] text-[#E67E61] border-[#E67E61]' : 'text-gray-900 border-transparent hover:bg-gray-50'}`}
                                        >
                                            {state}
                                        </div>
                                    ))}
                                </div>

                                {/* Right Content: Hospitals */}
                                <div className="w-3/4 py-10 px-12 overflow-y-auto bg-white grid grid-cols-2 gap-x-12 gap-y-6 content-start">
                                    {hospitalData[activeRegion][activeState].map((hospital, idx) => (
                                        <Link
                                            key={idx}
                                            to="/hospitals"
                                            className="text-gray-700 font-bold hover:text-green-700 text-sm flex items-start gap-2 group/hosp"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0 group-hover/hosp:scale-150 transition-transform"></span>
                                            {hospital}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Specialities Mega Menu */}
                    <div className="relative group/specialty pb-1">
                        <Link to="/specialities" className="flex items-center gap-1 group-hover/specialty:text-green-700 transition-all">
                            <span>Specialties</span> <ChevronDown size={14} className="group-hover/specialty:rotate-180 transition-transform" />
                        </Link>

                        {/* Mega Menu Content */}
                        <div className="fixed left-0 top-[135px] w-full bg-white shadow-2xl border-t-2 border-[#E67E61] opacity-0 invisible group-hover/specialty:opacity-100 group-hover/specialty:visible transition-all duration-300 z-[100] py-10">
                            <div className="container mx-auto px-4 lg:px-10 grid grid-cols-4 gap-x-8">
                                {/* Column 1 */}
                                <div className="space-y-1">
                                    <SpecialtyLink title="Cardiac Sciences" icon="❤️" highlighted />
                                    <SpecialtyLink title="Critical Care" />
                                    <SpecialtyLink title="Emergency and Trauma" />
                                    <SpecialtyLink title="General Surgery" />
                                    <SpecialtyLink title="Internal Medicine" />
                                    <SpecialtyLink title="Neurointerventional Radiology" />
                                    <SpecialtyLink title="Obstetrics and Gynaecology" />
                                    <SpecialtyLink title="Paediatrics" />
                                    <SpecialtyLink title="Plastic and Reconstructive Surgery" />
                                    <SpecialtyLink title="Support Specialties" />
                                </div>
                                {/* Column 2 */}
                                <div className="space-y-1">
                                    <SpecialtyLink title="Infertility medicine" />
                                    <SpecialtyLink title="Dental Science" />
                                    <SpecialtyLink title="Endocrine Surgery" />
                                    <SpecialtyLink title="Geriatric Medicine" />
                                    <SpecialtyLink title="Liver Transplant and Hepatobiliary Sciences" />
                                    <SpecialtyLink title="Neurology" />
                                    <SpecialtyLink title="Ophthalmology" />
                                    <SpecialtyLink title="Pain and Palliative Medicine" />
                                    <SpecialtyLink title="Pulmonology" />
                                    <SpecialtyLink title="Thoracic Surgery" />
                                </div>
                                {/* Column 3 */}
                                <div className="space-y-1">
                                    <SpecialtyLink title="Gastroenterology and Hepatobiliary Sciences" />
                                    <SpecialtyLink title="Dermatology" />
                                    <SpecialtyLink title="ENT" />
                                    <SpecialtyLink title="Haematology" />
                                    <SpecialtyLink title="Medical Genetics" />
                                    <SpecialtyLink title="Neurosurgery" />
                                    <SpecialtyLink title="Organ Transplant" />
                                    <SpecialtyLink title="Palliative Medicine" />
                                    <SpecialtyLink title="Radiology" />
                                    <SpecialtyLink title="Transfusion Medicine" />
                                </div>
                                {/* Column 4 */}
                                <div className="space-y-1">
                                    <SpecialtyLink title="Nephrology" />
                                    <SpecialtyLink title="Diabetology/Endocrinology" />
                                    <SpecialtyLink title="Foetal Medicine" />
                                    <SpecialtyLink title="Infectious Diseases" />
                                    <SpecialtyLink title="Mental Health and Behavioural Sciences" />
                                    <SpecialtyLink title="Oncology" />
                                    <SpecialtyLink title="Orthopaedics" />
                                    <SpecialtyLink title="Physiotherapy and Rehabilitation" />
                                    <SpecialtyLink title="Rheumatology" />
                                    <SpecialtyLink title="Urology" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/centre-of-excellence" className="flex items-center gap-1 cursor-pointer hover:text-green-700 pb-1">
                        <span>Centre of Excellence</span> <ChevronDown size={14} />
                    </Link>
                    <Link to="/blog" className="flex items-center gap-1 cursor-pointer hover:text-green-700 pb-1">
                        <span>Media Centre</span> <ChevronDown size={14} />
                    </Link>
                    {/* Medical Services Dropdown */}
                    <div className="relative group/medical cursor-pointer pb-1">
                        <div className="flex items-center gap-1 group-hover/medical:text-green-700 transition-all">
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
                    <Link to="/international" className="cursor-pointer hover:text-green-700 pb-1">
                        <span>International Section</span>
                    </Link>
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
            <div className="bg-[#FAF3F0] w-full py-2 shadow-sm">
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
                <div className="xl:hidden fixed inset-0 top-[120px] bg-white z-50 p-6 overflow-y-auto border-t border-gray-100">
                    <nav className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <div className="flex justify-between items-center">
                            <span>Hospitals</span> <ChevronDown size={20} />
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Specialties</span> <ChevronDown size={20} />
                        </div>
                        <Link to="/doctors" onClick={() => setIsMenuOpen(false)}>Find a Doctor</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </nav>
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
