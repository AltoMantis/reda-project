import Image from "next/image";
import GetInTouch from "../components/getInTouch";

export default function ServicesPage() {
    return (
      <main className="min-h-screen bg-[#323F48]">
        <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="/images/image-service-1.jpg" 
                    alt="Services" 
                    fill 
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                        Services
                    </span>
                </h1>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 mb-20">
                <p className="text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
                    We design and realize an integrated service for our partners. We are committed to offering a complete package which includes quality products, customized design, research, technical assistance, training, and after-sales service.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h2 className="text-3xl font-bold text-white mb-6">Design</h2>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        Planning is the beginning of the idea creation process. In this phase, collaboration with the customer plays a fundamental role in guaranteeing tailor-made solutions.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h2 className="text-3xl font-bold text-white mb-6">Chemical Analysis</h2>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        Our team works alongside you to understand your needs and create product and process formulations that meet your production needs. Our analytical chemistry laboratory, equipped with the latest generation instruments, is an effective support in research.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h2 className="text-3xl font-bold text-white mb-6">Technical Assistance</h2>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        Our technical assistance provides a constant support service to our customers, guaranteeing the development of projects and the resolution of technical needs. Thanks to the expertise and experience of our technical group, we offer customized solutions to improve the efficiency and quality of the production process.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <h2 className="text-3xl font-bold text-white mb-6">Training & Support</h2>
                    <p className="text-lg text-white/90 leading-relaxed font-light">
                        We offer training and support services to help you get the most out of our products. Our team is dedicated to providing you with the knowledge and resources you need to succeed.
                    </p>
                </div>
            </div>
        </div>

        <GetInTouch />
      </main>
    );
  }