
import React, { useEffect, useState } from "react";
import './main.css'
import { myProjects } from "./mainProjects"
import { AnimatePresence, motion } from "framer-motion";
function Main() {
    const [active, setActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
    const handleClick = (categories) => {
        setActive(categories);
        const newArr = myProjects.filter((item) => {
            const cc = item.category.find((myItem) => {
                return myItem === categories;
            });
            return cc;
        });
        setArr(newArr);
    }

    return (
        <main className="flex">
            <div className="main-left">
                <button onClick={() => {
                    handleClick("all");
                    setArr(myProjects);
                }} className={active === "all" ? "active" : ""}>All Projects</button>
                <button onClick={() => {
                    handleClick("css")
                }} className={active === "css" ? "active" : ""}>HTML & CSS</button>
                <button onClick={() => {
                    handleClick("js")
                }} className={active === "js" ? "active" : ""}>JavaScript</button>
                <button onClick={() => {
                    handleClick("react")
                }} className={active === "react" ? "active" : ""}>React & MUI</button>
                <button onClick={() => {
                    handleClick("node")
                }} className={active === "node" ? "active" : ""}>Node & Express</button>
            </div>
            <div className="main-right">


                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article key={item.imgPath} className="card" layout initial={{ transform: "scale(0)" }} animate={{ transform: "scale(1)" }} transition={{ duration: 0.3, type: "spring", stiffness: 100 }}>
                                <img width={266} src={item.imgPath} alt="" />
                                <div style={{ width: "266px" }} className="box">
                                    <h3 className="title">{item.projectTitle}</h3>
                                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt omnis quas optio facere praesentium eaque eligendi soluta</p>
                                    <div className="flex card-icons">
                                        <div className="flex" style={{ gap: "11px" }}>
                                            <div className="icon-link"></div>
                                            <div className="icon-github-square"></div>
                                        </div>
                                        <a href="#">More <span className="icon-arrow-right"></span></a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </AnimatePresence>
            </div>
        </main>
    )
}
export default Main