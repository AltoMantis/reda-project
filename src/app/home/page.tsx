'use client'
import Link from 'next/link';
import Image from 'next/image';
import GetInTouch from '../components/getInTouch';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#323F48]">
      <div className="container mx-auto px-4 py-4 h-[80vh] flex flex-col justify-center items-center text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div className="relative z-10">
          <h3 className="text-6xl font-black text-white mb-12 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
              The Company
            </span>
          </h3>
          <p className="text-2xl text-white/90 max-w-3xl leading-relaxed font-light mb-12">
            Founded in 1990 in Casablanca, Cayla is a certified Moroccan textile laboratory specializing in production, innovation, and international distribution. With a strong focus on research and development, we continuously improve materials and processes to meet the highest standards of quality, safety, and sustainability.

            Cayla proudly exports its expertise to over 10 countries, serving the full textile value chain — from raw materials to finished garments — with precision and purpose.
          </p>
          <Link 
            href="/contacts" 
            className="group bg-white/30 backdrop-blur-md hover:bg-white/40 text-white px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg font-medium inline-flex"
          >
            <span>Contact us</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="innovation bg-[#E5E5E1] flex justify-between items-center p-8 h-[800px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
        <div className="flex flex-col items-center text-center max-w-xl ml-20 relative z-10">
          <h3 className="text-6xl font-black text-gray-800 mb-12 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
              Innovation & Technology
            </span>
          </h3>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
            Cayla is committed to innovation and research, with a focus on sustainable practices and the development of new materials.
          </p>
          <Link 
            href="/laboratories" 
            className="group bg-gray-800/20 backdrop-blur-md hover:bg-gray-800/30 text-gray-800 px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg font-medium"
          >
            <span>See more</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <div className="relative z-10">
          <Image 
            src="/images/image-homepage-1.jpg" 
            alt="Innovation" 
            width={600} 
            height={400} 
            className="w-[600px] h-[500px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
      <div className="green relative overflow-hidden"
style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/parc-d-herbe.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '700px',
}}
>
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
    <div className="relative flex flex-col items-start pl-[20%] pt-40 max-w-2xl">
        <h3 className="text-6xl font-black text-white mb-12 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                Greennovative
            </span>
        </h3>
        <p className="text-2xl text-white/90 max-w-xl mb-12 leading-relaxed font-light">
            Our speciality chemicals meet the strictest standards of main certifications bodies.
        </p>
        <Link 
            href="/greennovative" 
            className="group bg-white/30 backdrop-blur-md hover:bg-white/40 text-white px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg font-medium"
        >
            <span>Discover more</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
    </div>
</div>
<GetInTouch />

    </div>
  );
}