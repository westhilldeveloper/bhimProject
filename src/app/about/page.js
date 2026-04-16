import About from '@/components/About';
import ImageStrip from '@/components/ImageStrip';
import LeadershipPage from '@/components/LeadershipPage';
import Process from '@/components/Process';
import Services from '@/components/Services';
import TeamMembers from '@/components/TeamMembers';

export default function AboutPage() {
  

  return (
    <>
      <About
        title="About Us"
        subTitle="Company Overview"
       
        showImages={false}
      >
         {/* <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6 first:mt-0">
        Company Overview
      </h3> */}
      <p>
       Bhim Secure Solutions is a trusted name in workforce and facility management services, dedicated to delivering reliability, professionalism, and excellence. Incorporated on 9th July 2009, we have built a strong foundation over the years by consistently meeting the evolving needs of businesses across industries. Our commitment lies in providing dependable manpower and support services that help organizations operate smoothly and efficiently.
      </p>
      <p>
        With a diverse portfolio of services, we specialize in Corporate Housekeeping Services, Construction Manpower & Labour Supply, and Security Services. We also provide essential support staff including pantry personnel, helpers, packers & pickers, ensuring that day-to-day operations are handled with care and precision. Our workforce is trained, disciplined, and aligned with industry standards, allowing our clients to focus on their core business while we manage their operational needs.
      </p>
      <p>Understanding the importance of care and assistance in both corporate and personal environments, we also offer Nursing Assistants and Doctor Attendants. Our healthcare support staff is carefully selected and trained to provide compassionate and professional assistance, ensuring comfort, safety, and well-being. Whether it’s for healthcare facilities or individual needs, we bring a human touch to every service we provide.</p>
      <p>At Bhim Secure Solutions, our mission is to empower businesses with reliable manpower solutions while maintaining the highest standards of integrity and service quality. Over the years, we have earned the trust of our clients through consistency, transparency, and a customer-first approach. As we continue to grow, we remain committed to delivering value-driven services that create lasting partnerships and drive success for our clients.</p>

      <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6">
        Leadership
      </h3>
      <p>
       Our leadership at Bhim Secure Solutions is driven by vision, experience, and a deep commitment to excellence. With years of industry expertise since our incorporation in 2009, our leadership team focuses on building strong client relationships, maintaining high service standards, and continuously improving our operations. They believe in empowering people, fostering accountability, and creating a culture of trust and professionalism. Through strategic planning and hands-on involvement, our leaders ensure that every service we deliver reflects quality, reliability, and our core values of integrity and customer satisfaction.
      </p>

      <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6">
        Founder's Message
      </h3>
      <p>
        At Bhim Secure Solutions, our journey began with a simple vision: to provide reliable, professional, and trustworthy manpower solutions that truly make a difference in people’s lives and businesses. Since our establishment on 9th July 2009, we have remained committed to building a company that stands on the pillars of integrity, quality, and dedication. Every service we offer is a reflection of our belief that the right people and the right approach can transform operations and create lasting value.
      </p>
      <p>
        I strongly believe that success comes from empowering individuals and creating opportunities for growth. Whether it is supporting businesses with skilled manpower or helping individuals find meaningful employment, our goal has always been to contribute positively to society. As we continue to grow, we remain focused on delivering excellence, nurturing long-term relationships, and upholding the trust our clients place in us every day.
      </p>
      <p>
        __________, Founder
      </p>

      <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6">
        Why Choose Us
      </h3>
      <p>
        Choosing Bhim Secure Solutions means partnering with a company that values reliability, quality, and long-term relationships. With over a decade of industry experience since 2009, we understand the importance of delivering the right people for the right job. Our focus is not just on providing manpower, but on delivering dependable solutions that enhance efficiency, reduce operational stress, and support your business growth with professionalism and trust.
      </p>
      
        <h1 className="text-md font-semibold text-[#1a1a1a]">Experienced & Trusted Since 2009</h1> <p> With years of proven experience, we have developed a deep understanding of various industries and their workforce requirements. Our long-standing presence reflects our commitment to consistency, reliability, and client satisfaction.</p>
        <h1 className="text-md font-semibold text-[#1a1a1a]">Skilled & Verified Workforce</h1> <p> We ensure that every individual we deploy is properly trained, verified, and aligned with job requirements. This helps maintain high standards of service quality and ensures smooth operations for our clients.</p>
        <h1 className="text-md font-semibold text-[#1a1a1a]">Comprehensive Service Offering</h1> <p> From housekeeping and security to construction labour and healthcare support, we provide a wide range of services under one roof. This makes us a one-stop solution for all your manpower and facility needs.</p>
        <h1 className="text-md font-semibold text-[#1a1a1a]">Client-Centric Approach</h1> <p> We prioritize our clients’ needs and tailor our services accordingly. Our team works closely with you to understand your requirements and deliver solutions that are efficient, flexible, and result-driven.</p>
      
        </About>

   <LeadershipPage/>
      <TeamMembers />
      <ImageStrip />
      <Process />
    </>
  );
}