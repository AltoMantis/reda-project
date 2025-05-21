import Image from "next/image";
import GetInTouch from "../components/getInTouch";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-[#323F48]">
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/image-aboutUs.jpg" 
                        alt="About Us" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                            About Us
                        </span>
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 mb-20">
                    <h2 className="text-4xl font-bold text-white mb-8">HISTORY</h2>
                    <p className="text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
  Founded in 1990 in Casablanca, Cayla is a certified textile laboratory specializing in the development, production, and export of high-quality textile solutions. With over 30 years of experience, Cayla has established itself as a trusted partner in the textile industry, combining traditional expertise with a forward-looking approach to innovation.

  Driven by a strong commitment to research and development, we continuously explore new methods and sustainable materials to meet the highest standards of quality, safety, and environmental responsibility. Our dedicated technical teams work closely with clients to create custom solutions for garment dyeing, denim finishing, and textile treatment.

  Located at the heart of Morocco&apos;s industrial capital, Cayla serves both local and international markets, exporting to more than 10 countries. We are proud to support the entire textile value chain with certified, responsibly sourced products — designed for performance and developed with purpose.

  At Cayla, innovation is not a trend — it&apos;s our foundation.
</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12">
                        <h3 className="text-3xl font-bold text-white mb-8">We currently support the full textile value chain, from raw materials to finished products.</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-lg text-white/90 leading-relaxed font-light">
                                    Development of sustainable products and processes and commitment to international certifications
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-lg text-white/90 leading-relaxed font-light">
                                    Knowledge and mentoring technical and production teams
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-lg text-white/90 leading-relaxed font-light">
                                    Customer proximity developing profound relationship and mutual growth
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative h-[500px] rounded-2xl overflow-hidden">
                        <Image 
                            src="/images/abous-us-image-2.jpg" 
                            alt="About Us" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            <GetInTouch />
        </main>
    )
}