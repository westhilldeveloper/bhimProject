'use client';

import { useEffect, useState } from 'react';

export default function ProjectDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const singleSlide = {
    title: 'Mukarba Chowk - Panipat Highway, Bhigan Toll Plaza (Welspun)',
    subtitle:
      'This project involved providing a large workforce of 238 personnel for industrial and construction manpower requirements at Bhigan, Haryana. Our team played a crucial role in ensuring smooth toll operations and infrastructure support from May 2022 to October 2023.',
    description:
      'We focused on efficient manpower deployment, ensuring productivity and safety across all operations. Our ability to manage a high-volume workforce helped the client maintain operational efficiency and meet project timelines successfully.',
    points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };
  const project2 = {
    title:'Kundli–Manesar Expressway Ltd. (PIIPL)',
     subtitle:'We provided 40 skilled manpower resources for this expressway project in Haryana between November 2018 and May 2020. The workforce supported construction and operational tasks with precision and consistency.',
     description:'Our team ensured smooth execution by maintaining discipline and efficiency. This project strengthened our expertise in handling expressway infrastructure projects with professionalism.',
     points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };
  const project3 = {
    title:'Kundli–Manesar Expressway Ltd. (Essel Infra)',
     subtitle:'For Essel Infra, we deployed 50 manpower resources from March 2021 to July 2023 in Haryana. The project required continuous support for construction and operational activities.',
     description:'We ensured that the workforce was well-trained and aligned with project requirements. Our contribution helped maintain workflow continuity and improved overall productivity.',
     points: ['Project Management', 'Candidate Management', 'Interview Management'],
  };
  const project4 = {
    title:'Chikhli–Tarsod Highway Project Ltd. (Welspun)',
     subtitle:'This project in Bhusawal, Maharashtra involved deploying 40 manpower personnel from May 2021 to July 2023. Our team supported construction operations with dedication and efficiency.',
     description:'We maintained high standards of safety and work quality throughout the project. Our consistent performance ensured timely completion and client satisfaction.',
     points: ['Project Management', 'Candidate Management', 'Interview Management'],
  }
  const project5 = {
    title:'Vadodara–Bharuch Tollways Ltd. (L&T IDPL)',
     subtitle:'We provided a workforce of 150 personnel for this major tollway project in Karjan, Gujarat from May 2021 to July 2023. The project required large-scale manpower management and coordination.',
     description:'Our team ensured seamless operations by maintaining discipline and efficiency. This project showcased our capability to handle high manpower requirements in critical infrastructure.',
     points: ['Project Management', 'Candidate Management', 'Interview Management'],
  }
  const project6 = {
    title:'Vadodara–Bharuch Tollways Ltd. (Ajay Ayush)',
     subtitle:'For this project, we deployed 150 manpower resources from July 2020 to March 2022 in Karjan, Gujarat. Our workforce supported construction and operational needs effectively.',
     description:'We ensured proper workforce management and timely execution of tasks. Our performance contributed to smooth project progress and client satisfaction.',
     points: ['Project Management', 'Candidate Management', 'Interview Management'],
  }
  const project7 = {
    title:'. PinkCity Expressway Pvt. Ltd. (Shahjahanpur Toll)',
     subtitle:'We provided 150 manpower personnel for this project in Rajasthan from April 2012 to April 2018. The project involved long-term support for toll operations and infrastructure.',
     description:'Our team ensured consistent performance over the years. This long-term engagement highlights our reliability and commitment to client success.',
     points: ['Project Management', 'Candidate Management', 'Interview Management'],
  }
