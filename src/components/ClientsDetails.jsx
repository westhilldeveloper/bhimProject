export default function ClientsDetails() {
  const clients = [
    "/images/cmp_logo/Disposafe.jfif",
    "/images/cmp_logo/essel.jfif",
    "/images/cmp_logo/PinkCity.jfif",
    "/images/cmp_logo/KEC_Int.png",
    "/images/cmp_logo/KMC.png",
    "/images/cmp_logo/L&T.png",
    "/images/cmp_logo/NCC_Ltd.png",
    "/images/cmp_logo/Sadbhav.png",
    "/images/cmp_logo/Suryapriya.png",
   
  ];

  return (
    <section className="bg-[#FFFFFF] px-4 py-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-full">
        {/* Description */}
        <p className="mx-auto max-w-full text-center my-12 text-[12px] leading-[1.35] text-[#4a4a4a] md:text-[14px]">
          Our clients are at the core of everything we do at Bhim Secure Solutions. Over the years, we have built strong and lasting relationships with reputed organizations across infrastructure, construction, government, and private sectors. Our client portfolio reflects trust, reliability, and consistent service delivery, as we continue to support companies with tailored manpower solutions that meet their operational needs. We take pride in partnering with industry leaders and contributing to their success through our commitment to quality, professionalism, and long-term collaboration.
        </p>

        {/* Responsive Logo Grid - optimized for small screens */}
        <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex h-[100px] items-center justify-center overflow-hidden rounded-[8px] border border-[#d6d6d6] bg-gray-200 p-2 shadow-sm sm:h-[120px] md:h-[140px] lg:h-[160px] xl:h-[180px]"
            >
              <img
                src={logo}
                alt="client logo"
                className="max-h-[60px] w-auto max-w-full object-contain sm:max-h-[70px] md:max-h-[85px] lg:max-h-[100px] xl:max-h-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}