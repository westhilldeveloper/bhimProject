'use client';

import { useState, useEffect } from 'react';

export default function Leadership({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  if (!slides.length) return null;

  const totalSlides = slides.length;

  const getMemberDetails = (service, idx) => {
    if (idx === 0) {
      return {
        name: 'Colonel Ram Niwas (Retd.)',
        designation: 'General Manager – Office Administration & Operations',
        paragraphs: [
          "“At Bhim Secure Solutions, discipline, integrity, and operational excellence form the backbone of everything we do. With years of experience in administration and leadership, I strongly believe that a well-managed workforce and a structured operational system are essential for delivering quality services. Our organization is committed to maintaining professionalism at every level while ensuring that our clients receive reliable and efficient manpower solutions.”",
          "“We continuously focus on building a strong operational framework that supports smooth coordination, accountability, and timely execution across all projects. From workforce management to administrative efficiency, every aspect of our operations is handled with dedication and attention to detail. Our aim is to create a work culture that encourages responsibility, teamwork, and continuous improvement.”",
          "“As we move forward, we remain dedicated to strengthening our services and maintaining the trust of our clients through consistency and commitment. We take pride in supporting businesses with dependable manpower solutions and look forward to contributing to many more successful projects in the years ahead.”"
        ]
      };
    } else {
     return {
        name: 'Kamal Basumatari',
        designation: `General Manager – Head of Sales & Operations\nVertical: Facility Management & Construction`,
        paragraphs: [
          "“At Bhim Secure Solutions, our goal has always been to deliver dependable manpower and facility management services that create real value for our clients. We understand that every project requires not only skilled manpower but also commitment, discipline, and operational excellence. Our team works tirelessly to ensure that we meet the expectations of our clients while maintaining the highest standards of professionalism and service quality.”",
          "“With years of experience in the facility management and construction sector, we have built a strong foundation based on trust, consistency, and long-term partnerships. We believe in understanding the unique requirements of every client and providing customized solutions that support smooth operations and project success. Our focus remains on continuous improvement, workforce development, and maintaining operational efficiency across every assignment we undertake.”",
          "“As we continue to grow, our commitment remains unchanged, to provide reliable services, strengthen client relationships, and contribute to the success of every project we are associated with. We are proud of the trust our clients place in us and remain dedicated to delivering excellence through teamwork, innovation, and a customer-first approach.”"
        ]
      }; 
    }
  };

  const openModal = (service, idx) => {
    const details = getMemberDetails(service, idx);
    setSelectedMember({
      image: service.image,
      name: details.name,
      designation: details.designation,
      paragraphs: details.paragraphs
    });
    setModalOpen(true);
    setIsClosing(false);
    setIsOpening(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
      setSelectedMember(null);
    }, 300);
  };

  // Trigger open animation after modal is mounted
  useEffect(() => {
    if (modalOpen && isOpening) {
      // Small delay to ensure the DOM has rendered with scale-0
      const timer = setTimeout(() => {
        setIsOpening(false);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [modalOpen, isOpening]);

  return (
    <section className="bg-[#E5E0DF] px-4 py-12 text-center sm:px-6 md:px-10 lg:px-12 lg:py-16">
      <h2 className="text-[34px] font-semibold leading-none tracking-tight sm:text-[40px] md:text-[44px] lg:text-[48px]">
        Leadership
      </h2>

      <p className="mx-auto mt-4 max-w-full text-[12px] leading-5 text-[#444] sm:text-[13px] md:text-[14px]">
        The leadership at Bhim Secure Solutions is driven by experience, dedication, and a strong vision for excellence. Since the company’s establishment in 2009, our leadership team has focused on building a culture of professionalism, accountability, and customer satisfaction. Through strategic planning, efficient management, and a commitment to quality service, they continue to guide the organization toward sustainable growth while ensuring that every client receives dependable and result-oriented manpower solutions.
      </p>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full shrink-0">
              <div className="grid grid-cols-1 gap-2 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
                {slide.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex w-full max-w-sm flex-col rounded-[18px] bg-white p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-square w-full rounded-[16px] object-cover"
                    />
                    <h3 className="mt-5 text-[20px] font-medium sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[12px] leading-5 text-[#555] sm:text-[13px]">
                      {service.description}
                    </p>
                    <button
                      onClick={() => openModal(service, idx)}
                      className="mt-8 w-full rounded-full border border-[#765640] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[#f4eee5] sm:text-[15px] md:text-[16px]"
                    >
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots / Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to services slide ${index + 1}`}
            className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'scale-110 bg-[#8b6335]' : 'bg-white'
            }`}
          />
        ))}
      </div>

      {/* MODAL WITH OPEN ANIMATION (GROWS FROM ZERO) */}
      {modalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isClosing ? 'bg-black/0' : 'bg-black/50'
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 ${
              isClosing
                ? 'scale-0 opacity-0'
                : isOpening
                ? 'scale-0 opacity-0'
                : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-2xl text-gray-500 transition-colors hover:text-gray-800"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Modal content */}
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="mb-4 h-48 w-48 rounded-full object-cover shadow-md"
              />
              <h3 className="text-2xl font-semibold text-[#333]">
                {selectedMember.name}
              </h3>
              <p className="mt-1 whitespace-pre-line text-sm text-[#555]">
                {selectedMember.designation}
              </p>
              <div className="mt-6 space-y-4 text-left">
                {selectedMember.paragraphs.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-[#444]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}