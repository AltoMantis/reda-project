import Image from 'next/image';
import GetInTouch from '../components/getInTouch';

export default function LaboratoriesPage() {
    return (
      <main className="min-h-screen bg-[#323F48]">
        <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="/images/image-homepage-1.jpg" 
                    alt="Laboratories" 
                    fill 
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                        Laboratories
                    </span>
                </h1>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 mb-20">
                <p className="text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
                    Our laboratories are equipped with the latest technology to ensure the highest quality of our products.
                </p>
            </div>

            <div className="relative h-[600px] mb-20 rounded-2xl overflow-hidden">
                <Image 
                    src="/images/image-laboratoire-3.jpg" 
                    alt="Laboratories" 
                    fill 
                    className="object-cover"
                />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 mb-20">
                <p className="text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
                    As the textile industry evolves at high speed, Cayla stays ahead by anticipating trends and delivering forward-thinking solutions that merge performance with sustainability.

                    This mindset gave rise to our exclusive Textile Lab, a space where design meets advanced technology to reshape the future of fabrics and finishes.

                    Our integrated R&D facility is a hub for experimentation, where expert technicians develop and test new approaches in pretreatment, dyeing, and finishing — especially for eco-conscious garment dyeing and denim treatment lines. At Cayla, innovation is hands-on, purpose-driven, and ready to scale.
                </p>
            </div>
        </div>

        <GetInTouch />
      </main>
    );
  }