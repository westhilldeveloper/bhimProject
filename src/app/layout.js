import './globals.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Bhim Group Construction',
  description: 'Construction company website',
  icons: {
    icon: '/images/logo1.png',
    shortcut: '/images/logo1.png',
    apple: '/images/logo1.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="min-h-screen bg-[#FFFFFF] text-[#161616]">
          <div className="mx-auto max-w-full bg-[#e7e4e1]">
            <Header />

            {/* Hero Image with Overlay Button */}
            <div className="relative w-full">
              <img
                src="/images/hero.jpeg"
                alt="about"
                className="w-full h-auto" // responsive, full width, maintain aspect ratio
              />
             <div className="absolute md:left-[8%] left-[8%] top-[50%] flex items-center justify-center">
  <a
    href="https://www.bheemagroup.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#D9A441] font-bold text-white rounded-md hover:bg-[#c8933a] transition inline-block shadow-lg
               text-xs sm:text-sm md:text-base
               px-2 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2"
  >
    Visit Bheema Group
  </a>
</div>
            </div>

            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}