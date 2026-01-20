import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
    {
        title: "10 Tips for a Healthy Heart",
        excerpt: "Simple lifestyle changes that can significantly reduce your risk of cardiovascular diseases.",
        date: "Jan 15, 2026",
        category: "Safety & Health",
        image: "https://images.unsplash.com/photo-1505751172107-573225a943d0?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Benefits of Medical Travel in India",
        excerpt: "Why thousands of patients choose India for world-class affordable healthcare every year.",
        date: "Jan 12, 2026",
        category: "Medical Tourism",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Recovering After Cardiac Surgery",
        excerpt: "A comprehensive guide on what to expect during your recovery phase post heart surgery.",
        date: "Jan 08, 2026",
        category: "Recovery",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brand-green font-bold uppercase tracking-wider mb-2 block">Health Insights</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
                        <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group">
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                        {post.category}
                                    </div>
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <span className="text-gray-400 text-sm block mb-2">{post.date}</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-green transition-colors">{post.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <button className="text-brand-green font-bold border-b-2 border-transparent hover:border-brand-green transition-all pb-1">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
