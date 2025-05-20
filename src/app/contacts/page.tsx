import GetInTouch from "../components/getInTouch";

export default function ContactsPage() {
    return (
      <main className="min-h-screen bg-[#323F48]">
        <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                        Contact Us
                    </span>
                </h1>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        ADDRESS
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        11 Rue de Neufchatel, Belvédère 20300 Casablanca, Morocco
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        PHONE
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        +212 661 99 00 00
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        EMAIL
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        contact@cayla.com
                    </p>
                </div>
            </div>
        </div>

        <GetInTouch />
      </main>
    );
  }