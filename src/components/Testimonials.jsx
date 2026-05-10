'use client';

import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Single array of all testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Welspun',
      text: '“Bhim Secure Solutions has consistently delivered reliable manpower and housekeeping services. Their professionalism and quick response make them a valuable partner for our operations.”',
      image:"/images/cmp_logo/cmk.png"
    },
    {
      id: 2,
      name: 'L&T IDPL',
      text: '“We appreciate the quality of workforce and the level of discipline maintained by the team. Their services have significantly improved our project efficiency.”',
      image:"/images/cmp_logo/L&T.png"
    },
    {
      id: 3,
      name: 'KMC/ETA',
      text: '“The team provided by Bhim Secure Solutions is skilled, well-trained, and dependable. Their support has helped us maintain smooth and timely execution of our work.”',
      image:"/images/cmp_logo/KMC.png"
    },
    {
      id: 4,
      name: 'Sadbhav Engineering Ltd.',
      text: '“From manpower supply to on-site support, their services have been exceptional. They understand our requirements well and always deliver beyond expectations.”',
      image:"/images/cmp_logo/Sadbhav.png"
    },
  ];

  // Group testimonials into slides of 3 for desktop
  const groupedSlides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedSlides.push(testimonials.slice(i, i + 3));
  }

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-slide only on desktop
  useEffect(() => {
    if (!isDesktop) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % groupedSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isDesktop, groupedSlides.length]);

  // Desktop view: slider with grouped slides
  if (isDesktop) {
    return (
      <section className="bg-[#FFFFFF] px-6 py-14 text-center md:px-10 lg:px-12 lg:py-16">
        <h2 className="text-[48px] font-semibold leading-none tracking-tight">Testimonials</h2>

        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
           {groupedSlides.map((group, idx) => (
  <div key={idx} className="w-full shrink-0">
    <div className="grid gap-8 lg:grid-cols-3">
      {group.map((item) => (
        <div
          key={item.id}
          className="rounded-[18px] bg-[#FFF6EB] px-6 py-8 shadow-sm"
        >
          <div className="mx-auto h-[108px] w-[148px] overflow-hidden rounded-md bg-[#d7a544]">
            <img 
              src={item.image} 
              alt={item.name} 
              className="h-full w-full object-fill"
            />
          </div>
          <h3 className="mt-6 text-[22px] font-medium">{item.name}</h3>
          <p className="mx-auto mt-4 max-w-[260px] text-[12px] leading-5 text-[#555]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {groupedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3.5 w-3.5 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#8b6335]' : 'bg-[#e8dcc6]'
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }

  // Mobile/tablet view: horizontal scroll (swipe) – each card individually
  return (
    <section className="bg-[#FFFFFF] px-6 py-14 text-center md:px-10">
      <h2 className="text-[48px] font-semibold leading-none tracking-tight">Testimonials</h2>

      <div className="mt-10 overflow-x-auto scroll-smooth pb-4" style={{ scrollSnapType: 'x mandatory' }}>
        <div className="flex gap-6">
         {testimonials.map((item) => (
  <div
    key={item.id}
    className="min-w-[85vw] rounded-[18px] bg-[#FFF6EB] px-6 py-8 shadow-sm scroll-snap-align-start"
    style={{ scrollSnapAlign: 'start' }}
  >
    <div className="mx-auto h-auto w-[208px] overflow-hidden rounded-md bg-[#d7a544]">
      <img 
        src={item.image} 
        alt={item.name} 
        className="h-full w-full object-fill"
      />
    </div>
    <h3 className="mt-6 text-[22px] font-medium">{item.name}</h3>
    <p className="mx-auto mt-4 max-w-[260px] text-[12px] leading-5 text-[#555]">
      {item.text}
    </p>
  </div>
))}
        </div>
      </div>
    </section>
  );
}