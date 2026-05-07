import { navItems } from '@/data';
import Link from 'next/link';

export default function Footer() {
  // Helper to convert nav item name to href (same logic as Header)
  const getHref = (item) => {
    return item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <footer className="bg-[#5a4338] text-white">
      <div className="grid gap-10 px-4 py-10 sm:px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:px-12 lg:py-12">
        {/* LEFT COLUMN: Logo + Contact details */}
        <div>
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-2xl bg-white shadow-sm sm:h-[140px] sm:w-[140px] lg:h-[156px] lg:w-[156px]">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="h-[96px] w-auto object-contain sm:h-[110px] lg:h-[126px]"
            />
          </div>

          <div className="mt-6 max-w-full space-y-3 text-[#f1e9df] sm:mt-18 lg:max-w-[75%]">
            <div className="flex items-start gap-2 text-[14px] sm:text-[15px] lg:text-[16px]">
              <span className="mt-1 shrink-0">
                <img src="/images/icons/phn.png" alt="phone" className="h-4 w-4" />
              </span>
              <span>011-47083993</span>
            </div>
            <div className="flex items-start gap-2 text-[14px] sm:text-[15px] lg:text-[16px]">
              <span className="mt-1 shrink-0">
                <img src="/images/icons/email.png" alt="email" className="h-3 w-4" />
              </span>
              <span>info@bhimsecure.com</span>
            </div>
            <div className="flex items-start gap-2 text-[14px] sm:text-[15px] lg:text-[16px]">
              <span className="mt-1 shrink-0">
                <img src="/images/icons/loc.png" alt="location" className="h-4 w-4" />
              </span>
              <span>
                6B, Atmaram House, Tolstoy Marg, Connaught Place, New Delhi - 110001, India
              </span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Quick Links (now clickable) */}
        <div>
          <h3 className="text-[24px] font-semibold sm:text-[28px] lg:text-[32px]">
            Quick Links
          </h3>
          <div className="mt-2 h-1 w-26 bg-[#d8d2cb]" />
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-[15px] text-[#f7f2eb] sm:gap-x-10 sm:text-[16px] lg:text-[18px]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className="flex items-center gap-3 hover:underline"
              >
                <span>»</span>
                <span>{item}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Social Icons */}
        <div>
          <div className="text-[14px] font-semibold uppercase tracking-wide text-[#f3ece3] sm:text-[15px] lg:text-[16px]">
            Follow Us On
          </div>
          <div className="mt-4 flex gap-4">
            {[
              { src: '/images/icons/subtract.png', href: 'https://in.linkedin.com/company/bhimsecuresolutions', alt: 'LinkedIn' },
              { src: '/images/icons/insta.png', href: 'https://www.instagram.com/bhimsecure/', alt: 'Instagram' },
              { src: '/images/icons/fb.png', href: 'https://www.facebook.com/profile.php?id=61586873501701', alt: 'Facebook' },
            ].map((item) => (
              <a
                key={item.src}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 sm:h-12 sm:w-12"
              >
                <img src={item.src} alt={item.alt} className="h-5 w-5 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col gap-3 border-t border-white/10 bg-[#3b2c25] px-4 py-4 text-[14px] text-[#f5ede2] sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12 lg:text-[16px]">
        <div>Copyright © 2023 All rights reserved.</div>
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
          <Link href="/privacy-policy" className="cursor-pointer hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="cursor-pointer hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}