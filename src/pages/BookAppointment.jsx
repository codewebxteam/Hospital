import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, Calendar, Clock, Sun, MapPin, User, GraduationCap } from 'lucide-react';

const doctorsData = {
    1: {
        name: "Dr. Anoop Misra",
        title: "EXECUTIVE CHAIRMAN FORTIS C-DOC | Fortis C-Doc",
        specialty: "Diabetology/Endocrinology | Diabetology/Endocrinology | Endocrinology",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
        experience: "40 Years",
        fees: "2800",
        location: "Fortis C-Doc, Delhi",
        about: "Dr. Anoop Misra is a renowned endocrinologist and diabetologist with over 40 years of experience. He serves as the Executive Chairman of Fortis C-Doc and is recognized for his extensive work in obesity and diabetes research. He has had an illustrious career in the Indian Army Medical Corps, before joining civil practise. He specializes in complex angioplasty (IVUS, OCT, Rotablation, Laser) and structural heart interventions.",
        education: "MBBS, MD(Medicine), DNB, DM(Cardiology)",
    },
    2: {
        name: "Dr. (Col) Manjinder Sandhu",
        title: "PRINCIPAL DIRECTOR CARDIOLOGY | Fortis Gurgaon",
        specialty: "Cardiac Sciences | Interventional Cardiology",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
        experience: "35 Years",
        fees: "2000",
        location: "Fortis Memorial Research Institute, Gurgaon",
        about: "Dr. (Col) Manjinder Sandhu is a renowned interventional cardiologist with more than 35 years' experience. He had an illustrious career in the Indian Army Medical Corps, before joining civil practise. He specializes in complex angioplasty (IVUS, OCT, Rotablation, Laser) and structural heart interventions.",
        education: "MBBS, MD(Medicine), DNB, DM(Cardiology)",
    }
};

