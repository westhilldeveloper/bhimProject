'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navItems } from '@/data';

const searchData = [
  {
    title: 'Home',
    description: 'Go to homepage',
    href: '/',
  },
  {
    title: 'About Us',
    description: 'Learn more about our company',
    href: '/about',
  },
  {
    title: 'Services',
    description: 'Explore our housekeeping, security, manpower and related services',
    href: '/services',
  },
  {
    title: 'Projects',
    description: 'View our completed and ongoing projects',
    href: '/projects',
  },
  {
    title: 'Clients',
    description: 'See our clients and partnerships',
    href: '/clients',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with us',
    href: '/contact',
  },
  {
    title: 'Privacy Policy',
    description: 'Read our privacy policy',
    href: '/privacy-policy',
  },
  {
    title: 'Terms & Conditions',
    description: 'Read our terms and conditions',
    href: '/terms',
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];

    return searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value)
      );
    });
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    if (results.length > 0) {
      router.push(results[0].href);
      setShowResults(false);
      setQuery('');
    }
  };

  return (
    <header className="bg-white w-full">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-[71px] w-[65px] items-center justify-center">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="relative hidden md:block">
            <form
              onSubmit={handleSearchSubmit}
              className="flex w-[352px] h-[48px] items-center justify-between rounded-full border border-[#bea181] px-[18px]"
            >
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                className="w-full bg-transparent text-[20px] outline-none placeholder:text-[#b89d81]"
                placeholder="Search"
              />

              <button
                type="submit"
                className="text-[32px] text-[#6b4d33] leading-none"
              >
                ⌕
              </button>
            </form>

            {showResults && query.trim() && (
              <div className="absolute left-0 top-[56px] z-50 w-full overflow-hidden rounded-[20px] border border-[#e4d2bf] bg-white shadow-lg">
                {results.length > 0 ? (
                  results.slice(0, 6).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setShowResults(false);
                        setQuery('');
                      }}
                      className="block border-b border-[#f2e7db] px-4 py-3 last:border-b-0 hover:bg-[#faf4ed]"
                    >
                      <p className="text-[16px] font-medium text-[#53362D]">
                        {item.title}
                      </p>
                      <p className="text-[13px] text-[#7b746d]">
                        {item.description}
                      </p>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-3 text-[14px] text-[#7b746d]">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="text-sm flex justify-center items-center gap-4 font-medium text-[#511C1D] md:text-base lg:text-[20px]">
            <span>
              <img
                src="/images/icon_phn.png"
                className="h-4 w-auto object-contain"
                alt="phone"
              />
            </span>
            +91 9540 999 909
          </div>

          <button
            onClick={toggleMobileMenu}
            className="block lg:hidden focus:outline-none"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-[#714f39]"></span>
              <span className="block h-0.5 w-6 bg-[#714f39]"></span>
              <span className="block h-0.5 w-6 bg-[#714f39]"></span>
            </div>
          </button>
        </div>
      </div>

      <nav className="hidden h-[56px] bg-[#C98D47] lg:block">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-center px-0">
          <ul className="flex h-full items-center">
            {navItems.map((item) => {
              const href =
                item === 'Home'
                  ? '/'
                  : `/${item.toLowerCase().replace(/\s+/g, '-')}`;

              const isActive = pathname === href;

              return (
                <li key={item} className="h-full">
                  <Link
                    href={href}
                    className={`flex h-full items-center justify-center px-8 text-[20px] font-normal text-white transition-colors ${
                      isActive
                        ? 'bg-[#9C6A2F]'
                        : 'bg-transparent hover:bg-[#B97E3F]'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-[#C98D47] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMobileMenu}
                className="text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <ul className="flex flex-col items-start gap-2 px-6">
              {navItems.map((item) => {
                const href =
                  item === 'Home'
                    ? '/'
                    : `/${item.toLowerCase().replace(/\s+/g, '-')}`;

                const isActive = pathname === href;

                return (
                  <li
                    key={item}
                    className={`w-full py-3 text-left text-[20px] font-medium ${
                      isActive
                        ? 'text-[#53362D] border-l-4 border-[#53362D] pl-2'
                        : 'text-white'
                    }`}
                  >
                    <Link href={href} onClick={toggleMobileMenu}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}