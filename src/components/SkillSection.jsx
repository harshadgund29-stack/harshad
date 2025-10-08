
import { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

// ✅ Skills list with logos
const skills = [
  // Frontend
  {
    name:"HTML",
    level:100,
    category:"frontend",
    logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
  },
  {
  name: "CSS",
  level: 65,
  category: "frontend",
  logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
    logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "frontend",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "JavaScript",
    level: 88,
    category: "frontend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name:"Vue.JS",
    level:65,
    category:"frontend",
    logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
  },
  // Backend
  {
    name: "Node.js",
    level: 82,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    level: 78,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    level: 75,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    level: 70,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },

  // Tools
  {
    name: "Git & GitHub",
    level: 85,
    category: "tools",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    level: 65,
    category: "tools",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Figma",
    level: 72,
    category: "tools",
    logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    name: "Postman",
    level: 77,
    category: "tools",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
  name: "Netlify",
  level: 80,
  category: "tools",
  logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg"
  },
  {
  name: "Vercel",
  level: 79,
  category: "tools",
  logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg"
  },
];

// ✅ Categories including "all"
const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize",
                activeCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/40"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:shadow-sm"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div
          key={activeCategory} // re-trigger animation on toggle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 transition-transform duration-300 shadow-md rounded-2xl bg-card hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2"
            >
              {/* Skill Name + Logo */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 rounded"
                  />
                  <span className="font-medium transition-colors duration-300 hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              </div>

              {/* ProgressBar with animated percentage */}
              <div className="transition-transform duration-300 hover:scale-[1.02]">
                <ProgressBar value={skill.level} duration={1500} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
