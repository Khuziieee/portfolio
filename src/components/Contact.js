import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-darkBg text-softWhite px-6 md:px-16 text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 neon-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Have a project idea or just want to say hi? Let’s connect and create
        something amazing together!
      </motion.p>

      <motion.button
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=khushimathur.it@gmail.com",
            "_blank",
            "noopener,noreferrer,width=900,height=700"
          )
        }
        className="inline-block border border-neonPurple text-neonPurple px-8 py-3 rounded-lg hover:bg-neonPurple hover:text-darkBg transition-all shadow-neon"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Say Hello 👋
      </motion.button>
    </section>
  );
}
