import React from "react";
import './hero.css'
import Lottie from "lottie-react"
import devAnimation from "../../../public/animation/hero.json"
import { motion } from "framer-motion";
function Hero() {
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <motion.img initial={{ transform: "scale(0)" }} animate={{ transform: "scale(1)" }} transition={{ duration: 0.3, type: "spring", stiffness: 100 }} src="./me-modified.png" className="avatar" />
                    <span className="icon-verified"></span>
                </div>
                <motion.h1 className="title" >
                    Full-Stack Web Developer & CS Student
                </motion.h1>
                <p className="subtitle">
                    I’m Abdelrahman Khairy, A Web Developer And A Student In Faculty Of Computer And Information Technology In KFS University
                </p>
                <div className="icons flex">
                    <div className="icon-twitter"></div>
                    <div className="icon-instagram"></div>
                    <div className="icon-github-square"></div>
                    <div className="icon-linkedin-square"></div>
                </div>
            </div>
            <div className="right animation">
                <Lottie
                    className="lottie"
                    animationData={devAnimation}
                    style={{ height: "300px" }}
                />
            </div>
        </section>
    )
}
export default Hero