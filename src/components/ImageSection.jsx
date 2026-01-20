export default function ImageSection() {
    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        World-Class Healthcare Facilities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        Experience state-of-the-art medical infrastructure designed for your comfort and care
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Large Featured Image */}
                    <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                            alt="Modern Hospital Building"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Advanced Medical Infrastructure</h3>
                                <p className="text-sm text-gray-200">Equipped with cutting-edge technology</p>
                            </div>
                        </div>
                    </div>

                    {/* Smaller Images */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80"
                            alt="Medical Equipment"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold">Advanced Equipment</h3>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80"
                            alt="Patient Care"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold">Compassionate Care</h3>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80"
                            alt="Operating Room"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold">Modern Operating Theaters</h3>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                            alt="Hospital Reception"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold">Welcoming Environment</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
