import React from 'react';

import Logo from "../components/Logo";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Footer from "../components/Footer";
import ButtonLink from "../components/ButtonLink";
import ButtonResult from "../components/ButtonResult";

import '../sass/pages/Home.scss';

const Homepage = () => {


    return(
      <div id='home-id' className="home-container">
            <Logo />
            <Title titleValue="WELCOME" />
            <SubTitle subtitleValue="know your own conditions" />
            <div className="buttons-container"  >
                <ButtonResult textLinkTo="/results" textLinkText="My results"/>
                <ButtonLink textLinkTo="/addrun" textLinkText="Add run"/>
            </div>
            <Footer footerText='about runAide' footerLink="/about" />
      </div>
    );
}

export default Homepage;