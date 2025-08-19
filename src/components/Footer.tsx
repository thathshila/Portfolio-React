import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Let's Connect</h3>
                    <div className="social-links">
                        <a href="https://github.com/thathshila" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/thathshila-ashanganie-93796331a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://medium.com/@thathshilaashanganie9501" target="_blank" rel="noopener noreferrer">
                            <FaMedium className="icon" />
                        </a>
                        <a href="mailto:thathshilaashanganie9501@gmail.com">
                            <FaEnvelope className="icon" />
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
                <p>&copy; {new Date().getFullYear()} Thathshila Ashanganie. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
