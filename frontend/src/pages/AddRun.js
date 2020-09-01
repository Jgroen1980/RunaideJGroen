import React, { useState} from "react";
import Title from "../components/Title";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ButtonLink from "../components/ButtonLink";
import {QuestionSix, QuestionFive, QuestionFour, QuestionThree, QuestionTwo, QuestionOne, OverviewAnswers,} from "../components/AllQuestions";
import '../sass/pages/AddRun.scss';

import PreviousButton from '../assets/buttonImage-backward.png';
import NextButton from '../assets/buttonImage-forward.png';
import RunService from "../services/RunService";

const AddRunPage = () => {

    // initial state name and type of value
    const initialRunState = {
        runId: 0,
        average: '',
        alcohol: '',
        nutrition: false,
        momentOfDay: '',
        activity: false,
        sleep: '',
    }

    const [run, setRun] = useState(initialRunState);

    // useState to set the value for the overview component.
    const [checkAverageResult, setCheckAverageResult] = useState("");
    const [checkAlcoholResult, setCheckAlcoholResult] = useState("");
    const [checkNutritionResult, setCheckNutritionResult] = useState("");
    const [checkMomentOfDayResult, setCheckMomentOfDayResult] = useState("");
    const [checkActivityResult, setCheckActivityResult] = useState("");
    const [checkSleepResult, setCheckSleepResult] = useState("");


    const saveRun = () => {
        let data = {
            average: run.average,
            alcohol: run.alcohol,
            nutrition: run.nutrition,
            momentOfDay: run.momentOfDay,
            activity: run.activity,
            sleep: run.sleep,
        };

        RunService.create(data)
            .then(response => {
                setRun({
                    runId: response.data.runId,
                    average: response.data.average,
                    alcohol: response.data.alcohol,
                    nutrition: response.data.nutrition,
                    momentOfDay: response.data.momentOfDay,
                    activity: response.data.activity,
                    sleep: response.data.sleep,
                });
            })
            .catch(e => {
                console.log(e);
            });

    }

    const [questionNumber, setQuestionNumber] = useState(1);

    //conditions for the navigation buttons.
    const nextButton = () => {
        if (questionNumber <= 6 ) {
            setQuestionNumber(questionNumber + 1);
        }
    }
    const previousButton = () => {
        if (questionNumber >= 2) {
            setQuestionNumber(questionNumber - 1);
        }
    }
    const submitDataButton = () => {
        window.location = "http://localhost:3000/";
    }

    //set Average data calculation.
    const dataAverage = () => {
        let min = document.getElementById('min').value;
        let sec = document.getElementById('seconds').value;

        let result;
        console.log("min " + min);
        console.log("sec " + sec);

        if (min > 0 && min < 10) {
            if(sec > 0 && sec < 60) {
                result = parseInt(min) * 60 + parseInt(sec);
                console.log(result);
                setCheckAverageResult(min + ":" + sec + " min/km");
                return result;
            } else {
                alert("enter an average seconds between 0 and 60");
                document.getElementById('seconds').value = '';
                return null
            }
        } else {
            alert("enter an average minutes between 0 and 10");
            document.getElementById('min').value = '';
            return null;
        }
    }

    //set alcohol data.
    const dataAlcohol = () => {
        let alcoholResult = document.querySelector('input[name="glasses"]:checked').value;
        console.log(alcoholResult);
        // console.log(run);
        setCheckAlcoholResult(alcoholResult);
        return alcoholResult;
    }

    // set nutrition data.
    const dataNutrition = () => {
        let nutritionResult = document.querySelector('input[name="nutrition"]:checked').value;
        console.log(nutritionResult);
        // console.log(run);
        if (nutritionResult === "false") {
            setCheckNutritionResult("no")
        } else {
            setCheckNutritionResult("yes")
        }
        return nutritionResult;
    }
    // set moment of day data.
    const dataMoment = () => {
        let momentsResult = document.querySelector('input[name="moment"]:checked').value;
        console.log(momentsResult);
        // console.log(run);
        setCheckMomentOfDayResult(momentsResult);
        return momentsResult;
    }
    //set activity data.
    const dataActive = () => {
        let activeResult = document.querySelector('input[name="activity"]:checked').value;
        console.log(activeResult);
        // console.log(run);
        if (activeResult === "false") {
            setCheckActivityResult("no")
        } else {
            setCheckActivityResult("yes")
        }
        return activeResult;
    }
    //set sleep data.
    const dataSleep = () => {
        let hours = document.getElementById('sleep-hours').value;
        let minutes = document.getElementById('sleep-minutes').value;

        let result;
        if (hours < 24 && hours > 0) {
            if(minutes < 60 && minutes >= 0) {
                result = parseInt(hours) * 60 + parseInt(minutes);
                console.log(result);
                setCheckSleepResult(hours + " hours and " + minutes + " minutes");
                return result;
            } else {
                alert("Enter the amount of minutes upon the hours you slept");
                document.getElementById("sleep-minutes").value = '';
                return null;
            }
        } else {
            alert("Enter sleeping hours, no more than 24 hours in a day");
            document.getElementById("sleep-hours").value = '';
            return null;
        }
    }

    const alldata =()=>{
        setRun(run.average = dataAverage(), run.alcohol = dataAlcohol(),
            run.nutrition = dataNutrition(), run.momentOfDay = dataMoment(),
            run.activity = dataActive(), run.sleep = dataSleep());
    }

    return(

        <div className="addrun-container">
            <Logo/>
            <Title titleValue="ADD YOUR RUN"/>

            <div className='question-container' >
                <div className={questionNumber === 1 ? "active" : ""} >
                    <QuestionOne setAverage={dataAverage} />
                    <div className='navigation-container'>
                        <label className="route-question-label" htmlFor=""> {questionNumber} of 6 </label>
                        <div className={questionNumber <= 5 ? 'next-active' : ""} >
                            <input
                                className='forward-submit-button'
                                type="image"
                                name='submit'
                                src={NextButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    if( dataAverage() ?
                                        nextButton() :
                                        event.preventDefault());
                                }} />
                        </div>
                    </div>
                </div>
                <div className={questionNumber === 2 ? "active" : ""} >
                    <QuestionTwo setAlcohol={dataAlcohol} />
                    <div className='navigation-container'>
                        <div className={questionNumber >= 2 ? 'previous-active' : ""} >
                            <input
                                id='btn-backward'
                                className='backward-submit-button'
                                type="image"
                                name='submit'
                                src={PreviousButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    previousButton();
                                }}/>
                        </div>
                        <label className="route-question-label" htmlFor=""> {questionNumber} of 6 </label>
                        <div className={questionNumber <= 5 ? 'next-active' : ""} >
                            <input
                                className='forward-submit-button'
                                type="image"
                                name='submit'
                                src={NextButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    if( document.querySelector('input[name="glasses"]:checked') ?
                                        nextButton() :
                                        alert("please select the amount of alcohol you had") +
                                        event.preventDefault());
                                }} />
                        </div>
                    </div>
                </div>
                <div className={questionNumber === 3 ? "active" : ""} >
                    <QuestionThree setNutrition={dataNutrition}/>
                    <div className='navigation-container'>
                        <div className={questionNumber >= 2 ? 'previous-active' : ""} >
                            <input
                                id='btn-backward'
                                className='backward-submit-button'
                                type="image"
                                name='submit'
                                src={PreviousButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    previousButton();
                                }}/>
                        </div>
                        <label className="route-question-label" htmlFor=""> {questionNumber} of 6 </label>
                        <div className={questionNumber <= 5 ? 'next-active' : ""} >
                            <input
                                className='forward-submit-button'
                                type="image"
                                name='submit'
                                src={NextButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    if( document.querySelector('input[name="nutrition"]:checked') ?
                                        nextButton() :
                                        alert("please select if you had nutrtion") +
                                        event.preventDefault());
                                }} />
                        </div>
                    </div>
                </div>
                <div className={questionNumber === 4 ? "active" : ""} >
                    <QuestionFour setMoment={dataMoment} />
                    <div className='navigation-container'>
                        <div className={questionNumber >= 2 ? 'previous-active' : ""} >
                            <input
                                id='btn-backward'
                                className='backward-submit-button'
                                type="image"
                                name='submit'
                                src={PreviousButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    previousButton();
                                }}/>
                        </div>
                        <label className="route-question-label" htmlFor=""> {questionNumber} of 6 </label>
                        <div className={questionNumber <= 5 ? 'next-active' : ""} >
                            <input
                                className='forward-submit-button'
                                type="image"
                                name='submit'
                                src={NextButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    if( document.querySelector('input[name="moment"]:checked') ?
                                        nextButton() :
                                        alert("Select the moment of day you run") +
                                        event.preventDefault());
                                }} />
                        </div>
                    </div>
                </div>
                <div className={questionNumber === 5 ? "active" : ""} >
                    <QuestionFive setActivity={dataActive} />
                    <div className='navigation-container'>
                        <div className={questionNumber >= 2 ? 'previous-active' : ""} >
                            <input
                                id='btn-backward'
                                className='backward-submit-button'
                                type="image"
                                name='submit'
                                src={PreviousButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    previousButton();
                                }}/>
                        </div>
                        <label className="route-question-label" htmlFor=""> {questionNumber} of 6 </label>
                        <div className={questionNumber <= 5 ? 'next-active' : ""} >
                            <input
                                className='forward-submit-button'
                                type="image"
                                name='submit'
                                src={NextButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    if( document.querySelector('input[name="activity"]:checked') ?
                                        nextButton() :
                                        alert("Select if you where active") +
                                        event.preventDefault());
                                }} />
                        </div>
                    </div>
                </div>
                <div className={questionNumber === 6 ? "active" : ""} >
                    <QuestionSix setSleep={dataSleep} />
                    <div className='navigation-container'>
                        <div className={questionNumber >= 2 ? 'previous-active' : ""} >
                            <input
                                id='btn-backward'
                                className='backward-submit-button'
                                type="image"
                                name='submit'
                                src={PreviousButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    previousButton();
                                }}/>
                        </div>
                        <label className="route-question-label" htmlFor=""> {questionNumber} of 6 </label>
                        <div className={questionNumber <= 6 ? 'next-active' : ""} >
                            <input
                                className='forward-submit-button'
                                type="image"
                                name='submit'
                                src={NextButton}
                                alt="submit"
                                value='submit'
                                onClick={(event) => {
                                    if( dataSleep() ?
                                        nextButton() :
                                        event.preventDefault());
                                }} />
                        </div>
                    </div>
                </div>
                <div className={questionNumber === 7 ? "active" : ""} >
                    <OverviewAnswers
                        checkAverage= {checkAverageResult}
                        checkAlcohol={checkAlcoholResult}
                        checkNutrition={checkNutritionResult}
                        checkMoment={checkMomentOfDayResult}
                        checkActive={checkActivityResult}
                        checkSleep={checkSleepResult}
                    />
                </div>
            </div>


            {/*conditie is dat er een waarde is geselcteerd voordat er doorgeklikt kan worden naar de volgende vraag*/}
            {/*Bij klikken naar vokgende vraag word setQuestionNummer(questionNummer + 1)*/}
            {/*en bij vorige is setQuestionNumber(questionNumber - 1).*/}
            {/*De waarde die geselcteerd is moet worden opgeslagen zodat deze op het eind doorgegevn kan worden aan de DB.*/}
            <div className="submit-button">
                {
                    questionNumber === 7 ? <ButtonLink textLinkText="SUBMIT"
                                                       checkValuesEntered={(event) => {
                                                           if(dataAverage() && dataAlcohol() && dataNutrition()
                                                           && dataMoment() && dataActive() && dataSleep() ?
                                                           (setTimeout(submitDataButton, 2000) +
                                                               alldata() +
                                                               alert("your run has saved") + saveRun() ) :
                                                               alert("enter the amount of sleep you had") +
                                                               event.preventDefault());
                                                       }
                    } /> : null
                }
                <div className='delete-run-id'>
                    {
                        questionNumber === 7 ?
                            <a
                            href="/"
                            onClick={() => { alert("Your run has been deleted"); }}
                            >
                            Or delete this run</a> : null
                    }

                </div>
            </div>


            {/*{ op voorwaarde dat alle vragen zijn ingevuld <ButtonLink textLinkText={SUBMIT} textLinkTo={}/>}*/}
            <div className='footer-addrun'>
                <Footer footerText="about runAide" footerLink="/about"/>
            </div>
        </div>
    );
}

export default AddRunPage;