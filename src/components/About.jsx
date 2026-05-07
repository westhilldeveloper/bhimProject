'use client';

import { aboutImages } from '@/data';
import Counter from './Counter';
import Link from 'next/link';

export default function About({
  title, subTitle,  showImages, children,
}) {
  const stats = [
    { value: 2000, label: 'Text line', suffix: '+' },
    { value: 1500, label: 'Text line', suffix: '+' },
    { value: 25, label: 'Text line', suffix: '+' },
  ];
console.log(title,
  subTitle,
 
  showImages,
children)
  return (
    <section className="bg-[#FFFFFF] px-4 py-12 sm:px-6 md:px-10 lg:px-12 lg:py-16">
      <div
  className={`grid items-start gap-10 ${
    showImages
      ? 'lg:grid-cols-[minmax(0,670px)_minmax(0,1fr)]'
      : 'lg:grid-cols-1'
  }`}
>
        {showImages && (<div className="w-full">
          <div className="grid grid-cols-2 gap-2 sm:gap-[10px] lg:grid-cols-[366px_208px] lg:justify-start">
            <img
              src={aboutImages[0]}
              alt="about"
              className="h-[220px] w-full rounded-[14px] object-cover sm:h-[280px] md:h-[320px] lg:h-[366px] lg:w-[366px]"
            />
            <img
              src={aboutImages[1]}
              alt="about"
              className="h-[220px] w-full rounded-tl-[14px] rounded-tr-[56px] rounded-br-[14px] rounded-bl-[14px] object-cover sm:h-[280px] md:h-[320px] lg:h-[366px] lg:w-[208px]"
            />
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-[14px] sm:gap-[10px] lg:grid-cols-[252px_322px] lg:justify-start">
            <img
              src={aboutImages[2]}
              alt="about"
              className="h-[130px] w-full rounded-tl-[14px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[56px] object-cover sm:h-[150px] md:h-[170px] lg:h-[186px] lg:w-[252px]"
            />
            <img
              src={aboutImages[3]}
              alt="about"
              className="h-[130px] w-full rounded-[14px] object-cover sm:h-[150px] md:h-[170px] lg:h-[186px] lg:w-[322px]"
            />
          </div>
        </div>)}

        <div className="w-full">
          <h2 className="text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-[48px]">
            {title}
          </h2>

          <h3 className="mt-4 text-2xl font-medium text-[#1a1a1a] sm:mt-6 sm:text-3xl lg:mt-8 lg:text-[28px]">
           {subTitle}
          </h3>

            <div className="about-content mt-3 space-y-4 text-[14px] leading-6 text-[#666]">
            {children}
          </div>
         

          {showImages && (<Link href="/about"><button className="mt-6 rounded-full border border-[#765640] px-6 py-2.5 text-[16px] font-medium text-[#202020] transition-colors hover:bg-[#f4eee5] sm:mt-7 sm:px-7 sm:py-3 lg:mt-8">
            Read More →
          </button></Link>)}

          {/* <div className="mt-10 grid grid-cols-1 gap-6 text-center sm:mt-12 sm:grid-cols-3 lg:mt-24 lg:max-w-[75%]">
            {stats.map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-semibold leading-none text-[#3a3a3a] sm:text-5xl lg:text-[48px]">
                  <Counter target={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-1 text-sm text-[#666] sm:text-base lg:text-[14px]">
                  {item.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}