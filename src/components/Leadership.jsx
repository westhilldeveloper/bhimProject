'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Leadership({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // If no slides provided, don't render carousel or show fallback
  if (!slides.length) return null;

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-[#E5E0DF] px-4 py-12 text-center sm:px-6 md:px-10 lg:px-12 lg:py-16">
      <h2 className="text-[34px] font-semibold leading-none tracking-tight sm:text-[40px] md:text-[44px] lg:text-[48px]">
        Leadership
      </h2>

      <p className="mx-auto mt-4 max-w-full text-[12px] leading-5 text-[#444] sm:text-[13px] md:text-[14px]">
       At Bhim Secure Solutions, we offer a comprehensive range of manpower and facility management services designed to support businesses across multiple industries. Our services are built around reliability, efficiency, and professionalism, ensuring that every client receives tailored solutions that meet their specific operational needs. From maintaining clean and organized workspaces to providing skilled manpower and security, we cover every essential aspect of day-to-day business operations.
      </p>

      <p className="mx-auto mt-4 max-w-full text-[12px] leading-5 text-[#444] sm:text-[13px] md:text-[14px]">
       With years of experience since our incorporation in 2009, we have developed the expertise to deliver high-quality services across sectors such as construction, corporate offices, healthcare, and more. Our team is committed to providing trained and dependable personnel who not only perform their roles efficiently but also contribute to a safe, productive, and well-managed environment.
      </p>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full shrink-0">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12">
                {slide.map((service, idx) => (
                  <div
                    key={idx}
                    className="rounded-[18px] bg-white p-4 text-left shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[320px] w-full rounded-[16px] object-cover "
                    />
                    <h3 className="mt-5 text-[20px] font-medium sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[12px] leading-5 text-[#555] sm:text-[13px]">
                      {service.description}
                    </p>
                   <Link href="/services"> <button className="mt-8 w-full rounded-full border border-[#765640] px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[#f4eee5] sm:text-[15px] md:text-[16px]">
                      Read More →
                    </button> </Link>
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
              currentSlide === index
                ? 'scale-110 bg-[#8b6335]'
                : 'bg-white'
            }`}
          />
        ))}
      </div>

      {/* Optional: Next/Prev buttons */}
      {/* <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-100"
        >
          ← Prev
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-100"
        >
          Next →
        </button>
      </div> */}
    </section>
  );
}