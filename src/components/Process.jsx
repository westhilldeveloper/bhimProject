import { ArrowRight } from 'lucide-react';
import { processItems } from '@/data';

export default function Process() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-14 sm:px-6 md:px-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-full">
        <h2 className="text-center text-[48px] font-semibold leading-none tracking-tight text-black sm:text-[42px] md:text-[52px]">
          Our work process
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 lg:mt-14 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
  {processItems.map((item, index) => (
    <div key={index} className="relative flex flex-col items-center text-center">
      {index !== processItems.length - 1 && (
        <div className="absolute left-[92%] top-[88px] hidden items-center lg:flex">
          <div className="h-[3.5px] w-[80px] bg-[#4A4A4A]" />
          <ArrowRight size={20} strokeWidth={3} className="text-[#4A4A4A] mt-[0.25px] ml-[-10px]" />
        </div>
      )}

      <div className="flex h-[152px] w-[152px] items-center justify-center rounded-full bg-[#D7A74C] sm:h-[168px] sm:w-[168px] md:h-[180px] md:w-[180px] lg:h-[192px] lg:w-[192px]">
        <div className="h-[58px] w-[58px] rounded-full bg-[#FFFFFF] sm:h-[62px] sm:w-[62px] md:h-[66px] md:w-[66px]" />
      </div>

      <h3 className="mt-6 text-[28px] font-normal leading-none text-black sm:text-[34px] md:text-[28px]">
        {item.title}
      </h3>

      <p className="mt-3 max-w-[270px] text-[14px] leading-[1.25] text-[#6B6B6B] sm:max-w-[280px] sm:text-[15px]">
        {item.description}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}