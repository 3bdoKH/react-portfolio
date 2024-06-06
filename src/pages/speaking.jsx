import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './speaking.css'
function Speaking() {
    return (
        <div className="container">
            <Header></Header>
            <div className="main-content-speaking">
                <div className="description">
                    <h1>I’ve spoken at events all around the world and been interviewed for many podcasts.</h1>
                    <p>One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.</p>
                </div>
                <div className="first">
                    <h2>Conferences</h2>
                    <div>
                        <a href="#">
                            <article>
                                <span>SysConf 2021</span>
                                <h2>In Space, No One Can Watch You Stream...Until Now</h2>
                                <p>A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.</p>
                                <div>Watch Vedio <span className='icon-arrow-right'></span></div>
                            </article>
                        </a>
                        <a href="#">
                            <article>
                                <span>Business Of Startups 2020</span>
                                <h2>Lessons Learned From Our First Product Recall</h2>
                                <p>They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.</p>
                                <div>Watch Vedio <span className='icon-arrow-right'></span></div>
                            </article>
                        </a>
                    </div>
                </div>
                <div className="second">
                    <h2>Podcasts</h2>
                    <div>
                        <a href="#">
                            <article>
                                <span>Encoding Design, July 2022</span>
                                <h2>Using Design As A Competitive Advantage</h2>
                                <p>How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.</p>
                                <div>Listen To Podcast <span className='icon-arrow-right'></span></div>
                            </article>
                        </a>
                        <a href="#">
                            <article>
                                <span>The Escape Velocity Show, March 2022</span>
                                <h2>Bootstrapping An Aerospace Company To $17M ARR</h2>
                                <p>The story of how we built one of the most promising space startups in the world without taking any capital from investors.</p>
                                <div>Listen To Podcast <span className='icon-arrow-right'></span></div>
                            </article>
                        </a>
                        <a href="#">
                            <article>
                                <span>How They Work Radio, September 2021</span>
                                <h2>Programming Your Company Cperating System</h2>
                                <p>On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.</p>
                                <div>Listen To Podcast <span className='icon-arrow-right'></span></div>
                            </article>
                        </a>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <Footer></Footer>
        </div>
    )
}
export default Speaking