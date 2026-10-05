import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = formRef.current;
        const formData = new FormData(form);
        const userName = formData.get("user_name");
        const userEmail = formData.get("user_email");
        const userMessage = formData.get("message");

        const subject = `Portfolio Inquiry from ${userName || 'Visitor'}`;
        const bodyContent = `Hi Sai,\n\nYou have received a new query from your portfolio website:\n\nName: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMessage}\n`;
        const mailtoUrl = `mailto:saiupadhyay01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=saiupadhyay01@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

        try {
            // 1. If custom EmailJS environment variables are configured, attempt EmailJS
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            let emailJsSuccess = false;
            if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
                try {
                    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
                    emailJsSuccess = true;
                } catch (err) {
                    console.warn("EmailJS failed, falling back to Netlify Forms:", err);
                }
            }

            // 2. Submit to Netlify Forms (for the live Netlify deployment)
            const netlifyPayload = new URLSearchParams(formData).toString();
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: netlifyPayload,
            });

            if (res.ok || emailJsSuccess) {
                toast.success("Message sent! Delivered to saiupadhyay01@gmail.com.", {
                    description: "You can also open Gmail if you want a direct thread.",
                    action: {
                        label: "Open in Gmail",
                        onClick: () => window.open(gmailUrl, "_blank"),
                    },
                    duration: 6000,
                });
                form.reset();
            } else {
                toast.info("Directing your query to saiupadhyay01@gmail.com via your email client...");
                window.location.href = mailtoUrl;
                form.reset();
            }
        } catch (error) {
            console.error("Submission failed:", error);
            toast.info("Opening your email client to send directly to saiupadhyay01@gmail.com...");
            window.location.href = mailtoUrl;
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/saiupadhyay", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/sai-upadhyay", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/SaiUpadhyay82916", label: "Twitter" },
        { icon: Instagram, href: "https://instagram.com/saiupadhyay_", label: "Instagram" }
    ];

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Together</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Have an interesting project? I'm always open to discussing new ideas and opportunities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Info Plane */}
                        <div className="space-y-8">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl md:min-h-[400px] flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-300">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Contact Details</h3>

                                    <a href="mailto:saiupadhyay01@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group/item">
                                        <div className="p-3 bg-white/5 rounded-lg group-hover/item:bg-blue-500/20 transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <span>saiupadhyay01@gmail.com</span>
                                    </a>

                                    <a href="tel:+918269294577" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group/item">
                                        <div className="p-3 bg-white/5 rounded-lg group-hover/item:bg-green-500/20 transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <span>+91 82692 94577</span>
                                    </a>

                                    <div className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group/item">
                                        <div className="p-3 bg-white/5 rounded-lg group-hover/item:bg-purple-500/20 transition-colors">
                                            <MapPin size={20} />
                                        </div>
                                        <span>Indore, India</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10 mt-8">
                                    <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Socials</h4>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 hover:text-blue-400 transition-all duration-300 border border-white/5"
                                                aria-label={social.label}
                                            >
                                                <social.icon size={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Plane */}
                        <form
                            ref={formRef}
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={sendEmail}
                            className="space-y-6"
                        >
                            {/* Hidden fields for Netlify Forms routing */}
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="to_email" value="saiupadhyay01@gmail.com" />
                            <p className="hidden">
                                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                            </p>

                            <div className="space-y-4">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                                    />
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                                    />
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        placeholder="Tell me about your project"
                                        className="w-full bg-transparent border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 resize-none"
                                    ></textarea>
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-500 mt-2">
                                Messages are delivered directly to{" "}
                                <a
                                    href="mailto:saiupadhyay01@gmail.com"
                                    className="text-blue-400 hover:underline"
                                >
                                    saiupadhyay01@gmail.com
                                </a>
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