export default function BookAppointment() {
    const { id } = useParams();
    const doctor = doctorsData[id] || doctorsData[1];
    const [selectedDate, setSelectedDate] = useState('Mon 19 Jan');
    const [selectedSlot, setSelectedSlot] = useState('3:45 PM');
    const [visitType, setVisitType] = useState('hospital');

    const dates = [
        { day: 'Mon', date: '19 Jan' },
        { day: 'Tue', date: '20 Jan' },
        { day: 'Wed', date: '21 Jan' },
        { day: 'Thu', date: '22 Jan' },
        { day: 'Fri', date: '23 Jan' },
        { day: 'Sat', date: '24 Jan' },
    ];

    const slots = ['3:45 PM'];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4 lg:px-10">

                    {/* Doctor Details Top Header (Matching Image) */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 py-8 px-8 bg-white border-b border-gray-100">
                        <div className="flex items-center gap-6 mb-6 md:mb-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm flex-shrink-0">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{doctor.name}</h1>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">{doctor.title}</p>
                                <div className="bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold px-3 py-1 rounded inline-block">
                                    {doctor.specialty}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col border border-gray-100 rounded-lg overflow-hidden min-w-[180px]">
                                <div className="bg-white p-4 border-b border-gray-100 flex items-center gap-3">
                                    <div className="text-gray-800">
                                        <Calendar size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">{doctor.experience}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Experience</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 flex items-center gap-3">
                                    <span className="text-gray-800 font-bold text-lg">₹</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">{doctor.fees}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Fees</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-12 h-12 rounded-full border border-[#E67E61] flex items-center justify-center text-[#E67E61] hover:bg-[#F3DCD5] transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Doctor Info */}
                        <div className="lg:col-span-12 xl:col-span-4 space-y-6">
                            {/* About Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                                <div className="flex items-center gap-2 mb-6 text-gray-800">
                                    <div className="p-1 border border-gray-800 rounded flex items-center justify-center">
                                        <User size={16} />
                                    </div>
                                    <h3 className="font-bold text-lg">About</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {doctor.about}
                                </p>
                                <button className="text-[#E67E61] text-xs font-bold uppercase tracking-wider hover:underline">
                                    Read More
                                </button>
                            </div>

                            {/* Education Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                                <div className="flex items-center gap-2 mb-6 text-gray-800">
                                    <div className="p-1 border border-gray-800 rounded flex items-center justify-center">
                                        <GraduationCap size={16} />
                                    </div>
                                    <h3 className="font-bold text-lg">Education</h3>
                                </div>
                                <p className="text-gray-600 text-sm font-semibold">
                                    {doctor.education}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Appointment Scheduler */}
                        <div className="lg:col-span-12 xl:col-span-8">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-medium text-gray-800">Schedule Appointment</h2>
                                <button className="bg-[#F3DCD5] text-gray-800 font-bold px-10 py-3 rounded-lg text-sm shadow-sm hover:bg-[#EBD2CB] transition-colors">
                                    Book Appointment
                                </button>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                {/* Visit Type Tabs */}
                                <div className="flex border-b border-gray-100">
                                    <button
                                        onClick={() => setVisitType('hospital')}
                                        className={`flex-1 py-4 font-bold text-sm transition-all ${visitType === 'hospital' ? 'bg-[#F3DCD5] text-gray-800' : 'text-gray-500 bg-white'}`}
                                    >
                                        Book Hospital Visit
                                    </button>
                                    <button
                                        onClick={() => setVisitType('video')}
                                        className={`flex-1 py-4 font-bold text-sm transition-all ${visitType === 'video' ? 'bg-[#F3DCD5] text-gray-800' : 'text-gray-500 bg-white border-l border-gray-100'}`}
                                    >
                                        Book Video Consult
                                    </button>
                                </div>

                                <div className="p-8 space-y-8">
                                    {/* Hospital Selector */}
                                    <div className="relative">
                                        <select className="w-full h-16 px-6 border border-gray-200 rounded-lg appearance-none bg-white text-gray-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#F3DCD5] cursor-pointer">
                                            <option>{doctor.location}</option>
                                        </select>
                                        <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-gray-400" size={24} />
                                    </div>

                                    {/* Date Selector */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-center gap-10">
                                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors">
                                                <ChevronLeft size={24} />
                                            </button>
                                            <h4 className="font-bold text-lg text-gray-800">January 2026</h4>
                                            <button className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors">
                                                <ChevronRight size={24} />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-gray-300">
                                                <ChevronLeft size={32} />
                                            </button>
                                            <div className="flex-grow grid grid-cols-6 gap-3">
                                                {dates.map((d, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setSelectedDate(`${d.day} ${d.date}`)}
                                                        className={`py-3 rounded-lg border flex flex-col items-center justify-center transition-all ${selectedDate === `${d.day} ${d.date}` ? 'bg-[#F3DCD5] border-[#F3DCD5] text-gray-800 ring-2 ring-[#F3DCD5] ring-offset-2' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400'}`}
                                                    >
                                                        <span className="text-sm font-bold">{d.day}</span>
                                                        <span className="text-sm font-bold">{d.date}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-gray-800">
                                                <ChevronRight size={32} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Slot Selector */}
                                    <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                        <div className="bg-white p-6 border-b border-gray-100 flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <Sun className="text-gray-800" size={24} />
                                                <span className="font-bold text-xl text-gray-800">Afternoon</span>
                                            </div>
                                            <span className="bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold px-4 py-1.5 rounded-full">
                                                {slots.length} Slot
                                            </span>
                                        </div>
                                        <div className="p-8 h-40">
                                            <button
                                                onClick={() => setSelectedSlot(slots[0])}
                                                className={`px-8 py-3 rounded-lg font-bold transition-all ${selectedSlot === slots[0] ? 'bg-[#F3DCD5] text-gray-800 ring-2 ring-[#F3DCD5] ring-offset-2' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400'}`}
                                            >
                                                {slots[0]}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-[#F3DCD5] hover:bg-[#EBD2CB] text-gray-800 text-lg font-bold py-5 rounded-xl transition-all shadow-md group">
                                <span className="group-hover:tracking-wider transition-all">Book Appointment</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
