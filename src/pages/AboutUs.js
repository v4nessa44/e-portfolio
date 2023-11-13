import React from "react";
import { UserOutlined } from '@ant-design/icons';
import './styles/AboutUs.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import './styles/AboutUs.css'
const AboutUs = () => {

    return (
        <>
            <Header />
            <div className="about">
                <h1>About Me</h1>
                <span> <UserOutlined /> </span>
                <p>
                Hello there! I'm Vanessa, a passionate Full Stack Developer with a love for creating robust, user-friendly web applications. My journey in the world of coding began with a curiosity that has evolved into a rewarding career. I thrive on challenges and am always eager to learn new technologies to stay at the forefront of the rapidly evolving tech landscape. Feel free to explore my portfolio, and don't hesitate to reach out.
                </p>

                <p>
                My toolbox includes a variety of technologies. On the frontend, I am well-versed in modern JavaScript frameworks like React, ensuring seamless and dynamic user experiences. In the backend, I leverage the power of Node.js, building robust APIs and scalable server-side solutions. Database management is second nature to me, with hands-on experience in SQL and NoSQL databases.
                </p>

            </div>
            <Footer />
        </>
    )
}

export default AboutUs