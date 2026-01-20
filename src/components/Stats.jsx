import { Building2, BedDouble, Microscope, UserRound } from 'lucide-react';

export default function Stats() {
    const stats = [
        { number: "28+", label: "Hospitals", icon: <Building2 size={28} className="text-[#008C44]" /> },
        { number: "4000+", label: "Operational Beds", icon: <BedDouble size={28} className="text-[#008C44]" /> },
        { number: "400+", label: "Diagnostics Centres", icon: <Microscope size={28} className="text-[#008C44]" /> },
        { number: "10,000+", label: "Expert Doctors", icon: <UserRound size={28} className="text-[#008C44]" /> },
    ];

    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-[#008C44] text-4xl md:text-5xl font-extrabold mb-3">
                                {stat.number}
                            </div>
                            <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
