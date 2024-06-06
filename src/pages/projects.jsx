import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './projects.css'
function Projects() {
    return (
        <div className="container">
            <Header></Header>
            <div className="main-projects">
                <div className="description">
                    <h1>Things I’ve made trying to put my dent in the universe.</h1>
                    <p>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
                </div>
                <div className="projects">
                    <div className='project-items'>
                        <ul>
                            <a href="#">
                                <li>
                                    <div className="project-icon">
                                        <img src="public/planetaria.ecd81ade.svg" alt="" />
                                    </div>
                                    <span className='title'>Planetaria</span>
                                    <p>Creating Technology To Empower Civilians To Explore Space To Their Own Terms</p>
                                    <div className="project-link">
                                        <span className='icon-link'></span>
                                        planetaria.tech
                                    </div>
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <div className="project-icon">
                                        <img src="public/animaginary.8d221e52.svg" alt="" />
                                    </div>
                                    <span className='title'>Animaginary</span>
                                    <p>High Performance Web Animation Library, Hand-Written In Optimized WASM</p>
                                    <div className="project-link">
                                        <span className='icon-link'></span>
                                        github.com
                                    </div>
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <div className="project-icon">
                                        <img src="public/helio-stream.2ac8d11f.svg" alt="" />
                                    </div>
                                    <span className='title'>HelioStream</span>
                                    <p>Real-time video streaming library, optimized for interstellar transmission.</p>
                                    <div className="project-link">
                                        <span className='icon-link'></span>
                                        github.com
                                    </div>
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <div className="project-icon">
                                        <img src="public/cosmos.c70b0295.svg" alt="" />
                                    </div>
                                    <span className='title'>cosmOS</span>
                                    <p>The operating system that powers our Planetaria space shuttles.</p>
                                    <div className="project-link">
                                        <span className='icon-link'></span>
                                        github.com
                                    </div>
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <div className="project-icon">
                                        <img src="public/open-shuttle.db0327e4.svg" alt="" />
                                    </div>
                                    <span className='title'>OpenShuttle</span>
                                    <p>The schematics for the first rocket I designed that successfully made it to orbit.</p>
                                    <div className="project-link">
                                        <span className='icon-link'></span>
                                        github.com
                                    </div>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <Footer></Footer>
        </div>
    )
}
export default Projects;