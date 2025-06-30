import  { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        tags: ["JavaEE", "Jsp"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/ecommerce-platform",
        youtubeLink: "https://youtube.com/watch?v=example1"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A responsive portfolio built with modern web technologies",
        tags: ["React", "Tailwind CSS", "Vite"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/portfolio-website"
    },
    {
        id: 3,
        title: "Culinary Academy",
        description: "A productivity app for organizing daily tasks",
        tags: ["Hibernate"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/task-management-app"
    },
    {
        id: 4,
        title: "MeetUpPro",
        description: "Real-time Online Appointment Platform with Spring",
        tags: ["JavaScript", "Html", "Spring"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/weather-dashboard",
        youtubeLink: "https://youtu.be/gSRSuErWX0g"
    },
    {
        id: 5,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        tags: ["JavaEE", "Jsp"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/ecommerce-platform",
        youtubeLink: "https://youtube.com/watch?v=example1"
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "A responsive portfolio built with modern web technologies",
        tags: ["React", "Tailwind CSS", "Vite"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/portfolio-website"
    },
    {
        id: 7,
        title: "Culinary Academy",
        description: "A productivity app for organizing daily tasks",
        tags: ["Hibernate"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/task-management-app"
    },
    {
        id: 8,
        title: "MeetUpPro",
        description: "Real-time Online Appointment Platform with Spring",
        tags: ["JavaScript", "Html", "Spring"],
        image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        githubLink: "https://github.com/yourusername/weather-dashboard",
        youtubeLink: "https://youtu.be/gSRSuErWX0g"
    }
];

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="projects-section">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="project-card"
                    >
                        <div className="project-image-wrapper">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`project-image ${hoveredProject === project.id ? 'scale-up' : ''}`}
                            />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        {hoveredProject === project.id && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="project-overlay"
                            >
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                                )}
                                {project.youtubeLink && (
                                    <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">YouTube</a>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
