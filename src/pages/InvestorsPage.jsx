import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, FileText, BarChart3, Users } from 'lucide-react';

export default function InvestorsPage() {
    const reports = [
        { title: "Annual Report 2024-25", date: "June 2025", size: "4.2 MB" },
        { title: "Quarterly Results Q3", date: "Jan 2025", size: "1.5 MB" },
        { title: "Investor Presentation", date: "Feb 2025", size: "3.1 MB" },
        { title: "Sustainability Report", date: "Dec 2024", size: "5.4 MB" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#008C44] text-white py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
                        <p className="text-xl opacity-90 max-w-2xl">
                            Committed to delivering sustainable value and maintaining transparency with our shareholders and partners.
                        </p>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="container mx-auto px-4 lg:px-10 -mt-10 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "Market Cap", value: "₹ 45.2K Cr", icon: <BarChart3 /> },
                            { label: "Shareholders", value: "1.2 Lakh+", icon: <Users /> },
                            { label: "Hospitals", value: "28+", icon: <FileText /> }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-1">{stat.label}</p>
                                    <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
                                </div>
                                <div className="text-[#E67E61] bg-[#F3DCD5] p-3 rounded-xl">
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Downloads Section */}
                <div className="container mx-auto px-4 lg:px-10 mb-20">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial Reports</h2>
                            <p className="text-gray-500">Access our latest financial disclosures and annual reports.</p>
                        </div>
                        <button className="text-[#008C44] font-bold hover:underline">View All Reports</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reports.map((report, i) => (
                            <div key={i} className="flex items-center justify-between p-6 rounded-xl border border-gray-100 hover:border-[#008C44] hover:shadow-md transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-[#008C44] group-hover:text-white transition-colors text-gray-600">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{report.title}</h4>
                                        <p className="text-xs text-gray-400">{report.date} • {report.size}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-[#008C44]">
                                    <Download size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
