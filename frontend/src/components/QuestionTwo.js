import React from "react";
import '../sass/components/QuestionTwo.scss';

const QuestionTwo = ({setAlcohol}) => {

    return(
        <div id='number-two' className='question-container-two'>
            <form action="" className="question-two-container" id='fromTwo'>
                <p className="question-title" >Amount of alcohol glasses you had within the past 24 hours?</p>
                <input
                    className="input-value"
                    onChange={setAlcohol}
                    type="radio"
                    id="zero"
                    value='0'
                    name='glasses'/>
                <label className="question-label" htmlFor="zero">no alcohol</label>
                <input
                    className="input-value"
                    onChange={setAlcohol}
                    type="radio"
                    id="one"
                    value='1'
                    name='glasses'/>
                <label className="question-label" htmlFor="one">1 glass</label>
                <input
                    className="input-value"
                    onChange={setAlcohol}
                    type="radio"
                    id="two"
                    value='2'
                    name='glasses'/>
                <label className="question-label" htmlFor="two">2 glasses</label>
                <input
                    className="input-value"
                    onChange={setAlcohol}
                    type="radio"
                    id="three"
                    value='3'
                    name='glasses'/>
                <label className="question-label" htmlFor="three">3 glasses</label>
                <input
                    className="input-value"
                    onChange={setAlcohol}
                    type="radio"
                    id="four"
                    value='4'
                    name='glasses'/>
                <label className="question-label" htmlFor="four">4 or more glasses</label>
            </form>
        </div>
    );
}

export default QuestionTwo;