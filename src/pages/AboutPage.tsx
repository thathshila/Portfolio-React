import '../styles/About.css'
import '../App.css'
const AboutPage = () => {
    return (
        <div className="about-container">
            <section className="about-header">
                <h1>About Me</h1>
                <p className="tagline">A passionate developer creating digital solutions</p>
            </section>

            <section className="about-content">
                <div className="about-text">
                    <h2>My Journey</h2>
                    <p>
                        Hello! I'm Thathshila Ashanganie, a Computer Science student with hands-on experience
                        in Java, Python, JavaScript, and React. I specialize in full-stack web development
                        and mobile application development and am passionate about creating efficient,
                        user-friendly solutions.
                    </p>

                    <h2>Skills & Expertise</h2>
                    <ul className="skills-list">
                        <li>Frontend Development (React, JavaScript, HTML/CSS)</li>
                        <li>Backend Development (Node.js, Python, etc.)</li>
                        <li>UI/UX Design Principles</li>
                        <li>Database Management</li>
                        <li>Mobile Development (if applicable)</li>
                    </ul>

                    <h2>Beyond Coding</h2>
                    <p>
                        When I'm not coding, you can find me writing technical articles and sharing insights
                        about programming concepts and emerging technologies. I believe in continuous learning
                        and regularly publish content on platforms like Medium or personal blogs, helping others
                        while deepening my own understanding of complex topics.
                    </p>
                </div>

                <div className="about-image">
                    <div className="profile-image-placeholder"
                         style={{backgroundImage: 'url(/src/assets/IMG_9080.JPG)'}}>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage