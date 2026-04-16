'use client';

import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: '',
    notRobot: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const subjects = ['General Inquiry', 'Project Discussion', 'Support'];

  const countryMap = {
    '+91': 'IN',
    '+1': 'US',
    '+44': 'GB',
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: false,
      success: '',
      error: '',
    });

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.phone.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        loading: false,
        success: '',
        error: 'Please fill all required fields.',
      });
      return;
    }

    if (!form.notRobot) {
      setStatus({
        loading: false,
        success: '',
        error: 'Please confirm you are not a robot.',
      });
      return;
    }

    try {
      setStatus({
        loading: true,
        success: '',
        error: '',
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send message.');
      }

      setStatus({
        loading: false,
        success: 'Form submitted successfully.',
        error: '',
      });

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        countryCode: '+91',
        phone: '',
        subject: '',
        message: '',
        notRobot: false,
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: '',
        error: error.message || 'Something went wrong.',
      });
    }
  };

  return (
    <section className="bg-[#FFFFFF] px-[8px] py-[10px] md:px-[8px] md:py-[56px]">
      <div className="mx-auto max-w-2/3">
        <h1 className="text-center text-[48px] font-semibold leading-none text-black">
          Contact Us
        </h1>

        <p className="mx-auto mt-[16px] max-w-full text-center text-[14px] leading-[1.35] text-[#4a4a4a]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>

        <div className="mt-16 rounded-[4px] bg-[#E5E0DF] px-[48px] py-[38px] md:px-[66px] md:py-[40px]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-[32px] gap-y-[30px] md:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  className="h-[72px] w-full rounded-[4px] border-none bg-white px-12 text-[18px] text-black outline-none placeholder:text-[#6d6d6d]"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={handleChange}
                  className="h-[72px] w-full rounded-[4px] border-none bg-white px-12 text-[18px] text-black outline-none placeholder:text-[#6d6d6d]"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-[72px] w-full rounded-[4px] border-none bg-white px-12 text-[18px] text-black outline-none placeholder:text-[#6d6d6d]"
                />
                <p className="mt-[4px] text-[18px] leading-none text-[#8f8f8f]">
                  Email is optional
                </p>
              </div>

              <div>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={form.organization}
                  onChange={handleChange}
                  className="h-[72px] w-full rounded-[4px] border-none bg-white px-12 text-[18px] text-black outline-none placeholder:text-[#6d6d6d]"
                />
                <p className="mt-[4px] text-[18px] leading-none text-[#8f8f8f]">
                  Organization is optional
                </p>
              </div>

              <div>
                <div className="flex h-[72px] overflow-hidden rounded-[4px] bg-white">
                  <div className="flex w-[86px] items-center justify-center gap-[6px] border-r border-[#ececec] px-2">
                    <ReactCountryFlag
                      countryCode={countryMap[form.countryCode]}
                      svg
                      style={{
                        width: '28px',
                        height: '24px',
                        borderRadius: '2px',
                      }}
                    />

                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="appearance-none bg-transparent text-[18px] outline-none"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    className="h-[72px] flex-1 border-none bg-white px-[14px] text-[18px] text-black outline-none placeholder:text-[#6d6d6d]"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="h-[72px] w-full appearance-none rounded-[4px] border-none bg-white px-12 text-[18px] text-[#6d6d6d] outline-none"
                  >
                    <option value="">Subject *</option>
                    {subjects.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[18px] text-[#6d6d6d]">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-[28px]">
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                className="h-[260px] w-full resize-none rounded-[4px] border-none bg-white px-12 py-8 text-[18px] text-black outline-none placeholder:text-[#6d6d6d]"
              />
              <p className="mt-[4px] text-[18px] leading-none text-[#9b9b9b]">
                1000 max characters
              </p>
            </div>

            <div className="mt-8 flex h-[58px] w-[250px] items-center justify-between border border-[#d9d9d9] bg-white px-[6px]">
              <label className="flex cursor-pointer items-center gap-[7px]">
                <input
                  type="checkbox"
                  name="notRobot"
                  checked={form.notRobot}
                  onChange={handleChange}
                  className="h-[34px] w-[24px] accent-[#3b82f6]"
                />
                <span className="text-[18px] text-[#444]">I&apos;m not a robot</span>
              </label>

              <div className="flex flex-col items-center justify-center text-right text-[8px] leading-tight text-[#8d8d8d]">
                <img
                  src="/images/diagram.gif"
                  alt="captcha"
                  className="h-[24px] w-[24px] object-contain"
                />
                <div>reCAPTCHA</div>
                <div>Privacy - Terms</div>
              </div>
            </div>

            {(status.error || status.success) && (
              <div className="mt-3 text-left text-[11px]">
                {status.error ? (
                  <p className="text-red-600">{status.error}</p>
                ) : (
                  <p className="text-green-600">{status.success}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="mt-24 mb-18 flex h-[72px] w-full items-center justify-center rounded-full border border-[#8b6335] bg-[#fefefe] text-[24px] font-medium text-[#1f1f1f] transition hover:bg-[#f7f2eb] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.loading ? 'Sending...' : 'Let’s Connect'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}