import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace these with your actual EmailJS credentials
        // You need to create an account at https://www.emailjs.com/
        const SERVICE_ID = "service_er98ubr";
        const TEMPLATE_ID = "template_0nd8afh";
        const PUBLIC_KEY = "s4EInMGcBTMtb2kv8";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                toast.success("Message sent successfully!");
                formRef.current.reset();
            }, (error) => {
                toast.error("Failed to send message: " + (error.text || error.message || "Unknown error"));
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="flex items-center justify-center relative py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/10"
                >
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's <span className="text-purple-500">Connect</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                Have a project in mind or just want to chat? I'm always open to new opportunities and creative ideas.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <span>saiupadhyay01@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                                        <Phone size={24} />
                                    </div>
                                    <span>+91 82692 94577</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="bg-pink-500/20 p-3 rounded-lg text-pink-400">
                                        <MapPin size={24} />
                                    </div>
                                    <span>Indore , India</span>
                                </div>
                            </div>
                        </div>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
