import React from "react";
import Logo from '../components/Logo';
import Title from "../components/Title";
import Footer from "../components/Footer";
import '../sass/pages/Results.scss';
import ButtonLink from "../components/ButtonLink";
import {SleepResults, ActivityResults, AlcoholResults, MomentResults, NutricionResults} from "../components/AllResults";

const ResultsPage = () => {

    const userNameforTitle = "Jaap,";

    return(
        <div className='result-container'>
            <Logo />
            <Title  titleValue={userNameforTitle} />
            <div className='result-content-container'>
                <p className='title-results'>Achieve your best results</p>
                <div className='all-results-container'>
                    <AlcoholResults/>
                    <NutricionResults/>
                    <MomentResults/>
                    <ActivityResults/>
                    <SleepResults/>
                </div>

            </div>
            <ButtonLink textLinkTo="/addrun" textLinkText="Add run" />
            <Footer
            footerText="about runAide"
            footerLink="/about"
            />
        </div>
    );
}

export default ResultsPage;