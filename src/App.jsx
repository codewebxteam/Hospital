import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';
import HealthCheckupPage from './pages/HealthCheckupPage';
import Contact from './pages/Contact';
import SpecialityPage from './pages/SpecialityPage';

import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import InvestorsPage from './pages/InvestorsPage';
import CareersPage from './pages/CareersPage';
import CSRPage from './pages/CSRPage';
import CentreOfExcellencePage from './pages/CentreOfExcellencePage';
import InternationalSectionPage from './pages/InternationalSectionPage';
import EmergencyPage from './pages/EmergencyPage';
import MedicalProceduresPage from './pages/MedicalProceduresPage';
import ImmigrationServicesPage from './pages/ImmigrationServicesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import CardiologyPage from './pages/CardiologyPage';
import OrthopedicsPage from './pages/OrthopedicsPage';
import NeurologyPage from './pages/NeurologyPage';
import PediatricsPage from './pages/PediatricsPage';
import OncologyPage from './pages/OncologyPage';
import GastroenterologyPage from './pages/GastroenterologyPage';
import GynecologyPage from './pages/GynecologyPage';
import ICUPage from './pages/ICUPage';
import LaboratoryPage from './pages/LaboratoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/health-checkup" element={<HealthCheckupPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specialities" element={<SpecialityPage />} />
       
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/department/cardiology" element={<CardiologyPage />} />
        <Route path="/department/orthopedics" element={<OrthopedicsPage />} />
        <Route path="/department/neurology" element={<NeurologyPage />} />
        <Route path="/department/pediatrics" element={<PediatricsPage />} />
        <Route path="/department/oncology" element={<OncologyPage />} />
        <Route path="/department/gastroenterology" element={<GastroenterologyPage />} />
        <Route path="/department/gynecology" element={<GynecologyPage />} />
        <Route path="/department/icu" element={<ICUPage />} />
        <Route path="/department/laboratory" element={<LaboratoryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/csr" element={<CSRPage />} />
        <Route path="/centre-of-excellence" element={<CentreOfExcellencePage />} />
        <Route path="/international" element={<InternationalSectionPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/medical-procedures" element={<MedicalProceduresPage />} />
        <Route path="/immigration-services" element={<ImmigrationServicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
