import { X } from 'lucide-react';

export default function RequestCallbackModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white w-full max-w-md sm:max-w-2xl rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="px-4 py-3 sm:p-6 flex justify-between items-center border-b">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                        Request a Call Back
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
                    >
                        <X size={20} className="sm:size-6" />
                    </button>
                </div>

                {/* Form */}
                <form
                    className="px-4 py-4 sm:p-8 space-y-4 sm:space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onClose();
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <input
                            required
                            placeholder="First Name"
                            className="input"
                        />
                        <input
                            required
                            placeholder="Last Name"
                            className="input"
                        />
                    </div>

                    <input
                        required
                        type="tel"
                        placeholder="Mobile Number"
                        className="input"
                    />

                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="input"
                    />

                    <select className="input">
                        <option>- Select Hospital -</option>
                        <option>Fortis Hospital, Gurgaon</option>
                        <option>Fortis Hospital, Noida</option>
                        <option>Fortis C-Doc, Delhi</option>
                    </select>

                    <textarea
                        rows="3"
                        placeholder="Comments"
                        className="input resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-[#F3DCD5] hover:bg-[#EBD2CB] text-gray-800 font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all"
                    >
                        Request a Call Back
                    </button>
                </form>
            </div>
        </div>
    );
}
