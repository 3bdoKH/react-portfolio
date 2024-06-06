import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    const [model, setModel] = useState(false)
    const [theme, setTheme] = useState(
        localStorage.getItem("currentMode") ?? "dark"
    );

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);
    return (
        <header className="flex">
            <button className="show" onClick={() => {
                setModel(true);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="logo">
                <Link to="/">
                    <img src="public/me-modified.png" alt="" />
                </Link>
            </div>
            <nav>
                <ul className="flex">
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
            </nav>
            <button
                onClick={() => {
                    localStorage.setItem(
                        "currentMode",
                        theme === "dark" ? "light" : "dark"
                    );
                    setTheme(localStorage.getItem("currentMode"));
                }}
                className="mode flex"
            >
                {theme === "dark" ? (
                    <span className="icon-moon-o"> </span>
                ) : (
                    <span className="icon-sun"> </span>
                )}
            </button>
            {
                model &&
                <div className="fixed">
                    <ul className="model">
                        <div className="close" onClick={() => {
                            setModel(false)
                        }}>X</div>
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
                </div>
            }
        </header>
    )
}
export default Header
