import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion"; // optional, if you want more precise animation

// Import images
import htmlProject from "../assets/Projects/html-projects.jpg";
import mernProject from "../assets/Projects/Mern.png";
import portfolioProject from "../assets/Projects/2.webp";
import ecommerceProject from "../assets/Projects/images.jpg";

import recipefinder from "../assets/Projects/recipefinder.jpg"

import eventmanager from "../assets/Projects/eventmanager.jpg"

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    description: "A beautiful landing page app using React and Tailwind",
    image: htmlProject,
    tags: ["React", "TailwindCss", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/HarshadGund/MotionCut/tree/main/e-commerce-product-page-main/e-commerce-product-page-main",
  },
  {
    id: 2,
    title: "MERN App",
    description: "A full-stack MERN app with authentication and CRUD functionality",
    image: mernProject,
    tags: ["React", "NodeJS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/HarshadGund/MotionCut/tree/main/MERN_STACK_RESTAURANT_RESERVATION-main/MERN_STACK_RESTAURANT_RESERVATION-main",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills",
    image: portfolioProject,
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "",
    githubUrl: "https://github.com/HarshadGund/project",
  },
  {
    id: 4,
    title: "E-commerce Site",
    description: "An e-commerce website with product listing, cart, and checkout",
    image: ecommerceProject,
    tags: ["React", "Redux", "Stripe API"],
    demoUrl: "#",
    githubUrl: "https://github.com/HarshadGund/MotionCut/tree/main/price%20landing%20page",
  },
  {
    id:5,
    title: "Recipe-finder",
    description: "Recipe-Finder is a sleek, user-friendly web application that transforms the way users discover, plan, and prepare meals",
    image: recipefinder,
    tags: ["React", "tailwindcss","Html", "Mealdb-API"],
    demoUrl: "#",
    githubUrl: "https://github.com/HarshadGund/Hackthon",
  },
  {
    id:6,
    title: "Event Management ",
    description: "EventEase is a modern web application designed to streamline the planning, promotion, and execution of events—from intimate workshops to large-scale conferences.",
    image: eventmanager,
    tags: ["React", "tailwindcss","Html", "Node JS " , "ExpressJS","MongoDB Atlas","Cloudinary Cloud"],
    demoUrl: "#",
    githubUrl: "https://github.com/HarshadGund/MotionCut/tree/main/Event-Management-Platform-main",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl animate-fade-up-delay-1">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground animate-fade-up-delay-2">
          Explore some of my latest projects with interactive, modern, and aesthetic designs.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg shadow-lg group bg-card card-hover animate-fade-up-delay-3"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary transition-transform duration-300 group-hover:scale-110"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-xl font-semibold transition-transform duration-300 group-hover:translate-y-1">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground transition-opacity duration-300 group-hover:opacity-90">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/HarshadGund"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white cosmic-button"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
