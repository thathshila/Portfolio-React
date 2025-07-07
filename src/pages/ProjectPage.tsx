import  { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        tags: ["JavaEE", "Jsp"],
        image: "https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg?format=webp&quality=70&width=688",
        githubLink: "https://github.com/thathshila/AAD-E-Platform.git",
        youtubeLink: "https://youtu.be/zcd4DC5CL-8?si=FTJ_i-IXm4O21lNM"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A responsive portfolio built with modern web technologies",
        tags: ["React", "Tailwind CSS", "Vite"],
        image: "https://neoresid-v2-dev.s3.eu-west-3.amazonaws.com/media/articles/1580585802565.jpg",
        githubLink: "https://github.com/thathshila/Portfolio-React.git"
    },
    {
        id: 3,
        title: "Culinary Academy",
        description: "A productivity app for organizing daily tasks",
        tags: ["Hibernate"],
        image: "https://softwaresuggest-cdn.s3-ap-southeast-1.amazonaws.com/pageimages/Student-Management-System-Guide-min.png",
        githubLink: "https://github.com/thathshila/ORM_Hibernate_project.git"
    },
    {
        id: 4,
        title: "Netwave",
        description: "Real-time Mobile service Platform with Spring",
        tags: ["JavaScript", "Html", "Spring"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShycEn80SnSiOiovg8_NNswa4FjGBUAtN20IFdqV5z9Qhh3jQZVx1s-USLw1NC3QU6DEE&usqp=CAU",
        githubLink: "https://github.com/thathshila/AAD-final-project.git",
        youtubeLink: "https://youtu.be/sB_rzL6sZmc?si=ceMS48Q_-F7Tt1O7"
    },
    {
        id: 5,
        title: "ORM Culinary Academy System",
        description: "An object-oriented management system for culinary academy course enrollments, scheduling, and payment tracking.",
        tags: ["Java", "ORM", "Hibernate"],
        image: "https://i.ytimg.com/vi/J3EsN9LAhT8/maxresdefault.jpg", // Replace with your system screenshot if available
        githubLink: "https://github.com/thathshila/ORM-Final-Project.git",
        youtubeLink: "https://youtu.be/q-hAjcYqMgs?si=IspguYgYrJIUNuyN"
    },
    {
        id: 6,
        title: "Smart Vehicle Parking System",
        description: "A real-time vehicle parking management system using modern web and backend technologies.",
        tags: ["Doker Hub", "Eureka Cloud", "Micro Service"],
        image: "https://media.licdn.com/dms/image/v2/D4D12AQGhAiILEefpyw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1708558686613?e=2147483647&v=beta&t=G1CEyBLgZg1LPMFmaWs1J-jbN0vq4bko1lhtQEyAVfE", // Replace with your actual system screenshot later
        githubLink: "https://github.com/thathshila/Vehicle-Parking-Management-System.git"
    },
    {
        id: 7,
        title: "Portfolio",
        description: "A responsive portfolio built with modern web technologies",
        tags: ["HTML","CSS","Java Script"],
        image: "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-1040x694.webp",
        githubLink: "https://github.com/thathshila/portfolio_new.git"
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
