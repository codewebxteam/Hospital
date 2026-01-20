import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-10">
                <div className="bg-blue-600 text-white py-16 text-center mb-10">
                    <h1 className="text-4xl font-bold">Our Detailed Services</h1>
                </div>
                <Services />
            </main>
            <Footer />
        </div>
    );
}
