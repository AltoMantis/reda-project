import Image from 'next/image';
import GetInTouch from '../components/getInTouch';

export default function GreennovativePage() {
    return (
      <main className="min-h-screen bg-[#323F48]">
        <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="/images/parc-d-herbe.jpg" 
                    alt="Greennovative" 
                    fill 
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                        Greennovative
                    </span>
                </h1>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 mb-20">
                <p className="text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
                    Our innovation is driven by purpose: enhancing textile excellence through sustainability.

                    Our deep expertise in textile production, combined with a strong commitment to research and development, forms the foundation of our responsible innovation. By integrating advanced processes with sustainable practices, we deliver high-performance textile solutions for forward-thinking partners across the industry.
                </p>
            </div>

            <div className="relative h-[600px] mb-20 rounded-2xl overflow-hidden">
                <Image 
                    src="/images/green-eau.jpg" 
                    alt="Greennovative" 
                    fill 
                    className="object-cover"
                />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 mb-20">
                <p className="text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
                    We strongly support reducing energy and water by developing products that encourage the shift to more sustainable textile production.

                    Pretreatment, dyeing, and finishing can be carried out by preserving water through the use of chemicals free from harmful substances, certified, and from responsible sourcing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image 
                        src="/images/green-feuille.jpg" 
                        alt="Greennovative" 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12">
                    <p className="text-2xl text-white/90 leading-relaxed font-light">
                        The synergy between optimized use of chemicals and shorter production processes is the key to a successful production and recognized greennovative transition.
                    </p>
                </div>
            </div>
        </div>

        <GetInTouch />
      </main>
    );
  }