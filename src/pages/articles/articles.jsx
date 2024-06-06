import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './articles.css'
import { Link } from 'react-router-dom'

function Articles() {
    return (
        <div className="container">
            <Header></Header>
            <div className="main-articles">
                <div className="discrebtion">
                    <h1>Writing on software design, company building, and the aerospace industry.</h1>
                    <p>All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
                </div>
                <div className="content">
                    <div className="article">
                        <span>September 5, 2022</span>
                        <Link className='article-link' to={'/articles'}>
                            <h2>Crafting A Design System For A Multiplanetary Future</h2>
                            <p>Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p>
                            <span className="read">Read Article <span className="icon-arrow-right"></span></span>
                        </Link>
                    </div>
                    <div className="article">
                        <span>September 2, 2022</span>
                        <Link className='article-link' to={'/articles'}>
                            <h2>Introducing Animaginary : High Performance Web Animation</h2>
                            <p>When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.</p>
                            <span className="read">Read Article <span className="icon-arrow-right"></span></span>
                        </Link>
                    </div>
                    <div className="article">
                        <span>July 14, 2022</span>
                        <Link className='article-link' to={'/articles'}>
                            <h2>Rewriting The CosmOS Kernal In Rust</h2>
                            <p>When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.</p>
                            <span className="read">Read Article <span className="icon-arrow-right"></span></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <Footer></Footer>
        </div>
    )
}

export default Articles