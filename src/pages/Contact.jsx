import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, ChevronRight, Globe, MessageSquare, Headphones, BarChart3, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('feedback');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Softer & Elegant */}
        <section className="bg-gradient-to-br from-[#FAF3F0] via-white to-[#F0FAF5] py-20 md:py-32 border-b border-gray-100/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-bold uppercase tracking-wider text-xs rounded-full mb-6">
              24/7 Support & Feedback
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Reach out anytime — our dedicated team is ready to assist you with care and compassion.
            </p>
          </div>
        </section>

        {/* Corporate & Branches Info */}
        <section className="container mx-auto px-6 lg:px-12 -mt-20 mb-20 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100/80 overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              {/* Corporate Headquarters */}
              <div className="pt-12 border-t border-gray-100">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-inner">
                    <MapPin size={32} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Gorakhpur Branch</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left - Main Contacts */}
                  <div className="space-y-8">
                    <ContactItem
                      icon={<MapPin size={24} />}
                      title="Address"
                      content={
                        <>
                          Plot No. A-67, Near Vardayani Hospital,<br />
                          Deoria Bypass Road, Taramandal,<br />
                          Gorakhpur, Uttar Pradesh - 273001
                        </>
                      }
                    />
                    <ContactItem
                      icon={<Phone size={24} />}
                      title="Appointments"
                      content={<span className="text-green-700 font-bold text-xl">9205 010 100</span>}
                    />
                   <EmailItem
                      icon={<MessageSquare size={20} />}
                      label="Feedback / Complaints"
                      email="feedback@vartikaaarna.com"
                    /> 
                  </div>

                  {/* Right - Emails */}<div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 -mt-6 md:-mt-10">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114104.44081214728!2d83.37805!3d26.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sTaramandal%2C%20Gorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gorakhpur Branch Location"
  />
                 
                </div>
              </div>

             
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Form */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">Get in Touch</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We'd love to hear from you. Please fill out the form below.
            </p>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-sm">
                <button
                  onClick={() => setActiveTab('feedback')}
                  className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all ${
                    activeTab === 'feedback'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:shadow'
                  }`}
                >
                  Feedback / Complaints
                </button>
                <button
                  onClick={() => setActiveTab('queries')}
                  className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all ${
                    activeTab === 'queries'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:shadow'
                  }`}
                >
                  General Queries
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-100">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-800 mb-2.5">
                      Type of {activeTab === 'feedback' ? 'Feedback' : 'Query'} <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none">
                      <option>Select Type</option>
                      <option>General Inquiry</option>
                      <option>Appointment Related</option>
                      <option>Service Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <FormInput label="First Name" required placeholder="Enter your first name" />
                  <FormInput label="Last Name" required placeholder="Enter your last name" />

                  <div className="flex gap-4">
                    <div className="w-28">
                      <label className="block text-sm font-bold text-gray-800 mb-2.5">Code</label>
                      <input
                        type="text"
                        value="+91"
                        disabled
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold text-gray-700"
                      />
                    </div>
                    <div className="flex-1">
                      <FormInput label="Mobile Number" required type="tel" placeholder="Enter mobile number" />
                    </div>
                  </div>

                  <FormInput label="Email" required type="email" placeholder="your@email.com" className="md:col-span-2" />

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-800 mb-2.5">
                      Preferred Hospital <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none">
                      <option>Select Hospital</option>
                      <option>Vartika Aarna - Gurgaon</option>
                      <option>Vartika Aarna - Gorakhpur</option>
                      <option>Vartika Aarna - Delhi</option>
                      <option>Vartika Aarna - Mumbai</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-800 mb-2.5">
                      Your {activeTab === 'feedback' ? 'Feedback' : 'Message'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder={`Please share your ${activeTab.toLowerCase()}...`}
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-green-200/50 transition-all transform hover:scale-[1.02]"
                  >
                    Submit Your Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Components
function ContactItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1.5">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function EmailItem({ icon, label, email }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">{label}</p>
        <a
          href={`mailto:${email}`}
          className="text-gray-900 font-bold hover:text-green-700 transition-colors block"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

function FormInput({ label, required, type = "text", placeholder, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm font-bold text-gray-800 mb-2.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}