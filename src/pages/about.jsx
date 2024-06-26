import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom'
import './about.css'
function About() {
    return (
        <div id='up' className='container' >
            <Header></Header>
            <div className="main-section">
                <div className="image">
                    <div className="n-image">
                        <img src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=640&q=75" alt="" />
                    </div>
                </div>
                <div className="left">
                    <h1>I’m Abdelrahman Khairy. I live in Kafr-Elsheikh , where I design the future.</h1>
                    <p>I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my dad brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
                    <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.</p>
                    <p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
                    <p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
                </div>
                <div className="right">
                    <ul>
                        <li><Link to="#"><span className='icon-twitter'></span> Follow On Twitter</Link></li>
                        <li><Link to="#"><span className='icon-instagram'></span> Follow On Instagram</Link></li>
                        <li><Link to="#"><span className='icon-github-square'></span> Follow On GitHub</Link></li>
                        <li><Link to="#"><span className='icon-linkedin-square'></span> Follow On Linkedin</Link></li>
                        <li><Link to="#"><span className='icon-envelope'></span> AbdoKhairy@gmail.com</Link></li>
                    </ul>
                </div>
            </div>
            <div className="divider"></div>
            <Footer></Footer>
        </div>
    )
}

export default About