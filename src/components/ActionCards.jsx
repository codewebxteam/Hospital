import { Calendar, Building2, Stethoscope, UserRound, ClipboardCheck, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ActionCards() {
    const mainCards = [
        {
            title: "Book an Appointment",
            subtitle: "With country's leading experts",
            icon: <Calendar size={26} />,
            bgClass: "gradient-soft-green border-soft-green",
            iconBgClass: "icon-badge-green",
            link: "/book-appointment/1"
        },
        {
            title: "Hospitals",
            subtitle: "Health needs under one roof",
            icon: <Building2 size={26} />,
            bgClass: "gradient-soft-blue border-soft-blue",
            iconBgClass: "icon-badge-blue",
            link: "/hospitals"
        },
        {
            title: "Specialities",
            subtitle: "Our expertise in Healthcare",
            icon: <Stethoscope size={26} />,
            bgClass: "gradient-soft-purple border-soft-purple",
            iconBgClass: "icon-badge-purple",
            link: "/specialities"
        },
        {
            title: "Doctors",
            subtitle: "Top experts for your health",
            icon: <UserRound size={26} />,
            bgClass: "gradient-soft-coral border-soft-coral",
            iconBgClass: "icon-badge-coral",
            link: "/doctors"
        }
    ];

    const bookingSupport = [
        {
            title: "Health Checkups",
            subtitle: "Comprehensive packages",
            icon: <ClipboardCheck size={36} />,
            iconColor: "text-emerald-500",
            link: "/health-checkup"
        },
        {
            title: "Tests & Services",
            subtitle: "Lab diagnostics",
            icon: <Microscope size={36} />,
            iconColor: "text-amber-500",
            link: "/services"
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                    {/* Left Grid: 2x2 Main Action Cards */}
                    <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                        {mainCards.map((card, i) => (
                            <Link
                                key={i}
                                to={card.link}
                                className={`${card.bgClass} p-5 lg:p-6 rounded-2xl flex items-center justify-between group soft-hover stagger-item animate-gentle-fade`}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <div className="space-y-1.5">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-medium">
                                        {card.subtitle}
                                    </p>
                                </div>
                                <div className={`icon-badge ${card.iconBgClass} text-white icon-gentle-scale`}>
                                    {card.icon}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Right Section: Booking Support */}
                    <div className="lg:w-5/12">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2.5">
                            <span>We can help you book</span>
                            <ArrowRight size={18} className="text-teal-600 animate-soft-breathing" />
                        </h2>
                        <div className="grid grid-cols-2 gap-4 lg:gap-5">
                            {bookingSupport.map((card, i) => (
                                <Link
                                    key={i}
                                    to={card.link}
                                    className="healthcare-card p-6 lg:p-8 flex flex-col items-center justify-center text-center gap-3 group stagger-item animate-gentle-fade"
                                    style={{ animationDelay: `${(i + 4) * 0.08}s` }}
                                >
                                    <div className={`${card.iconColor} icon-gentle-scale`}>
                                        {card.icon}
                                    </div>
                                    <div>
                                        <span className="text-sm lg:text-base font-bold text-gray-800 block leading-snug group-hover:text-teal-700 transition-colors duration-300">
                                            {card.title}
                                        </span>
                                        <span className="text-xs text-gray-400 font-medium mt-0.5 block">
                                            {card.subtitle}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
