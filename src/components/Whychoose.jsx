import { ArrowRight } from 'lucide-react';
import { whychooseItems } from '@/data';

export default function Whychoose() {
  return (
     <section className="bg-[#FFFFFF] px-4 py-14 sm:px-6 md:px-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-full">
        <h2 className="text-center text-[48px] font-semibold leading-none tracking-tight text-black sm:text-[42px] md:text-[52px]">
          Why Choose Us
        </h2>

         <p className='text-13px mt-8'>
        Choosing Bhim Secure Solutions means partnering with a company that values reliability, quality, and long-term relationships. With over a decade of industry experience since 2009, we understand the importance of delivering the right people for the right job. Our focus is not just on providing manpower, but on delivering dependable solutions that enhance efficiency, reduce operational stress, and support your business growth with professionalism and trust.
      </p>

        <div className="mt-12 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 lg:mt-14 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
          {whychooseItems.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {index !== whychooseItems.length - 1 && (
                <div className="absolute left-[92%] top-[88px] hidden items-center lg:flex">
                  <div className="h-[3.5px] w-[80px] bg-[#4A4A4A]" />
                  <ArrowRight size={20} strokeWidth={3} className="text-[#4A4A4A] mt-[0.25px] ml-[-10px]" />
                </div>
              )}

              <div className="flex h-[152px] w-[152px] items-center justify-center rounded-full bg-[#D7A74C] sm:h-[168px] sm:w-[168px] md:h-[180px] md:w-[180px] lg:h-[192px] lg:w-[192px]">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#FFFFFF] sm:h-[62px] sm:w-[62px] md:h-[66px] md:w-[66px]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-[22px] font-normal leading-none text-black sm:text-[24px] md:text-[24px]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[270px] text-[12px] leading-[1.25] text-[#6B6B6B] sm:max-w-[280px] sm:text-[13px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}