import { heroBg, heroPeople } from '@/data';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF6EB] px-2 pb-0 pt-12 md:px-4 lg:min-h-screen lg:px-12 lg:pt-14">
      {/* Text content – responsive widths & font sizes */}
      <div className="relative z-20 max-w-full pb-40 lg:pb-52">
        <h1
          className="font-semibold leading-none tracking-tight text-black"
          style={{
            fontFamily: 'Instrument Sans, sans-serif',
            // Desktop: exactly 56px / 222px / 68px
            fontSize: 'clamp(32px, 8vw, 56px)',
            width: 'clamp(160px, 30vw, 222px)',
            height: 'auto', // auto height to avoid overflow
            lineHeight: '1.2',
          }}
        >
          heading
        </h1>
        <h2
          className="font-normal leading-none text-black"
          style={{
            fontFamily: 'Instrument Sans, sans-serif',
            fontSize: 'clamp(20px, 5vw, 28px)',
            width: 'clamp(120px, 20vw, 165px)',
            height: 'auto',
          }}
        >
          Sub Heading
        </h2>
        <p className="mt-4 max-w-1/2 text-[14px] leading-5 text-[#756a60] md:text-[16px]">
          Printers in the 1500s scrambled the words from Cicero&apos;s “De Finibus Bonorum et
          Malorum” after mixing the words in each sentence.
        </p>
      </div>

      {/* Curved background image – responsive clip path & positioning */}
      <div
        className="absolute inset-x-0 bottom-0 h-[44%] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(88,54,24,0.22), rgba(88,54,24,0.06)), url(${heroBg})`,
          clipPath: "polygon(0 26%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* People images – responsive container & positions */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[280px]    sm:h-[350px] md:h-[430px] md:w-[760px] lg:h-[520px] lg:w-[820px]">
        {/* Left worker */}
        <img
          src={heroPeople[0]}
          alt="left worker"
          className="
            absolute bottom-0 left-[25%] sm:left-[32%] md:left-[28%] lg:left-[-200px]
            h-[200px] w-auto sm:h-[280px] md:h-[340px] lg:h-[520px]
            object-contain object-bottom z-10
          "
        />

        {/* Center person */}
        <img
          src={heroPeople[1]}
          alt="engineer"
          className="
            absolute bottom-0 left-[30%] sm:left-[37%] md:left-[44%] lg:left-[-5px]
            h-[240px] w-auto sm:h-[320px] md:h-[380px] lg:h-[641px]
            object-contain object-bottom z-20
          "
        />

        {/* Right worker */}
        <img
          src={heroPeople[2]}
          alt="right worker"
          className="
            absolute bottom-0 right-[-15%] sm:right-[4%] md:right-[1%] lg:right-[80px]
            h-[180px] w-auto sm:h-[260px] md:h-[320px] lg:h-[520px]
            object-contain object-bottom z-10
          "
        />
      </div>
    </section>
  );
}