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
                        Hello! I'm [Your Name], a [Your Profession] with [X] years of experience in
                        [your skills/technologies]. I specialize in [your specialties] and have a passion
                        for creating efficient, user-friendly applications.
                    </p>
                    <p>
                        My journey in tech began [how you got started]. Since then, I've worked with
                        various companies and clients, helping them solve problems through technology.
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
                        When I'm not coding, you can find me [your hobbies/interests]. I believe in
                        continuous learning and regularly [how you keep learning].
                    </p>
                </div>

                <div className="about-image">
                    {/* Replace with your actual image or illustration */}
                    <div className="profile-image-placeholder"></div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage