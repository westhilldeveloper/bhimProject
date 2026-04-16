'use client';

import { useEffect, useState } from 'react';

export default function OngoingProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const project1 = {
    title: 'Samakhiali–Gandhidham Tollways Ltd. (L&T IDPL)',
    description1: 'We are currently providing 110 manpower personnel for this ongoing project in Samakhiali, Gujarat since January 2017. The workforce supports toll and infrastructure operations.',
    description2: 'Our long-term involvement highlights our reliability and consistent performance. We continue to ensure smooth operations and high service standards.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };

  const project2 = {
    title: 'Shree Jagannath Expressway Pvt. Ltd. (MAPLE)',
    description1: 'This ongoing project in Cuttack, Odisha involves deploying 80 manpower resources since July 2022.',
    description2: 'Our team ensures efficient operations and maintains productivity. We continue to support the project with dedication and professionalism.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };

  const project3 = {
    title: 'NCR Eastern Peripheral Expressway Pvt. Ltd. (MAPLE)',
    description1: 'We are managing a large workforce of 567 personnel across 9 toll plazas in Haryana and Uttar Pradesh since November 2022.',
    description2: 'This project showcases our capability to handle large-scale manpower deployment. We ensure coordination, efficiency, and uninterrupted operations across all locations.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };

  const project4 = {
    title: 'Shagun Farms (BTTS)',
    description1: 'We are providing 50 manpower personnel for this project in Chattarpur, New Delhi since March 2012.',
    description2: 'Our long-term association reflects trust and consistent service quality. We continue to support operations with reliability and efficiency.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };

  const slides = [project1, project2, project3, project4];

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
    src="/images/serv_1.png"
    alt="ongoing project"
    className="h-full w-full object-cover"
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
                        <div className="flex h-[72px] w-full max-w-[267px] items-center justify-center rounded-[6px] bg-[#f1f1f1] text-[10px] text-[#7c7c7c] md:h-[82px]">
                          Company logo
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