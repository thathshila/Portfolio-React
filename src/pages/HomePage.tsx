import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="greeting">Hello, I'm</span>
                            <span className="name">Thathshila Ashanganie</span>
                        </h1>
                        <p className="hero-subtitle">
                            Full Stack Developer & Creative Problem Solver
                        </p>
                        <p className="hero-description">
                            I craft beautiful, functional web experiences that bring ideas to life.
                            Passionate about clean code, innovative design, and building solutions that make a difference.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">View My Work</button>
                            <button className="btn-secondary">Get In Touch</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="code-visualization">
                            <div className="code-window">
                                <div className="window-header">
                                    <div className="window-controls">
                                        <span className="control red"></span>
                                        <span className="control yellow"></span>
                                        <span className="control green"></span>
                                    </div>
                                    <span className="window-title">portfolio.tsx</span>
                                </div>
                                <div className="code-content">
                                    <div className="code-line">
                                        <span className="line-number">1</span>
                                        <span className="code-text">
            <span className="keyword">const</span> <span className="variable">developer</span> = {"{"}
          </span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">2</span>
                                        <span className="code-text">
            &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">'coding'</span>,
          </span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">3</span>
                                        <span className="code-text">
            &nbsp;&nbsp;<span className="property">skills</span>: <span className="string">'unlimited'</span>
          </span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">4</span>
                                        <span className="code-text">{"}"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="floating-tech-icons">
                                <div className="tech-icon tech-icon-1">
                                    <span>{'<>'}</span>
                                </div>
                                <div className="tech-icon tech-icon-2">
                                    <span>{'{}'}</span>
                                </div>
                                <div className="tech-icon tech-icon-3">
                                    <span>⚛️</span>
                                </div>
                                <div className="tech-icon tech-icon-4">
                                    <span>💻</span>
                                </div>
                                <div className="tech-icon tech-icon-5">
                                    <span>🚀</span>
                                </div>
                                <div className="tech-icon tech-icon-6">
                                    <span>⚡</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">Technologies I Love</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <div className="skill-icon">⚛️</div>
                        <h3>React</h3>
                        <p>Building interactive UIs</p>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon">🚀</div>
                        <h3>Node.js</h3>
                        <p>Server-side development</p>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon">🎨</div>
                        <h3>CSS/SASS</h3>
                        <p>Styling & animations</p>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon">📱</div>
                        <h3>TypeScript</h3>
                        <p>Type-safe development</p>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="cta-content">
                    <h2>Let's Build Something Amazing Together</h2>
                    <p>I'm always excited to work on new projects and collaborate with creative minds.</p>
                    <button className="btn-cta">Start a Conversation</button>
                </div>
            </div>
        </div>
    );
};

export default Home;