import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="min-h-screen text-softWhite font-sans relative"
      style={{
        backgroundColor: "#0a0118",
        backgroundImage: "url('/floating-cogs.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "500px 500px",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold neon-text mb-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-[rgb(201,166,229)]">Khushi</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A UI/UX Developer passionate about creating sleek, accessible, and
          user-friendly digital experiences.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn("Projects section not found!");
              }
            }}
            className="bg-neonPurple text-white px-6 py-3 rounded-lg shadow-neon hover:scale-105 transition-transform"
          >
            View Projects
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn("Contact section not found!");
              }
            }}
            className="bg-neonPurple text-white px-6 py-3 rounded-lg shadow-neon hover:scale-105 transition-transform"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
