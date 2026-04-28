import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
  FaReply
} from 'react-icons/fa';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    emailjs.init('rzUK6DepQ-5uoYk-v');
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setError(null);
    setSuccess(false);

    try {
      await emailjs.send(
        'service_e8thpzi',
        'template_4qdmm1p',
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
          reply_to: contactForm.email
        },
        'rzUK6DepQ-5uoYk-v'
      );

      setSuccess(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error:', err);
      setError('No se pudo enviar. Escríbeme a lesliesosa080305@gmail.com');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Leslie208l',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/lesliexvs/',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:shadow-pink-500/25'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/leslie-joselin-sosa-villa-80399a32b',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:shadow-blue-500/25'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 pb-32 relative overflow-hidden min-h-screen">
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-moderniz mb-4">
            <span className="dark:bg-gradient-to-r dark:from-cyan-400 dark:via-emerald-400 dark:to-cyan-600 dark:bg-clip-text dark:text-transparent text-cyan-600">
              GET IN
            </span>
            {' '}
            <span className="dark:text-white text-slate-800">TOUCH</span>
          </h2>
          <p className="text-xl dark:text-slate-400 text-slate-600 font-cascadia">
            ¡Colaboremos y creemos algo increíble juntos!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 hidden dark:block"></div>
            <div className="relative dark:bg-slate-900/80 bg-white backdrop-blur-xl rounded-3xl p-8 border dark:border-slate-700/50 border-slate-100 dark:shadow-none shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 dark:bg-gradient-to-r dark:from-cyan-600 dark:to-emerald-600 bg-cyan-600 rounded-full">
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900">Contáctame</h3>
                  <p className="dark:text-slate-400 text-slate-600">¿Tienes algo que discutir? ¡Escríbeme!</p>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="group">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 dark:text-slate-400 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    <input
                      type="text"
                      placeholder="Tu Nombre"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 dark:bg-slate-800/50 bg-slate-50 border dark:border-slate-600/50 border-slate-200 rounded-xl dark:text-white text-slate-800 dark:placeholder-slate-400 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 dark:text-slate-400 text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    <input
                      type="email"
                      placeholder="Tu Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 dark:bg-slate-800/50 bg-slate-50 border dark:border-slate-600/50 border-slate-200 rounded-xl dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <FaComment className="absolute left-4 top-6 dark:text-slate-400 text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    <textarea
                      placeholder="Tu Mensaje"
                      rows="4"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 dark:bg-slate-800/50 bg-slate-50 border dark:border-slate-600/50 border-slate-200 rounded-xl dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Success */}
                {success && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <p className="text-emerald-400 font-semibold">¡Mensaje enviado! Te responderé pronto 🎉</p>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmittingContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full dark:bg-gradient-to-r dark:from-cyan-600 dark:to-emerald-600 dark:hover:from-cyan-500 dark:hover:to-emerald-500 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingContact ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            <span className="text-slate-400 font-semibold">o sígueme en</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>

          {/* Social Links */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 hidden dark:block"></div>
            <div className="relative dark:bg-slate-900/80 bg-white backdrop-blur-xl rounded-3xl p-8 border dark:border-slate-700/50 border-slate-100 shadow-lg dark:shadow-none">
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 text-center">Conecta Conmigo</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`group flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white transition-all duration-300 ${social.hoverColor} hover:shadow-xl`}
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold">{social.name}</span>
                      <p className="text-sm opacity-90">Sígueme en {social.name}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaReply className="rotate-180" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;