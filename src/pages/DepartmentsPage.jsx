import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Heart, Bone, Brain, Baby, Pill, Utensils, Flower2, AlertCircle, FlaskConical, ArrowRight } from 'lucide-react';

const departmentsData = [
    {
        id: "cardiology",
        name: "Cardiology",
        icon: Heart,
        color: "bg-red-50 hover:bg-red-100",
        borderColor: "border-red-200",
        textColor: "text-red-700",
        description: "Expert care for heart and cardiovascular diseases",
        shortDesc: "Heart & Cardiac Care"
    },
    {
        id: "orthopedics",
        name: "Orthopedics",
        icon: Bone,
        color: "bg-orange-50 hover:bg-orange-100",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        description: "Bone, joint and musculoskeletal treatments",
        shortDesc: "Bone & Joint Care"
    },
    {
        id: "neurology",
        name: "Neurology",
        icon: Brain,
        color: "bg-purple-50 hover:bg-purple-100",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        description: "Brain and nervous system disorders",
        shortDesc: "Brain & Nervous System"
    },
    {
        id: "pediatrics",
        name: "Pediatrics",
        icon: Baby,
        color: "bg-pink-50 hover:bg-pink-100",
        borderColor: "border-pink-200",
        textColor: "text-pink-700",
        description: "Specialized care for children and infants",
        shortDesc: "Child Health Care"
    },
    {
        id: "oncology",
        name: "Oncology",
        icon: Pill,
        color: "bg-indigo-50 hover:bg-indigo-100",
        borderColor: "border-indigo-200",
        textColor: "text-indigo-700",
        description: "Cancer diagnosis and treatment services",
        shortDesc: "Cancer Treatment"
    },
    {
        id: "gastroenterology",
        name: "Gastroenterology",
        icon: Utensils,
        color: "bg-emerald-50 hover:bg-emerald-100",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-700",
        description: "Digestive system and gastrointestinal care",
        shortDesc: "Digestive Health"
    },
    {
        id: "gynecology",
        name: "Gynecology",
        icon: Flower2,
        color: "bg-fuchsia-50 hover:bg-fuchsia-100",
        borderColor: "border-fuchsia-200",
        textColor: "text-fuchsia-700",
        description: "Women's health and reproductive care",
        shortDesc: "Women's Health"
    },
    {
        id: "icu",
        name: "ICU & Critical Care",
        icon: AlertCircle,
        color: "bg-cyan-50 hover:bg-cyan-100",
        borderColor: "border-cyan-200",
        textColor: "text-cyan-700",
        description: "24/7 intensive and critical care services",
        shortDesc: "Critical Care Unit"
    },
    {
        id: "laboratory",
        name: "Laboratory Services",
        icon: FlaskConical,
        color: "bg-lime-50 hover:bg-lime-100",
        borderColor: "border-lime-200",
        textColor: "text-lime-700",
        description: "Advanced diagnostic and pathology services",
        shortDesc: "Diagnostic Tests"
    }
];

const DepartmentCard = ({ dept, onClick }) => {
    const IconComponent = dept.icon;
    return (
        <div
            onClick={onClick}
            className={`${dept.color} ${dept.borderColor} border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 transform hover:shadow-2xl hover:scale-105 group`}
        >
            <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-white rounded-xl group-hover:scale-110 transition-transform`}>
                    <IconComponent size={32} className={dept.textColor} />
                </div>
                <ArrowRight size={20} className={`${dept.textColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{dept.name}</h3>
            <p className="text-gray-600 font-medium mb-4">{dept.description}</p>
            <div className={`inline-block px-4 py-2 rounded-lg ${dept.color} border ${dept.borderColor}`}>
                <span className={`text-sm font-bold ${dept.textColor}`}>{dept.shortDesc}</span>
            </div>
        </div>
    );
};

export default function DepartmentsPage() {
    const navigate = useNavigate();

    const handleDepartmentClick = (deptId) => {
        navigate(`/department/${deptId}`);
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform scale-150 rotate-12">
                        <Heart size={400} />
                    </div>
                    <div className="container mx-auto px-4 lg:px-10 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Our Departments & <br /> Specialties
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-medium leading-relaxed">
                            World-class departments with expert doctors and advanced facilities for comprehensive healthcare.
                        </p>
                    </div>
                </section>

                {/* Departments Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {departmentsData.map((dept) => (
                                <DepartmentCard
                                    key={dept.id}
                                    dept={dept}
                                    onClick={() => handleDepartmentClick(dept.id)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">Need Help Finding a Department?</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg font-medium">
                            Our medical team is ready to guide you to the right department for your health needs.
                        </p>
                        <button className="px-10 py-4 bg-white text-blue-900 rounded-xl font-black text-lg hover:bg-blue-50 transition-all shadow-lg">
                            Contact Our Helpline
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
