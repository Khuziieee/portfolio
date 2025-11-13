import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-darkBg/80 backdrop-blur-lg flex justify-between items-center px-8 py-4 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold text-[rgb(201,166,229)]">
        Khushi Mathur
      </h1>

      {/* Navbar Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => {
            const section = document.getElementById("about");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            } else {
              console.warn("About section not found!");
            }
          }}
          className="border border-[rgb(201,166,229)] text-[rgb(201,166,229)] px-4 py-2 rounded-lg hover:bg-[rgb(201,166,229)] hover:text-darkBg transition-all shadow-neon"
        >
          About
        </button>
        {/* Resume */}
        <a
          href="/Khushi Mathur CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[rgb(201,166,229)] text-[rgb(201,166,229)] px-4 py-2 rounded-lg hover:bg-[rgb(201,166,229)] hover:text-darkBg transition-all shadow-neon"
        >
          Resume
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/khushi-mathur-000640344/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[rgb(201,166,229)] text-[rgb(201,166,229)] px-4 py-2 rounded-lg hover:bg-[rgb(201,166,229)] hover:text-darkBg transition-all shadow-neon"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Khuziieee"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[rgb(201,166,229)] text-[rgb(201,166,229)] px-4 py-2 rounded-lg hover:bg-[rgb(201,166,229)] hover:text-darkBg transition-all shadow-neon"
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}
