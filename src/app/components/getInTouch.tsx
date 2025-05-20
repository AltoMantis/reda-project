export default function GetInTOuch() {
    return (
        <div className="get-in-touch flex flex-col items-center justify-center min-h-[600px] bg-[#323F48] text-white text-center">
            <h2 className="text-5xl font-extrabold mb-[120px] mt-16">Get in Touch</h2>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-md mb-12 text-lg transition-all duration-300 hover:scale-105">
                Contact Us
            </button>
            
            <div className="w-48 h-[2px] bg-white/30 my-12"></div>
            
            <div className="adress flex flex-col items-center max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-center">
                            <strong>bennani.a@caylamaroc.com</strong>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-center">
                            <strong>+212 661 993 93 93</strong>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-center">
                            <strong>Casablanca, Morocco</strong>
                        </p>
                    </div>
                </div>
                
                <div className="w-full h-[1px] bg-white/20 mb-8"></div>
                
                <div className="flex flex-col items-center">
                    <p className="text-white/70 mb-4">2025 Cayla. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white/70 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}