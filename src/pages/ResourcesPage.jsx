import Header from '../components/Header';
import Footer from '../components/Footer';

const resources = [
    {
        title: "Medical Visa Assistance",
        description: "We help you with the necessary documentation and process to obtain a medical visa for India.",
        icon: "🛂"
    },
    {
        title: "Accommodation & Stay",
        description: "Find comfortable stay options for patients and their families near top hospitals.",
        icon: "🏠"
    },
    {
        title: "Free Second Opinion",
        description: "Get a free medical opinion from top specialists before traveling for treatment.",
        icon: "🩺"
    },
    {
        title: "Insurance & Billing",
        description: "Information about international insurance coverage and transparent billing processes.",
        icon: "💳"
    },
    {
        title: "Post-Treatment Care",
        description: "Guidelines and assistance for recovery once you return to your home country.",
        icon: "🌿"
    },
    {
        title: "Travel Coordination",
        description: "Airport pick-up/drop-off and local transport arrangements for medical tourists.",
        icon: "🚗"
    }
];

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brand-green font-bold uppercase tracking-wider mb-2 block">Patient Support</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Patient Resources</h1>
                        <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:border-brand-green/30 transition-all flex flex-col items-center text-center">
                                <div className="text-5xl mb-6 bg-brand-blue/10 w-20 h-20 flex items-center justify-center rounded-2xl">
                                    {resource.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {resource.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-brand-dark text-white p-12 rounded-3xl text-center shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Our patient coordinators are available 24/7 to answer your questions and help you plan your medical journey.
                        </p>
                        <button className="bg-brand-green hover:bg-green-800 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-xl">
                            Chat with a Coordinator
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
