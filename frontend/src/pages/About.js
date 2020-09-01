import React from 'react';
import About from "../components/About";
import Title from "../components/Title";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import "../sass/pages/About.scss";

const AboutPage = () => {



    return(
        <div className="about-container">
            <Logo/>
            <Title titleValue="About"/>
            <About aboutLink="/" aboutTextLink=" started" />
            <Footer
                footerLink="/about"
                footerText="about runAide"
            />
        </div>
    );
}

export default AboutPage;