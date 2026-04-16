import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import ImageStrip from '@/components/ImageStrip';
import Testimonials from '@/components/Testimonials';
import ServicesPage from '@/data';

export default function Home() {
  return (
    <>
      
      <About
              title="About Us"
              subTitle="Bhim Secure Solutions Private Limited"
             
              showImages={true}
            >
              <p>
      At <b>Bhim Secure Solutions,</b> we are committed to delivering reliable, efficient, and professional workforce solutions tailored to meet the evolving needs of businesses. With a strong focus on quality and trust, we specialize in providing Corporate Housekeeping Services, Construction Manpower and Labour Supply, and Security Services that ensure smooth and secure operations for our clients. Our team is carefully selected and trained to maintain high standards of performance, helping organizations create safe, clean, and productive environments.
      </p>
      <p>Beyond core services, we also offer comprehensive support staff solutions including Pantry staff, Helpers, Packers & Pickers, Nursing Assistants, and Doctor Attendants. Whether it’s managing day-to-day operations or supporting healthcare and facility needs, Bhim Secure Solutions stands as a dependable partner dedicated to excellence and customer satisfaction. Our goal is to empower businesses with the right people, so they can focus on growth while we handle the workforce.</p>
              </About>

      {/* <Services /> */}
      <ServicesPage/>
      <Process />
      <Projects />
      <ImageStrip />
      <Testimonials />
    </>
  );
}

