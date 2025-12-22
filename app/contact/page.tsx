// app/contact/page.tsx
'use client';
import { useState } from 'react';
interface EmailTemplateProps {
    fullName: string;
    message: string;
    phone: string;
}
export function EmailTemplate({ fullName, message, phone }: EmailTemplateProps) {
    return (
        <div>
            <h1>Hello, Andrei!</h1>
            <label>{message}</label>
            <label>From {fullName}</label>
            <label>Phone: {phone}</label>
        </div>
    );
}
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        try {
            const { ok } = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    from: formData.email,
                    to: process.env.COMPANY_EMAIL!,
                    subject: formData.subject,
                    html: EmailTemplate({ fullName: formData.name, message: formData.message, phone: formData.phone }),
                }),
            });

            if (ok) {
                setSubmitted(true);


                // Reset form after 3 seconds
                setTimeout(() => {
                    setSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                }, 3000);
            }
            else {
                console.error("error!")
            }

        } catch (error) {
            console.error("error: ", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Get in touch
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Have a question or want to work together? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                            {submitted && (
                                <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                                    <p className="text-green-300 font-medium">Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="+1 (123) 456-7890"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Details Card */}
                            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Address</h3>
                                            <p className="text-gray-400">Eindhoven, North Brabant</p>
                                            <p className="text-gray-500 text-sm mt-1">The Netherlands</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Phone</h3>
                                            <a href="tel:+40786908232" className="text-gray-400 hover:text-blue-400 transition-colors">
                                                +40 786 908 232
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">Mon-Fri 9am-6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Email</h3>
                                            <a href="mailto:pieleanuandrei2001@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                                pieleanuandrei2001@gmail.com
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours Card */}
                            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-gray-300">
                                        <span>Monday - Friday</span>
                                        <span className="text-white font-medium">7:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Saturday</span>
                                        <span className="text-white font-medium">11:00 AM - 3:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Sunday</span>
                                        <span className="text-gray-500">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}