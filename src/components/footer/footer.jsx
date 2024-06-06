import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/speaking">Speaking</Link>
                </li>
                <li>
                    <Link to="/uses">Uses</Link>
                </li>
            </ul>
            <p>© 2024 Abdo Khairy</p>
        </footer>
    )
}
export default Footer