import { X } from 'lucide-react';

export default function RequestCallbackModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="p-6 flex justify-between items-center border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800">Request a Call Back</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-800"
                    >
                        <X size={24} strokeWidth={3} />
                    </button>
                </div>

                {/* Form Body */}
                <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">First Name<span className="text-red-500">*</span></label>
                            <input
                                required
                                type="text"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Last Name<span className="text-red-500">*</span></label>
                            <input
                                required
                                type="text"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
                        <input
                            required
                            type="tel"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Email<span className="text-red-500">*</span></label>
                        <input
                            required
                            type="email"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Hospital Name<span className="text-red-500">*</span></label>
                        <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                            <option>-Select Hospital-</option>
                            <option>Fortis Hospital, Gurgaon</option>
                            <option>Fortis Hospital, Noida</option>
                            <option>Fortis C-Doc, Delhi</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Comments</label>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#F3DCD5] hover:bg-[#EBD2CB] text-gray-800 font-bold py-4 rounded-xl transition-all shadow-sm hover:shadow-md"
                    >
                        Request a Call Back
                    </button>
                </form>
            </div>
        </div>
    );
}
