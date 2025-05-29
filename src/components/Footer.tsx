import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Let's Connect</h3>
                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <span className="icon">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <span className="icon">LinkedIn</span>
                        </a>
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                            <span className="icon">Twitter</span>
                        </a>
                        <a href="mailto:youremail@example.com">
                            <span className="icon">Email</span>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <nav className="footer-nav">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>

                <div className="footer-section">
                    <h3>Credits</h3>
                    <p>Built with React</p>
                    <p>Designed with ❤️ by You</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;