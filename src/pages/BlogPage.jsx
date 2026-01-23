import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  Heart, 
  Globe, 
  Activity, 
  Users, 
  Clock,
  BookOpen,
  TrendingUp,
  Shield,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Share2,
  Eye,
  ThumbsUp
} from 'lucide-react';
import { useState } from 'react';

// Blog posts data with more details
const blogPosts = [
    {
        id: 1,
        title: "10 Tips for a Healthy Heart",
        excerpt: "Simple lifestyle changes that can significantly reduce your risk of cardiovascular diseases.",
        content: `Cardiovascular diseases remain the leading cause of death globally, but with simple lifestyle modifications, you can significantly reduce your risk. Regular exercise, a balanced diet rich in omega-3 fatty acids, stress management, and regular health check-ups are key to maintaining heart health. Our cardiologists recommend at least 150 minutes of moderate exercise weekly and regular monitoring of blood pressure and cholesterol levels.`,
        date: "Jan 15, 2026",
        readTime: "5 min read",
        category: "Safety & Health",
        categoryIcon: Shield,
        categoryColor: "bg-sky-100 text-sky-700",
        image: "https://images.unsplash.com/photo-1505751172107-573225a943d0?auto=format&fit=crop&w=1200&q=80",
        author: "Dr. Priya Sharma",
        authorRole: "Senior Cardiologist",
        views: 2450,
        likes: 312,
        tags: ["Heart Health", "Cardiology", "Prevention"]
    },
    {
        id: 2,
        title: "Benefits of Medical Travel in India",
        excerpt: "Why thousands of patients choose India for world-class affordable healthcare every year.",
        content: `India has emerged as a global hub for medical tourism, offering world-class healthcare at significantly lower costs. Patients from over 78 countries choose Indian hospitals for complex procedures like cardiac surgeries, organ transplants, and orthopedic treatments. The combination of highly qualified medical professionals, state-of-the-art technology, and holistic healing environments makes India an attractive destination for medical travelers.`,
        date: "Jan 12, 2026",
        readTime: "7 min read",
        category: "Medical Tourism",
        categoryIcon: Globe,
        categoryColor: "bg-emerald-100 text-emerald-700",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80",
        author: "Medical Tourism Team",
        authorRole: "Patient Care Coordinators",
        views: 3180,
        likes: 456,
        tags: ["Medical Tourism", "Affordable Care", "International Patients"]
    },
    {
        id: 3,
        title: "Recovering After Cardiac Surgery",
        excerpt: "A comprehensive guide on what to expect during your recovery phase post heart surgery.",
        content: `Recovery after cardiac surgery requires careful planning and dedicated care. The first 6-8 weeks are crucial for healing. Patients should follow a graduated exercise program, maintain a heart-healthy diet, attend all follow-up appointments, and watch for signs of complications. Emotional support and cardiac rehabilitation programs significantly improve recovery outcomes and quality of life post-surgery.`,
        date: "Jan 08, 2026",
        readTime: "6 min read",
        category: "Recovery",
        categoryIcon: Activity,
        categoryColor: "bg-violet-100 text-violet-700",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
        author: "Dr. Anil Kumar",
        authorRole: "Cardiac Surgeon",
        views: 1950,
        likes: 289,
        tags: ["Recovery", "Cardiac Care", "Rehabilitation"]
    },
    {
        id: 4,
        title: "Advances in Minimally Invasive Surgery",
        excerpt: "How robotic surgery is revolutionizing patient recovery and outcomes.",
        content: `Minimally invasive robotic surgery has transformed surgical care, offering smaller incisions, reduced pain, faster recovery, and better cosmetic results. With 3D visualization and enhanced precision, surgeons can perform complex procedures with unprecedented accuracy. Patients benefit from shorter hospital stays and quicker return to normal activities compared to traditional open surgery.`,
        date: "Jan 05, 2026",
        readTime: "8 min read",
        category: "Technology",
        categoryIcon: TrendingUp,
        categoryColor: "bg-amber-100 text-amber-700",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
        author: "Dr. Neha Patel",
        authorRole: "Robotic Surgery Specialist",
        views: 2780,
        likes: 345,
        tags: ["Robotic Surgery", "Technology", "Innovation"]
    },
    {
        id: 5,
        title: "Managing Diabetes with Lifestyle Changes",
        excerpt: "Evidence-based strategies for controlling diabetes without excessive medication.",
        content: `Type 2 diabetes management extends beyond medication. Dietary modifications, regular physical activity, stress reduction, and adequate sleep play crucial roles in glycemic control. Recent studies show that consistent lifestyle changes can reduce HbA1c levels by up to 1.5% and decrease dependency on medication for many patients.`,
        date: "Jan 02, 2026",
        readTime: "5 min read",
        category: "Chronic Care",
        categoryIcon: Heart,
        categoryColor: "bg-rose-100 text-rose-700",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
        author: "Dr. Rajesh Mehta",
        authorRole: "Endocrinologist",
        views: 2210,
        likes: 298,
        tags: ["Diabetes", "Lifestyle", "Wellness"]
    },
    {
        id: 6,
        title: "Mental Health in Medical Recovery",
        excerpt: "The importance of psychological support during physical healing processes.",
        content: `Physical recovery is deeply connected to mental well-being. Patients dealing with chronic illness or recovering from surgery often experience anxiety, depression, or PTSD. Integrating psychological support with medical treatment significantly improves recovery rates, reduces hospital readmissions, and enhances overall quality of life during the healing journey.`,
        date: "Dec 28, 2025",
        readTime: "6 min read",
        category: "Mental Health",
        categoryIcon: Users,
        categoryColor: "bg-indigo-100 text-indigo-700",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        author: "Dr. Sunita Rao",
        authorRole: "Clinical Psychologist",
        views: 1890,
        likes: 267,
        tags: ["Mental Health", "Wellness", "Recovery"]
    }
];

// Categories for sidebar
const categories = [
    { name: "Safety & Health", count: 24, icon: Shield },
    { name: "Medical Tourism", count: 18, icon: Globe },
    { name: "Recovery", count: 32, icon: Activity },
    { name: "Technology", count: 15, icon: TrendingUp },
    { name: "Chronic Care", count: 21, icon: Heart },
    { name: "Mental Health", count: 16, icon: Users }
];

// Popular tags
const popularTags = [
    "Heart Health", "Prevention", "Medical Tourism", "Recovery", "Robotic Surgery", 
    "Diabetes", "Mental Wellness", "Nutrition", "Exercise", "Patient Stories"
];

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleReadMore = (post) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPost(null);
    };

    const handleShare = (post) => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-sky-50/20 to-white">
            <Header />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30"></div>
                    <div className="absolute inset-0 bg-grid-sky-100/20 [mask-image:radial-gradient(white,transparent_70%)]"></div>
                    
                    <div className="container relative mx-auto px-4 lg:px-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-sky-100/60 rounded-full border border-sky-200/50">
                                <BookOpen size={16} className="text-sky-600" />
                                <span className="text-sm font-semibold text-sky-700">Health Insights</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-sky-600 bg-clip-text text-transparent">
                                Health Blog & Insights
                            </h1>
                            
                            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Expert articles, health tips, and patient stories to guide you through your medical journey.
                            </p>
                            
                            <div className="flex flex-wrap gap-3 justify-center">
                                <button className="px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                                    <MessageSquare size={18} />
                                    Subscribe for Updates
                                </button>
                                <button className="px-6 py-3 bg-white border border-sky-200 text-sky-700 rounded-xl font-semibold hover:bg-sky-50 shadow-sm transition-all duration-300 flex items-center gap-2">
                                    <Share2 size={18} />
                                    Share This Page
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Main Blog Posts */}
                            <div className="lg:col-span-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {blogPosts.map((post) => {
                                        const CategoryIcon = post.categoryIcon;
                                        return (
                                            <article 
                                                key={post.id} 
                                                className="group bg-white rounded-2xl overflow-hidden border-2 border-sky-100 hover:border-sky-300 shadow-lg hover:shadow-2xl transition-all duration-300"
                                            >
                                                {/* Image Container */}
                                                <div className="relative h-64 overflow-hidden">
                                                    <div className="absolute top-4 left-4 z-10">
                                                        <span className={`inline-flex items-center gap-1.5 ${post.categoryColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                                                            <CategoryIcon size={12} />
                                                            {post.category}
                                                        </span>
                                                    </div>
                                                    <img 
                                                        src={post.image} 
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-8">
                                                    {/* Meta Info */}
                                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                        <div className="flex items-center gap-1.5">
                                                            <Calendar size={14} />
                                                            {post.date}
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <Clock size={14} />
                                                            {post.readTime}
                                                        </div>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-sky-700 transition-colors line-clamp-2">
                                                        {post.title}
                                                    </h3>

                                                    {/* Excerpt */}
                                                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                                                        {post.excerpt}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {post.tags.slice(0, 2).map((tag, idx) => (
                                                            <span key={idx} className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Stats and Actions */}
                                                    <div className="flex items-center justify-between pt-6 border-t border-sky-100">
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                                            <div className="flex items-center gap-1.5">
                                                                <Eye size={14} />
                                                                {post.views.toLocaleString()}
                                                            </div>
                                                            <div className="flex items-center gap-1.5">
                                                                <ThumbsUp size={14} />
                                                                {post.likes}
                                                            </div>
                                                        </div>

                                                        {/* Read More Button */}
                                                        <button
                                                            onClick={() => handleReadMore(post)}
                                                            className="flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 group/readmore transition-colors"
                                                        >
                                                            Read Full Article
                                                            <ArrowRight size={16} className="group-hover/readmore:translate-x-1 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-8">
                                    {/* Search */}
                                    <div className="bg-white rounded-2xl p-6 border-2 border-sky-100">
                                        <h3 className="text-lg font-black text-gray-900 mb-4">Search Articles</h3>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search health topics..."
                                                className="w-full px-4 py-3 bg-sky-50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
                                            />
                                            <button className="absolute right-3 top-3 text-sky-600">
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div className="bg-white rounded-2xl p-6 border-2 border-sky-100">
                                        <h3 className="text-lg font-black text-gray-900 mb-4">Categories</h3>
                                        <div className="space-y-2">
                                            {categories.map((category, idx) => {
                                                const CatIcon = category.icon;
                                                return (
                                                    <div 
                                                        key={idx}
                                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 transition-colors group/cat"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <CatIcon size={16} className="text-sky-600" />
                                                            <span className="text-gray-700 group-hover/cat:text-sky-700 transition-colors">
                                                                {category.name}
                                                            </span>
                                                        </div>
                                                        <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded">
                                                            {category.count}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Popular Tags */}
                                    <div className="bg-white rounded-2xl p-6 border-2 border-sky-100">
                                        <h3 className="text-lg font-black text-gray-900 mb-4">Popular Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {popularTags.map((tag, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-gradient-to-r from-sky-50 to-sky-100 text-sky-700 rounded-lg text-sm font-medium hover:from-sky-100 hover:to-sky-200 transition-all cursor-pointer"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Newsletter */}
                                    <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-white">
                                        <h3 className="text-lg font-black mb-3">Stay Updated</h3>
                                        <p className="text-sky-100 text-sm mb-4">
                                            Get the latest health insights delivered to your inbox.
                                        </p>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl mb-3 text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        />
                                        <button className="w-full py-3 bg-white text-sky-600 font-bold rounded-xl hover:bg-sky-50 transition-colors">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-sky-600 to-sky-500 rounded-3xl p-12 text-center text-white shadow-2xl">
                            <h2 className="text-4xl font-black mb-6">Need Medical Advice?</h2>
                            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                                Our specialists are available for personalized consultations and second opinions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-white text-sky-700 rounded-xl font-bold text-lg hover:bg-sky-50 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
                                    <MessageSquare size={20} />
                                    Consult a Specialist
                                </button>
                                <button className="px-10 py-4 bg-transparent border-2 border-white/50 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3">
                                    <ExternalLink size={20} />
                                    Browse All Articles
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Blog Post Modal */}
            {showModal && selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-sky-100 p-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">Article Preview</h3>
                                <p className="text-gray-600">Read the full article below</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-sky-50 rounded-lg transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            {/* Article Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`inline-flex items-center gap-1.5 ${selectedPost.categoryColor} text-sm font-bold px-3 py-1.5 rounded-full`}>
                                        <selectedPost.categoryIcon size={14} />
                                        {selectedPost.category}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        {selectedPost.date} • {selectedPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4">
                                    {selectedPost.title}
                                </h2>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <span>By {selectedPost.author}</span>
                                    <span>•</span>
                                    <span>{selectedPost.authorRole}</span>
                                </div>
                            </div>

                            {/* Article Image */}
                            <div className="mb-8 rounded-xl overflow-hidden">
                                <img 
                                    src={selectedPost.image} 
                                    alt={selectedPost.title}
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none mb-8">
                                <p className="text-gray-700 leading-relaxed">
                                    {selectedPost.content}
                                </p>
                            </div>

                            {/* Article Tags */}
                            <div className="mb-8">
                                <div className="text-sm font-semibold text-gray-600 mb-2">Tags:</div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedPost.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Article Stats */}
                            <div className="flex items-center justify-between py-6 border-t border-b border-sky-100">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <Eye size={18} className="text-gray-500" />
                                        <span className="font-medium">{selectedPost.views.toLocaleString()} views</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ThumbsUp size={18} className="text-gray-500" />
                                        <span className="font-medium">{selectedPost.likes} likes</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => handleShare(selectedPost)}
                                        className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors"
                                    >
                                        <Share2 size={18} />
                                        Share
                                    </button>
                                    <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold">
                                        <ExternalLink size={18} />
                                        View Full Article
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}