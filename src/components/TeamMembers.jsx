'use client';

import { useEffect, useState } from 'react';

export default function TeamMembers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const singleSlide = [
    {
      id: 1,
      name: 'Team Member',
      designation: 'Designation',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.',
    },
    {
      id: 2,
      name: 'Team Member',
      designation: 'Designation',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.',
    },
    {
      id: 3,
      name: 'Team Member',
      designation: 'Designation',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.',
    },
  ];

  const slides = [singleSlide, singleSlide, singleSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#FFFFFF] px-6 py-14 text-center md:px-10 lg:px-12 lg:py-16">
      <h2 className="md:text-[52px] text-[24px] font-semibold leading-none tracking-tight text-black">
        Team Member
      </h2>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full shrink-0">
              <div className="grid gap-8 lg:grid-cols-3">
                {slide.map((member) => (
                  <div
                    key={`${slideIndex}-${member.id}`}
                    className="mx-auto w-full  rounded-[12px] bg-[#FFF6EB] p-[10px]"
                  >
                   <div className="flex h-[500px] w-full items-center justify-center rounded-[8px] bg-[#F7F7F7] overflow-hidden">
  <img
    src="/images/serv_1.png"
    alt="team member"
    className="h-full w-full object-cover"
  />
</div>

                    <div className="px-8 pb-4 pt-8">
                      <h3 className="text-[22px] font-medium leading-none text-black">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-[12px] text-[#333]">{member.designation}</p>

                      <p className="mx-auto mt-5 max-w-full text-[12px] leading-[1.45] text-[#555]">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3.5 w-3.5 rounded-full transition-all ${
              currentSlide === index ? 'bg-[#8B6335]' : 'bg-[#E4D3B8]'
            }`}
            aria-label={`Go to team slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}