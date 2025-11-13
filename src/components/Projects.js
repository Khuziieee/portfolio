import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Book Finder App",
    description: "Search and bookmark books using the Google Books API.",
    tech: "React, Tailwind, API Integration",
    link: "https://khuziieee.github.io/book-finder/",
    github: "https://github.com/Khuziieee/book-finder"
  },
  {
    id: 2,
    title: "Mona Lisa Painting in Pixels",
    description: "Potrait of MonaLisa in PIXELS using pyhton script and html",
    tech: "Python, Html, CSS",
    link: "https://khuziieee.github.io/pixel-monalisa/mona.html",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Your personal portfolio built with React & Tailwind 💜",
    tech: "React, Tailwind, Framer Motion",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-darkBg text-softWhite px-6 md:px-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-6 rounded-xl border border-neonPurple bg-[#1a0735] hover:shadow-neon transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-neonPurple">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neonPurple hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
