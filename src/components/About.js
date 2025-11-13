import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#130325] text-softWhite px-6 md:px-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hi, I’m <span className="text-neonPurple font-semibold">Khushi</span> — a UI/UX Developer with one year of experience
          working on front-end projects using <span className="text-neonPurple">Angular</span> and currently transitioning to
          <span className="text-neonPurple"> React</span>.  
          <br />I’m passionate about creating smooth, modern, and interactive user interfaces that not only look great but feel intuitive to use.  
          <br />When I’m not coding, I love exploring design ideas, learning motion effects, and working on creative projects.
        </motion.p>
      </div>
    </section>
  );
}
