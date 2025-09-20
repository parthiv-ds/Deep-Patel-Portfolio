


import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const scriptURL = "https://script.google.com/macros/s/AKfycbxzAI034_qXtuImRXVrwMrUXeSA12ez1thKG5oZzWbVXkAzaGhSZKpYcAD2ftQCtAXF/exec"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null)

    // Intersection Observer for scroll-triggered animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('error');
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('subject', formData.subject);
            formDataToSend.append('message', formData.message);

            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus(null), 3000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "deeppatel53951@gmail.com",
            href: "mailto:deeppatel53951@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 7383785939",
            href: "tel:+917383785939"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Ahmedabad, India",
            href: null
        }
    ];

    const socialLink = [
        {
            icon: Github,
            link: 'https://github.com/deeppatel055'
        },
        {
            icon: Linkedin,
            link: 'https://www.linkedin.com/in/deep-patel-734a62225/'
        },
        {
            icon: Instagram,
            link: 'https://www.instagram.com/_deep__1606/'
        }
    ]

    return (
        <div>
            <footer
                ref={footerRef}
                className={`mt-15 mb-4 px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
            >
                <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center'>

                    {/* Contact Info Section */}
                    <div className={`flex-1 w-full lg:w-auto transition-all duration-1200 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                    }`} style={{ transitionDelay: '200ms' }}>
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#2d3748] leading-tight mb-4"
                            style={{ fontFamily: 'Roboto' }}>
                            Let's Connect & Develop
                        </h1>
                        <p className="text-base sm:text-lg  text-[#4a5568] leading-relaxed max-w-2xl mb-6"
                            style={{ fontFamily: 'Roboto' }}>
                            Let's create digital solutions that speak to your audience.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4 mb-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-4 transition-all duration-800 ease-out ${
                                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                    }`}
                                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                                >
                                    <div className="flex-shrink-0">
                                        <info.icon className="text-[#2d3748] w-5 h-5 transition-transform duration-300 hover:scale-110" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-base sm:text-lg text-[#4a5568] hover:text-[#2d3748] transition-colors duration-200 block break-all"
                                                style={{ fontFamily: 'Roboto' }}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-base sm:text-lg text-[#4a5568]" style={{ fontFamily: 'Roboto' }}>
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className={`flex gap-4 transition-all duration-800 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '950ms' }}>
                            {socialLink.map((sl, index) => (
                                <a
                                    key={index}
                                    href={sl.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-[#2d3748] hover:text-[#4a5568] transition-all duration-300 p-1 hover:scale-110 transform ${
                                        isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-12'
                                    }`}
                                    style={{ transitionDelay: `${1100 + index * 100}ms` }}
                                >
                                    <sl.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className={`flex-1 w-full lg:w-auto max-w-full lg:max-w-lg xl:max-w-xl transition-all duration-1200 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'
                    }`} style={{ transitionDelay: '300ms' }}>
                        {status === 'success' && (
                            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-pulse">
                                Message sent successfully!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-pulse">
                                Failed to send message. Please try again.
                            </div>
                        )}
                        <div className="space-y-6" ref={formRef}>

                            {/* Name and Email Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className={`transition-all duration-700 ease-out ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`} style={{ transitionDelay: '600ms' }}>
                                    <label
                                        htmlFor="name"
                                        className='block text-base sm:text-lg text-[#4a5568] mb-2'
                                        style={{ fontFamily: 'Roboto' }}
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-[#4a5568] rounded-lg text-[#2d3748] text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#2d3748] focus:border-transparent'
                                        style={{ fontFamily: 'Roboto' }}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className={`transition-all duration-700 ease-out ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`} style={{ transitionDelay: '700ms' }}>
                                    <label
                                        htmlFor="email"
                                        className='block text-base sm:text-lg text-[#4a5568] mb-2'
                                        style={{ fontFamily: 'Roboto' }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-[#4a5568] rounded-lg text-[#2d3748] text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#2d3748] focus:border-transparent'
                                        style={{ fontFamily: 'Roboto' }}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div className={`transition-all duration-700 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '800ms' }}>
                                <label
                                    htmlFor="subject"
                                    className='block text-base sm:text-lg text-[#4a5568] mb-2'
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 border border-[#4a5568] rounded-lg text-[#2d3748] text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#2d3748] focus:border-transparent'
                                    style={{ fontFamily: 'Roboto' }}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            {/* Message Field */}
                            <div className={`transition-all duration-700 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '900ms' }}>
                                <label
                                    htmlFor="message"
                                    className='block text-base sm:text-lg text-[#4a5568] mb-2'
                                    style={{ fontFamily: 'Roboto' }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className='w-full px-4 py-3 border border-[#4a5568] rounded-lg resize-vertical text-[#2d3748] text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#2d3748] focus:border-transparent'
                                    style={{ fontFamily: 'Roboto' }}
                                    required
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full bg-[#2d3748] text-white py-3 px-6 rounded-lg text-base sm:text-lg  transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:bg-[#1a202c] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#2d3748] focus:ring-offset-2 ${
                                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                                }`}
                                style={{
                                    fontFamily: 'Roboto',
                                    transitionDelay: '1000ms'
                                }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </div>
                </div>

                <p className={`mt-8 text-center text-base sm:text-lg  text-[#4a5568] transition-all duration-800 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                    style={{
                        fontFamily: 'Roboto',
                        transitionDelay: '1200ms'
                    }}
                >
                    © 2025 Deep Patel. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;