import React from "react";
import './contact.css';
import Lottie from "lottie-react"
import contactAnimation from "../../../public/animation/contact.json"
function Contact() {
    return (
        <section className="contact">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact Us
            </h1>
            <p>
                Contact Us For More Information &
                Get Notified When I Publish Something New.
            </p>
            <div className="flex">
                <form action="">
                    <div className="flex">
                        <label htmlFor="Email">Email Address :</label>
                        <input required type="email" id="Email" placeholder="Email Address" />
                    </div>
                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="Message">Your Message : </label>
                        <textarea required name="" id="Message" placeholder="Send A Message"></textarea>
                    </div>
                    <button className="submit">Submit</button>
                </form>
                <div className="animation">
                    <Lottie
                        className="lottie"
                        animationData={contactAnimation}
                        style={{ height: "300px" }}
                    />
                </div>
            </div>
        </section>
    )
}
export default Contact