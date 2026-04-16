import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      organization,
      countryCode,
      phone,
      subject,
      message,
      notRobot,
      honeypot,
    } = body;

    // Honeypot spam check
    if (honeypot && honeypot !== '') {
      return Response.json(
        { error: 'Spam detected.' },
        { status: 400 }
      );
    }

    // Required fields
    if (!firstName?.trim() || !lastName?.trim() || !phone?.trim() || !subject?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'Missing required fields: first name, last name, phone, subject, message.' },
        { status: 400 }
      );
    }

    if (!notRobot) {
      return Response.json(
        { error: 'Please confirm you are not a robot.' },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    const safeFirstName = escapeHtml(firstName.trim());
    const safeLastName = escapeHtml(lastName.trim());
    const safeEmail = email ? escapeHtml(email.trim()) : 'N/A';
    const safeOrganization = organization ? escapeHtml(organization.trim()) : 'N/A';
    const safeCountryCode = countryCode ? escapeHtml(countryCode.trim()) : '';
    const safePhone = escapeHtml(phone.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    const mailOptions = {
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.GMAIL_USER,
      replyTo: email || undefined,
      subject: `Contact Form: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>First Name:</strong> ${safeFirstName}</p>
          <p><strong>Last Name:</strong> ${safeLastName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Organization:</strong> ${safeOrganization}</p>
          <p><strong>Phone:</strong> ${safeCountryCode} ${safePhone}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: 'Email sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('CONTACT_API_ERROR:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}