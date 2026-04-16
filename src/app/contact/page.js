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
    honeypot: '',
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
    setStatus({ loading: true, success: '', error: '' });

    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.subject || !form.message.trim()) {
      setStatus({ loading: false, success: '', error: 'Please fill all required fields.' });
      return;
    }
    if (!form.notRobot) {
      setStatus({ loading: false, success: '', error: 'Please confirm you are not a robot.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      setStatus({ loading: false, success: data.message || 'Message sent successfully!', error: '' });
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
        honeypot: '',
      });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message || 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-[#4a4a4a] sm:text-sm md:text-base">
          Have questions or need reliable manpower solutions? Get in touch with Bhim Secure Solutions today. Our team is always ready to understand your requirements and provide tailored services that meet your business needs. Whether you’re looking for skilled manpower, facility management, or support services, we ensure prompt response and professional assistance. Reach out to us via phone, email, or visit our office: we look forward to building a strong and lasting partnership with you.
        </p>

        <div className="mt-8 rounded-lg bg-[#E5E0DF] p-4 sm:p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={handleChange}
                  className="h-12 w-full rounded-md border-none bg-white px-4 text-sm text-black outline-none placeholder:text-[#6d6d6d] focus:ring-2 focus:ring-[#8b6335] sm:h-14 sm:px-6 sm:text-base md:h-16 md:text-lg"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={handleChange}
                  className="h-12 w-full rounded-md border-none bg-white px-4 text-sm text-black outline-none placeholder:text-[#6d6d6d] focus:ring-2 focus:ring-[#8b6335] sm:h-14 sm:px-6 sm:text-base md:h-16 md:text-lg"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-12 w-full rounded-md border-none bg-white px-4 text-sm text-black outline-none placeholder:text-[#6d6d6d] focus:ring-2 focus:ring-[#8b6335] sm:h-14 sm:px-6 sm:text-base md:h-16 md:text-lg"
                />
                <p className="mt-1 text-xs text-[#8f8f8f] sm:text-sm">Email is optional</p>
              </div>

              {/* Organization */}
              <div>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={form.organization}
                  onChange={handleChange}
                  className="h-12 w-full rounded-md border-none bg-white px-4 text-sm text-black outline-none placeholder:text-[#6d6d6d] focus:ring-2 focus:ring-[#8b6335] sm:h-14 sm:px-6 sm:text-base md:h-16 md:text-lg"
                />
                <p className="mt-1 text-xs text-[#8f8f8f] sm:text-sm">Organization is optional</p>
              </div>

              {/* Phone with country code */}
              <div>
                <div className="flex h-12 overflow-hidden rounded-md bg-white sm:h-14 md:h-16">
                  <div className="flex w-20 items-center justify-center gap-1 border-r border-[#ececec] px-2 sm:w-24">
                    <ReactCountryFlag
                      countryCode={countryMap[form.countryCode]}
                      svg
                      style={{ width: '24px', height: '18px', borderRadius: '2px' }}
                    />
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="bg-transparent text-sm outline-none sm:text-base"
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
                    className="h-full flex-1 border-none bg-white px-3 text-sm text-black outline-none placeholder:text-[#6d6d6d] focus:ring-2 focus:ring-[#8b6335] sm:px-4 sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none rounded-md border-none bg-white px-4 text-sm text-[#6d6d6d] outline-none focus:ring-2 focus:ring-[#8b6335] sm:h-14 sm:px-6 sm:text-base md:h-16"
                    required
                  >
                    <option value="">Subject *</option>
                    {subjects.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#6d6d6d] sm:text-base">▼</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                className="h-48 w-full resize-none rounded-md border-none bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-[#6d6d6d] focus:ring-2 focus:ring-[#8b6335] sm:h-56 sm:px-6 sm:py-4 sm:text-base md:h-64"
                required
              />
              <p className="mt-1 text-right text-xs text-[#9b9b9b] sm:text-sm">1000 max characters</p>
            </div>

            {/* reCAPTCHA style box */}
            <div className="mt-6 flex w-full max-w-[280px] items-center justify-between rounded border border-[#d9d9d9] bg-white px-2 py-2 sm:max-w-[300px] sm:px-3">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  name="notRobot"
                  checked={form.notRobot}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#3b82f6]"
                />
                <span className="text-sm text-[#444] sm:text-base">I&apos;m not a robot</span>
              </label>
              <div className="flex flex-col items-center justify-center text-right text-[8px] leading-tight text-[#8d8d8d] sm:text-[9px]">
                <img src="/images/diagram.gif" alt="captcha" className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
                <div>reCAPTCHA</div>
                <div>Privacy - Terms</div>
              </div>
            </div>

            {(status.error || status.success) && (
              <div className="mt-4 text-left text-xs sm:text-sm">
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
              className="mt-8 flex h-12 w-full items-center justify-center rounded-full border border-[#8b6335] bg-[#fefefe] text-lg font-medium text-[#1f1f1f] transition hover:bg-[#f7f2eb] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-10 sm:h-14 sm:text-xl md:mt-12 md:h-16 md:text-2xl"
            >
              {status.loading ? 'Sending...' : "Let's Connect"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}