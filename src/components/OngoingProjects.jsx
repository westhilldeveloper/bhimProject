'use client';

import { useEffect, useState } from 'react';

export default function OngoingProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const project1 = {
    title: 'NCC – Commercial Buildings (Gurugram, Haryana)',
    description1: 'We are currently providing construction manpower for NCC’s commercial building project located in Sector-43, Gurugram, Haryana. Our workforce is actively involved in supporting various construction activities, ensuring that operations run smoothly and efficiently on-site.',
    description2: 'Our team focuses on maintaining discipline, safety, and productivity throughout the project. By deploying trained manpower aligned with project requirements, we help NCC achieve timely progress and maintain high construction standards.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
    image:'/images/project/proj1.jpeg',
    logo:'/images/cmp_logo/NCC_Ltd.png'
    
  };

  const project2 = {
    title: 'Suryapriya Constructions – Building Projects (Bengaluru, Karnataka)',
    description1: 'For Suryapriya Constructions, we are supplying industrial construction manpower at Brigade Signature Towers, located on Old Madras Road, Kattamnallur, Sannatammanahalli, Bengaluru. Our workforce supports a wide range of construction operations across this large-scale project.',
    description2: 'We ensure that all personnel are well-trained and capable of handling site responsibilities efficiently. Our consistent manpower supply helps maintain workflow continuity and contributes to the successful execution of the project.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
    image:'/images/project/proj2.jpeg',
    logo:'/images/cmp_logo/Suryapriya.png'
  };

  const project3 = {
    title: 'KEC International – Brigade Calista Projects (Bengaluru, Karnataka)',
    description1: 'We are currently working with KEC International by providing construction manpower for the Brigade Calista project located in Cheemasandra, Bengaluru, Karnataka. Our team plays a key role in supporting daily construction operations.',
    description2: 'With a focus on quality and efficiency, we ensure that our workforce meets the demands of the project. Our involvement helps streamline operations, maintain productivity, and support the client in achieving project milestones effectively.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
    image:'/images/project/bidge3.jpg',
    logo:'/images/cmp_logo/KEC_Int.png'
  };

 
  const slides = [project1, project2, project3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#E5E0DF] px-4 py-8 md:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-full">
        <h2 className="text-center text-[28px] font-semibold leading-none text-black md:text-[40px]">
          Ongoing Project
        </h2>

        <p className="mx-auto mt-4 max-w-full text-center text-[10px] leading-[1.35] text-[#3f3f3f] md:text-[14px]">
          Our ongoing projects demonstrate our continuous commitment to delivering reliable manpower solutions for large-scale infrastructure and commercial operations. We actively support multiple high-value projects across India, ensuring efficiency, consistency, and quality service delivery. These projects reflect our ability to build long-term partnerships and sustain operational excellence.
        </p>

        <div className="relative mt-6 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full shrink-0">
                <div className="mx-auto rounded-[12px] bg-white px-4 py-4 shadow-sm md:px-5 md:py-5">
                  {/* Stack vertically on small screens, side-by-side on large */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
                    {/* Image - full width on mobile, fixed width on desktop */}
                    <div className="flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#f7f7f7] md:h-[220px] md:w-full lg:h-[320px] lg:w-[312px]">
  <img
    src={slide.image}
    alt="ongoing project"
    className="h-full w-full object-fill"
  />
</div>

                    {/* Content - takes remaining space */}
                    <div className="w-full flex-1 pt-1">
                      <h3 className="text-[18px] font-medium leading-tight text-black md:text-[28px]">
                        {slide.title}
                      </h3>

                      <p className="mt-3 max-w-full text-[10px] leading-[1.4] text-[#555] md:text-[14px]">
                        {slide.description1}
                      </p>

                      <p className="mt-2 max-w-full text-[10px] leading-[1.4] text-[#555] md:text-[14px]">
                        {slide.description2}
                      </p>

                      {/* Points and logo - stack on mobile, side-by-side on tablet/desktop */}
                      <div className="mt-6 flex flex-col gap-5 md:mt-8 md:flex-row md:items-end md:justify-between lg:mt-12">
                        <ul className="space-y-2">
                          {slide.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-center gap-2 text-[12px] font-medium text-black md:text-[16px]"
                            >
                              <span className="flex h-[16px] w-[16px] items-center justify-center bg-[#8b6335] text-[10px] leading-none text-white">
                                ✓
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Logo container - responsive width */}
                        <div className="flex h-[72px] w-full max-w-[167px] items-center justify-center rounded-[6px] bg-[#f1f1f1] text-[10px] text-[#7c7c7c] md:h-[82px]">
                        <img
    src={slide.logo}
    alt="ongoing project"
    className="h-full w-full "
  />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3.5 w-3.5 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#8b6335]' : 'bg-[#f0ece6]'
              }`}
              aria-label={`Go to ongoing project slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}