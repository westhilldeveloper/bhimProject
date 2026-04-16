import './globals.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Bhim Group Construction',
  description: 'Construction company website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#FFFFFF] text-[#161616]">
          <div className="mx-auto max-w-full bg-[#e7e4e1]">
            <Header />
            <img
                         src="/images/Hero_Banner.jpg"
                         alt="about"
                         className="h-2/3 w-full "
                       />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}