"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "namit.usit@gmail.com",
      href: "mailto:namit.usit@gmail.com",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9910914875",
      href: "tel:+919910914875",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/namitbhandula",
      href: "https://linkedin.com/in/namitbhandula",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interested in discussing recruitment strategies, talent operations, 
            or potential opportunities? I'm always open to meaningful conversations.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} p-2.5 mb-4 text-white shadow-lg`}
                >
                  {method.icon}
                </div>

                <p className="font-semibold text-slate-200 mb-1">
                  {method.label}
                </p>
                <p className="text-slate-400 text-sm break-all">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="https://calendly.com/namitbhandula"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="text-slate-400 text-sm mt-6">
            Typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
