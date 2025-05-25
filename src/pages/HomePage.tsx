import '../App.css'
const HomePage = () => {
    return (
        <div className="container">

            <header className="header">
                <div className="logo">
                    <span className="logo-d">T</span><span className="logo-f">A</span>
                </div>
                {/*<nav className="nav">*/}
                {/*    <a href="#projects" className="nav-link">Projects</a>*/}
                {/*    <a href="#resume" className="nav-link">Resume</a>*/}
                {/*    <a href="#contact" className="nav-link">Contact me</a>*/}
                {/*</nav>*/}
            </header>


            <main className="main">
                <div className="content">
                    <h1 className="title">
                        Hi:) I'm <span className="name">Asha</span><br/>
                        a FullStack Developer
                    </h1>

                    <p className="description">
                        With three years of experience in Marketing design in addition to full studies in User
                        Experience, I aim to make your next best impactful designs
                    </p>

                    <div className="buttons">
                        <button className="btn btn-primary">See the projects</button>
                        <button className="btn btn-secondary">Go to cv</button>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="#" className="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 8A6 6 0 0 1 6 8V21H4V8A8 8 0 0 1 20 8V21H18V8Z" fill="currentColor"/>
                                <circle cx="12" cy="4" r="2" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" className="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 15.46L5.27 21.69C4.91 21.81 4.54 21.53 4.66 21.17L10.89 5.44C11.01 5.08 11.53 5.08 11.65 5.44L17.88 21.17C18 21.53 17.63 21.81 17.27 21.69L1.54 15.46C1.18 15.34 1.18 14.82 1.54 14.7L17.27 8.47C17.63 8.35 18 8.63 17.88 8.99L11.65 24.72C11.53 25.08 11.01 25.08 10.89 24.72L4.66 8.99C4.54 8.63 4.91 8.35 5.27 8.47L21 14.7C21.36 14.82 21.36 15.34 21 15.46Z"
                                    fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </main>


            <div className="bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
        </div>
    )
}
export default HomePage