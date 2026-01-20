import Header from '../components/Header';
import Hero from '../components/Hero';
import ActionCards from '../components/ActionCards';
import ImageSection from '../components/ImageSection';
import Services from '../components/Services';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import Doctors from '../components/Doctors';
import NewsEvents from '../components/NewsEvents';
import Accreditations from '../components/Accreditations';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Header />
            <main className="flex-grow">
                <Hero />
                <ActionCards />
                <ImageSection />
                <Services />
                <Stats />
                <WhyChooseUs />
                <Doctors />
                <NewsEvents />
                <Accreditations />
                <Testimonials />
                <CTABanner />
            </main>
            <Footer />
        </div>
    );
}