const project8 = {
  title: 'PinkCity Expressway Pvt. Ltd. (Manoharpur Toll)',
  subtitle: 'This project involved deploying 80 manpower resources from April 2009 to July 2010 in Rajasthan. Our team supported toll operations efficiently.',
  description: 'We maintained quality service and ensured smooth daily operations. Our contribution helped the client achieve operational stability.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project9 = {
  title: 'PinkCity Expressway Pvt. Ltd. (Daulatpura Toll)',
  subtitle: 'We deployed 30 manpower personnel for this toll project in Rajasthan. Our team handled operational tasks with precision and efficiency.',
  description: 'Despite the smaller workforce, we ensured high-quality service delivery. This project reflects our flexibility in handling projects of all sizes.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project10 = {
  title: 'Essel Gwalior–Shivpuri Toll Roads Pvt. Ltd.',
  subtitle: 'We provided 100 manpower resources for this project in Madhya Pradesh from April 2018 to October 2019. The workforce supported construction and toll operations.',
  description: 'Our team ensured smooth execution and maintained productivity throughout the project. We delivered reliable manpower solutions tailored to project needs.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project11 = {
  title: 'Para Toll Plaza (NHAI)',
  subtitle: 'For this project in Rajasthan, we deployed 109 manpower personnel from May 2022 to November 2022. The project required efficient toll management and operational support.',
  description: 'We ensured timely deployment and effective workforce management. Our contribution helped maintain uninterrupted operations.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project12 = {
  title: 'Majhgawa Toll (NHAI)',
  subtitle: 'This project in Madhya Pradesh involved providing 109 manpower resources from September 2022 to December 2022. Our team supported toll operations efficiently.',
  description: 'We focused on maintaining discipline and operational accuracy. Our workforce ensured smooth day-to-day functioning.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project13 = {
  title: 'Ramnagar Toll Plaza, NH-76 (NHAI)',
  subtitle: 'We deployed 109 manpower personnel for this project in Madhya Pradesh from January 2019 to September 2019. The workforce handled toll operations and support tasks.',
  description: 'Our team ensured consistent service delivery and operational efficiency. This project further strengthened our presence in highway infrastructure.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project14 = {
  title: 'Nine Border Check Posts (Sadbhav Engineering Ltd.)',
  subtitle: 'This project in Maharashtra required 135 manpower personnel from January 2020 to November 2020. Our team supported operations at multiple check posts.',
  description: 'We ensured coordination and efficiency across all locations. Our ability to manage multiple sites simultaneously was key to project success.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project15 = {
  title: 'Prayagraj, Kota, Mandi, Shahpura (KMC Constructions Ltd.)',
  subtitle: 'We provided 50 manpower resources across multiple locations including UP, Rajasthan, and Himachal Pradesh from April 2009 to September 2020.',
  description: 'Our team handled diverse construction requirements across regions. This project highlights our capability to manage geographically spread operations.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project16 = {
  title: 'Irrigation & Flood Control Dept. Office Complex (Govt. of Delhi)',
  subtitle: 'This project involved deploying 20 manpower personnel in Delhi from October 2019 to December 2020. Our workforce supported construction and maintenance activities.',
  description: 'We ensured quality work and timely execution. Our services contributed to the smooth completion of the project.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};

const project17 = {
  title: 'Krishna Constellation Pvt. Ltd. (Delhi Project)',
  subtitle: 'We provided 40 manpower resources for this infrastructure project in Delhi from February 2022 to March 2023.',
  description: 'Our team ensured efficient operations and maintained project timelines. This project reflects our expertise in urban infrastructure support.',
  points: ['Project Management', 'Candidate Management', 'Interview Management'],
};
  const slides = [singleSlide, project2, project3,  project4,  project5,  project6,  project7,project8, project9, project10, project11, project12, project13, project14, project15, project16, project17 ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#FFFFFF] px-4 py-8 md:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-full">
        <h1 className="text-center text-[28px] font-semibold leading-none text-black md:text-[48px]">
          Completed Projects
        </h1>
        <p className='my-6  text-[11px] leading-[1.35] text-[#4c4c4c] md:text-[14px]'>
          At Bhim Secure Solutions, our completed projects reflect years of dedication, reliability, and excellence in delivering large-scale manpower solutions. From highways and toll plazas to government infrastructure and private construction projects, we have successfully supported diverse operations across India. Each project stands as a testament to our ability to deploy skilled manpower, meet strict deadlines, and maintain consistent service quality.
        </p>

        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full shrink-0">
                {/* Top content */}
                <div className="grid gap-8 lg:grid-cols-[1.55fr_0.9fr] lg:items-start">
                  <div className="max-w-[620px]">
                    <h2 className="text-[24px] font-medium leading-none text-black md:text-[28px]">
                      {slide.title}
                    </h2>

                    <p className="mt-3 text-[11px] leading-[1.35] text-[#4c4c4c] md:text-[14px]">
                      {slide.subtitle}
                    </p>

                    <p className="mt-3 text-[11px] leading-[1.35] text-[#4c4c4c] md:text-[14px]">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-5 lg:items-start">
                    <ul className="space-y-2 pt-1">
                      {slide.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-[11px] font-medium text-black md:text-[12px]"
                        >
                          <span className="flex h-[16px] w-[16px] items-center justify-center bg-[#8b6335] text-[12px] leading-none text-white">
                            ✓
                          </span>
                          <span className='text-[16px]'>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex h-[72px] w-[170px] items-center justify-center rounded-[6px] bg-[#ececec] text-[11px] text-[#7a7a7a] md:h-[84px] md:w-[200px]">
                      Company logo
                    </div>
                  </div>
                </div>

                {/* Image layout */}
                <div className="mt-8 grid grid-cols-1 gap-[10px] lg:grid-cols-12 lg:gap-[10px]">
  {/* Top left */}
  <div className="flex h-[220px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-4 lg:h-[390px]">
    <img
      src="/images/serv_1.png"
      alt="project"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Top middle */}
  <div className="flex h-[220px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-4 lg:h-[390px]">
    <img
      src="/images/serv_1.png"
      alt="project"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Right tall */}
  <div className="flex h-[260px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-4 lg:row-span-2 lg:h-[673px]">
    <img
      src="/images/serv_1.png"
      alt="project"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Bottom wide */}
  <div className="flex h-[220px] overflow-hidden rounded-[10px] bg-[#fff6eb] lg:col-span-8 lg:h-[273px]">
    <img
      src="/images/serv_1.png"
      alt="project"
      className="h-full w-full object-cover"
    />
  </div>
</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`md:h-3.5 w-3.5 h-2 w-2  rounded-full transition-all ${
                currentSlide === index ? 'bg-[#8b6335]' : 'bg-[#e4d3b8]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}