'use client';

import { useEffect, useState } from 'react';
import { projectLarge, projectSmall } from '@/data';
import Link from 'next/link';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Mukarba Chowk–Panipat Highway, Bhigan Toll Plaza (Welspun)',
      description:
        'This project involved providing a large workforce of 238 personnel for industrial and construction manpower requirements at Bhigan, Haryana. Our team played a crucial role in ensuring smooth toll operations and infrastructure support from May 2022 to October 2023.',
        image:'/images/project/toll.jpg' ,
      smallProjects: [
         {
          id: 1,
          title: 'Kundli–Manesar Expressway Ltd. (PIIPL)',
          description: 'We provided 40 skilled manpower resources for this expressway project in Haryana between November 2018 and May 2020. The workforce supported construction and operational tasks with precision and consistency.',
           image:'/images/project/highw1.jpg' ,
        },
        {
          id: 2,
          title: 'Kundli–Manesar Expressway Ltd. (Essel Infra)',
          description: 'For Essel Infra, we deployed 50 manpower resources from March 2021 to July 2023 in Haryana. The project required continuous support for construction and operational activities.',
           image:'/images/project/highw2.jpg' ,
        },
      ],
    },
    {
      id: 2,
      title: 'Chikhli–Tarsod Highway Project Ltd. (Welspun)',
      description:
        'This project in Bhusawal, Maharashtra involved deploying 40 manpower personnel from May 2021 to July 2023. Our team supported construction operations with dedication and efficiency.',
         image:'/images/project/highw3.jpg' ,
      smallProjects: [
        {
          id: 1,
          title: 'Vadodara–Bharuch Tollways Ltd. (L&T IDPL)',
          description: 'We provided a workforce of 150 personnel for this major tollway project in Karjan, Gujarat from May 2021 to July 2023. The project required large-scale manpower management and coordination.',
           image:'/images/project/toll2.jpg' ,
        },
        {
          id: 2,
          title: 'Vadodara–Bharuch Tollways Ltd. (Ajay Ayush)',
          description: 'For this project, we deployed 150 manpower resources from July 2020 to March 2022 in Karjan, Gujarat. Our workforce supported construction and operational needs effectively.',
           image:'/images/project/toll3.jpg' ,
        },
      ],
    },
    {
      id: 3,
      title: 'PinkCity Expressway Pvt. Ltd. (Shahjahanpur Toll)',
      description:
        'We provided 150 manpower personnel for this project in Rajasthan from April 2012 to April 2018. The project involved long-term support for toll operations and infrastructure.',
         image:'/images/project/toll4.jpg' ,
      smallProjects: [
        {
          id: 1,
          title: 'PinkCity Expressway Pvt. Ltd. (Manoharpur Toll)',
          description: 'This project involved deploying 80 manpower resources from April 2009 to July 2010 in Rajasthan. Our team supported toll operations efficiently. We maintained quality service and ensured smooth daily operations. Our contribution helped the client achieve operational stability.',
           image:'/images/project/toll5.jpg' ,
        },
        {
          id: 2,
          title: 'PinkCity Expressway Pvt. Ltd. (Daulatpura Toll)',
          description: 'We deployed 30 manpower personnel for this toll project in Rajasthan. Our team handled operational tasks with precision and efficiency. Despite the smaller workforce, we ensured high-quality service delivery. This project reflects our flexibility in handling projects of all sizes.',
           image:'/images/project/cons1.jpg' ,
        },
      ],
    },
    {
      id: 4,
      title: 'Essel Gwalior–Shivpuri Toll Roads Pvt. Ltd.',
      description:
        'We provided 100 manpower resources for this project in Madhya Pradesh from April 2018 to October 2019. The workforce supported construction and toll operations.',
         image:'/images/project/highw4.jpg' ,
      smallProjects: [
        {
          id: 1,
          title: 'Para Toll Plaza (NHAI)',
          description: 'For this project in Rajasthan, we deployed 109 manpower personnel from May 2022 to November 2022. The project required efficient toll management and operational support.',
           image:'/images/project/highw5.jpg' ,
        },
        {
          id: 2,
          title: 'Majhgawa Toll (NHAI)',
          description: 'This project in Madhya Pradesh involved providing 109 manpower resources from September 2022 to December 2022. Our team supported toll operations efficiently.',
           image:'/images/project/cons5.jpg' ,
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#E5E0DF] px-4 py-12 text-center sm:px-6 md:px-10 lg:px-12 lg:py-16">
      <h2 className="text-[36px] font-semibold leading-none tracking-tight sm:text-[42px] lg:text-[48px]">
        Projects
      </h2>

      <p className="mx-auto mt-4 max-w-full text-[12px] leading-5 text-[#444] sm:text-[13px] md:text-[14px]">
        Our projects reflect our commitment to delivering dependable manpower and facility solutions across diverse industries. From corporate offices and construction sites to healthcare facilities, we have successfully deployed skilled teams that ensure smooth operations, safety, and efficiency. Each project is handled with careful planning, quality control, and continuous supervision, allowing us to meet client expectations and timelines consistently while building long-term partnerships based on trust and performance.
      </p>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.96fr] lg:gap-8">
                {/* LEFT SIDE: fixed image height */}
                <div className="overflow-hidden rounded-[18px] bg-[#FFF6EB] text-left shadow-sm">
                  <img
                    src={slide.image}
                    alt="project"
                    className="h-[600px] w-full object-cover"   // FIXED HEIGHT
                  />
                  <div className="bg-[#FFF6EB] px-5 py-5 sm:px-6">
                    <h3 className="text-[22px] font-medium sm:text-[24px]">
                      {slide.title}
                    </h3>
                    <p className="mt-2 max-w-full text-[12px] leading-5 text-[#6b655f] lg:max-w-[80%]">
                      {slide.description}
                    </p>
                    <Link href="/projects">
                      <button className="mt-6 rounded-full border border-[#765640] px-6 py-2.5 text-sm font-medium hover:bg-white/60 sm:px-7 sm:py-3">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE: fixed smaller image height + no button text wrap */}
                <div className="flex flex-col gap-6 lg:gap-8">
                  {slide.smallProjects.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-[18px] bg-[#efe6da] text-left shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt="project"
                        className="h-[260px] w-full object-cover"   // FIXED HEIGHT
                      />
                      <div className="flex flex-col gap-4 bg-[#FFF6EB] px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-[22px] font-medium sm:text-[24px]">
                            {item.title}
                          </h3>
                          <p
                            className="mt-2 max-w-full text-[12px] leading-5 text-[#6b655f] md:max-w-[350px]"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                        <Link href="/projects">
                          <button className="whitespace-nowrap rounded-full border border-[#765640] px-4 py-2 text-sm font-medium hover:bg-white/60 sm:px-6 sm:py-2.5">
                            Read More →
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3.5 w-3.5 rounded-full transition-all ${
              currentSlide === index ? 'bg-[#8b6335]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}