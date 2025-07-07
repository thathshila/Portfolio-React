import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Let's Connect</h3>
                    <div className="social-links">
                        <a href="https://github.com/thathshila" target="_blank" rel="noopener noreferrer">
                            <span className="icon">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/thathshila-ashanganie-93796331a/" target="_blank" rel="noopener noreferrer">
                            <span className="icon">LinkedIn</span>
                        </a>
                        <a href="https://medium.com/@thathshilaashanganie9501" target="_blank" rel="noopener noreferrer">
                            <span className="icon">Medium</span>
                        </a>
                        <a href="mailto:thathshilaashanganie9501@gmail.com">
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
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Thathshila  Ashanganie. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;