import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";

import './styles/Portfolio.css'
const Portfolio = () => {


    const projects = [
        {
            title: "Weather Dashboard",
            description: "Weather Dashboard is a simple dashboard for weather data and it provides a variety of features for weather data and data structures",
            image: "https://uizard.io/static/078d542701fb309751032fdf64b48e84/4693b/weather-web-light-cover.webp",
            url: "https://github.com/v4nessa44/weather-dashboard"
        },
        {
            title: "Eccommerce App",
            description: "A Ecommerce App is a simple app that allows users to add items to their shopping cart and view their cart",
            image: "https://ecommerceguide.com/wp-content/uploads/2020/02/India-3Snapdeal.jpg",
            url: "https://github.com/v4nessa44/ecommerce-backend"
        },
        {
            title: "Rwitter",
            description: "A Rwitter is a social media app that allows users to post tweets, comments, and retweets",
            image: "https://curator-prod-site-s3.b-cdn.net/wp-content/uploads/2020/05/twitter-example-1024x370.png?width=860",
            url: "https://github.com/v4nessa44/social-network-api"
        },
        {
            title: "Notifier",
            description: "A Note taker is a simple app that allows users to post notes and view their notes",
            image: "https://collegeinfogeek.com/wp-content/uploads/2019/03/image3.png",
            url: "https://github.com/v4nessa44/note_taker"
        },
        {
            title: "Track your Employees",
            description: " A Track your Employees is a simple app that allows users to track their employees and view their employees",
            image: "https://erpnext.com/files/accounts-dashboard-1335c7cb.png",
            url: "https://github.com/v4nessa44/employee-tracker"
        },
        {
            title: "Text Editor",
            description: "A Text Editor is a simple text editor that allows users to write and edit text",
            image: "https://www.senecacollege.ca/ssos/help/webhelp/ckeditor.png",
            url: "https://github.com/v4nessa44/text_editor_"
        },

    ]

    return (
        <div className="projects">
            <Header />


            <h1>Projects</h1>
            <div className="projectsContainer">

                {projects.map((project) => {
                    return <Project project={project} />
                })}
            </div>

            <Footer />
        </div>
    )
}


export default Portfolio;