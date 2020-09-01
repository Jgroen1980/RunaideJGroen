import React from "react";
import '../sass/components/OverviewAnswers.scss';

const OverviewAnswers = ({checkAverage, checkAlcohol, checkNutrition, checkMoment, checkActive, checkSleep}) => {

    return (
        <div className="overview-answers">
            <p className="overview-title">Overview of run to be added</p>
            <p>average run: {checkAverage}</p>
            <p>glasses of alcohol: {checkAlcohol}</p>
            <p>nutrition before run: {checkNutrition}</p>
            <p>exercise in the: {checkMoment}</p>
            <p>Active before running: {checkActive}</p>
            <p>Amount of sleep: {checkSleep}</p>
        </div>
    );
}

export default OverviewAnswers;