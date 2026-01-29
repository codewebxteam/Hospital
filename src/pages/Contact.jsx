import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('feedback');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-900 leading-normal tracking-tight">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Responsive & Elegant */}
        <section className="bg-gradient-to-br from-[#FAF3F0] via-white to-[#F0FAF5] py-16 md:py-24 lg:py-32 border-b border-gray-100/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-bold uppercase tracking-wider text-[10px] md:text-xs rounded-full mb-6">
              24/7 Support & Feedback
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              We're Here to Help
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Reach out anytime — our dedicated team is ready to assist you with care and compassion.
            </p>
          </div>
        </section>

        {/* Corporate & Branches Info - Floating Card Responsive */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-12 -mt-12 md:-mt-20 mb-16 md:mb-20 relative z-10">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100/80 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="pt-4 md:pt-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-8 md:mb-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center text-green-600 shadow-inner">
                    <MapPin size={28} className="md:w-8 md:h-8" strokeWidth={1.8} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Gorakhpur Branch</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                  {/* Left - Main Contacts */}
                  <div className="space-y-6 md:space-y-8">
                    <ContactItem
                      icon={<MapPin size={22} className="md:w-6 md:h-6" />}
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
                      icon={<Phone size={22} className="md:w-6 md:h-6" />}
                      title="Appointments"
                      content={<span className="text-green-700 font-bold text-lg md:text-xl">9205 010 100</span>}
                    />
                   <EmailItem
                      icon={<MessageSquare size={18} className="md:w-5 md:h-5" />}
                      label="Feedback / Complaints"
                      email="feedback@vartikaaarna.com"
                    /> 
                  </div>

                  {/* Right - Interactive Map */}
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[300px] md:h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8821952296716!2d83.3916!3d26.7161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQyJzU4LjAiTiA4M8KwMjMnMjkuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                      width="100%"
                      height="100%"
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

        {/* Get in Touch Form Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">Get in Touch</h2>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-10 md:mb-12 max-w-2xl mx-auto font-light">
              We'd love to hear from you. Please fill out the form below.
            </p>

            {/* Tabs - Responsive Toggle */}
            <div className="flex justify-center mb-10 md:mb-12">
              <div className="inline-flex flex-col sm:flex-row bg-gray-100 rounded-2xl sm:rounded-full p-1.5 shadow-sm w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('feedback')}
                  className={`px-6 md:px-8 py-3 rounded-xl sm:rounded-full font-bold text-sm tracking-wide transition-all ${
                    activeTab === 'feedback'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:shadow'
                  }`}
                >
                  Feedback / Complaints
                </button>
                <button
                  onClick={() => setActiveTab('queries')}
                  className={`px-6 md:px-8 py-3 rounded-xl sm:rounded-full font-bold text-sm tracking-wide transition-all ${
                    activeTab === 'queries'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:shadow'
                  }`}
                >
                  General Queries
                </button>
              </div>
            </div>

            {/* Form - Optimized Spacing */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-10 md:p-14 border border-gray-100">
              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-800 mb-2.5">
                      Type of {activeTab === 'feedback' ? 'Feedback' : 'Query'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none cursor-pointer">
                        <option>Select Type</option>
                        <option>General Inquiry</option>
                        <option>Appointment Related</option>
                        <option>Service Feedback</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <FormInput label="First Name" required placeholder="Enter first name" />
                  <FormInput label="Last Name" required placeholder="Enter last name" />

                  <div className="flex gap-3 sm:gap-4 md:col-span-1">
                    <div className="w-20 sm:w-28">
                      <label className="block text-sm font-bold text-gray-800 mb-2.5">Code</label>
                      <input
                        type="text"
                        value="+91"
                        disabled
                        className="w-full px-2 py-4 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold text-gray-700"
                      />
                    </div>
                    <div className="flex-1">
                      <FormInput label="Mobile Number" required type="tel" placeholder="Mobile number" />
                    </div>
                  </div>

                  <FormInput label="Email" required type="email" placeholder="your@email.com" className="md:col-span-1" />

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-800 mb-2.5">
                      Preferred Hospital <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none cursor-pointer">
                        <option>Select Hospital</option>
                        <option>Vartika Aarna - Gorakhpur</option>
                        <option>Vartika Aarna - Gurgaon</option>
                        <option>Vartika Aarna - Delhi</option>
                        <option>Vartika Aarna - Mumbai</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-800 mb-2.5">
                      Your {activeTab === 'feedback' ? 'Feedback' : 'Message'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
                      placeholder={`Please share your ${activeTab.toLowerCase()}...`}
                    ></textarea>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-green-200/50 transition-all transform hover:scale-[1.02] active:scale-95"
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
    <div className="flex items-start gap-4 md:gap-5 group">
      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <div className="text-sm md:text-base text-gray-700 leading-relaxed">{content}</div>
      </div>
    </div>
  );
}

function EmailItem({ icon, label, email }) {
  return (
    <div className="flex items-start gap-4 md:gap-5 group">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] md:text-xs font-bold text-green-600 uppercase tracking-wider mb-1">{label}</p>
        <a
          href={`mailto:${email}`}
          className="text-sm md:text-base text-gray-900 font-bold hover:text-green-700 transition-colors block break-all"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

function FormInput({ label, required, type = "text", placeholder, className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-bold text-gray-800 mb-2.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
}