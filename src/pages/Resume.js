import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles/Resume.css'

const Resume = () => {
    return (
        <div>
            <Header />

            <div
                className="resume"
            >
                <h1>Resume</h1>
                <p>
                    Download my <a href="#" target="_blank">resume</a>
                </p>

                <div
                    className='frontend-app-header'
                >

                    <h2>Frontend Applications</h2>
                    <ul>
                        <li>
                            Weather Dashboard
                        </li>
                        <li>
                            Eccommerce App
                        </li>
                        <li>
                            Rwitter
                        </li>
                        <li>
                            Notifier
                        </li>
                        <li>
                            Track your Employees
                        </li>
                    </ul>

                </div>


                <div
                    className='backend-app-header'
                >

                    <h2>Backend Applications</h2>
                    <ul>
                        <li>
                            Weather Api
                        </li>
                        <li>
                                Thoughts App Api
                        </li>
                        <li>
                            Employee Manager Applications
                        </li>
                        <li>
                            Users Manager Applications
                        </li>
                    </ul>

                </div>

            </div>

            <Footer />
        </div >
    )
}

export default Resume